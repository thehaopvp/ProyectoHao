import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';


import { ApiService } from '../servicios/api/api.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private readonly apiService: ApiService,private readonly router: Router,
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let autentification:Boolean;
      this.apiService.isLogged().subscribe(e=> autentification = e);
      if(!autentification!)
      {
        return this.router.createUrlTree(['/auth'])
      }
      else
      {
        return true;
      }
  }
}


