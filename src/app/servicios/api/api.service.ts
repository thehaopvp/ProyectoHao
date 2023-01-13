import { Injectable } from '@angular/core';
import {
  UserLogin,
  Response,
  User,
  TokenResponse,
} from '../../auth/interface/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, EMPTY, Observable, of, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  logged: boolean = false;
  loginChange$ = new ReplaySubject<boolean>(1);
  admin$ = new ReplaySubject<boolean>(1);
  constructor(
    private readonly http: HttpClient,

    private readonly router: Router
  ) {}

  login(userLogin: UserLogin): Observable<void> {
    this.http
      .post<TokenResponse>(`user/login`, userLogin)
      .subscribe((value) => {
        localStorage.setItem('token', value.token);
        this.loginChange$.next(true);
        this.logged = true;
        this.checkAdmin();
        this.router.navigate(['/comics']);
      });

    return EMPTY;
  }

  register(userLogin: UserLogin): Observable<void> {
    return this.http.post<void>(`user`, userLogin);
  }

  changeUser(User: User): Observable<void> {
    return this.http.put<void>(`user/`+ User.id, User);
  }

  checktoken(): Observable<void> {
    return this.http.get<void>(`/checktoken`);
  }

  checkAdmin(): void {
    this.http.get<any>(`user/admin`).subscribe({
      next: (admin) => {(this.admin$.next(admin.admin),localStorage.setItem('user', admin.user) )},

      error: (admin) => console.error(admin),
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loginChange$.next(false);
    this.logged = false;
    this.router.navigate(['/auth/login']);
  }

  isLogged(): Observable<boolean> {
    if (!this.logged && !localStorage.getItem('token')) {
      return of(false);
    } else if (this.logged && localStorage.getItem('token')) return of(true);
    else if (!this.logged && localStorage.getItem('token')) {
      return this.checktoken().pipe(() => {
        this.logged = true;
        this.loginChange$.next(true);
        catchError(() => {
          localStorage.removeItem('token');
          return of(false);
        });
        return of(true);
      });
    } else {
      return of(false);
    }
  }
}
