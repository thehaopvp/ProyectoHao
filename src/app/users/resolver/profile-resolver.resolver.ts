import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { User } from '../../auth/interface/user';
import { UserServiceService } from '../user-service/user-service.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileResolverResolver implements Resolve<User> {
  constructor(
    private usersService: UserServiceService,
    private router: Router
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    if(route.params['id'])
    {
      return this.usersService.getProfile(+route.params['id']).pipe(
        catchError((error) => {
          this.router.navigate(['/comics']);
          return EMPTY;
        })
      );
    }else
    {
      return this.usersService.getMyProfile().pipe(
        catchError((error) => {
          this.router.navigate(['/comics']);
          return EMPTY;
        })
      );
    }

  }
}
