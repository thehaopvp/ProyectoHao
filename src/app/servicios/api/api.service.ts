import { Injectable } from '@angular/core';
import { UserLogin ,Response, TokenResponse } from '../../auth/interface/user';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private readonly http: HttpClient,

    private readonly router: Router
  ) { }
  logged: boolean = false;


  login(userLogin: UserLogin): Observable<void> {
    this.http
    .post<TokenResponse>(`user/login`, userLogin)
    .subscribe(() => {
      this.router.navigate(['/comics']);
    });

    return EMPTY;

  }


  register(userLogin: UserLogin): Observable<void> {

    return this.http.post<void>(`user`, userLogin);
  }


}
