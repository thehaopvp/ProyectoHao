import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { CapitulosService } from '../../servicios/capitulos/capitulos.service';
import { capitulos } from '../capitulosInterface/capitulos';


@Injectable({
  providedIn: 'root'
})
export class CapitulosResolver implements Resolve<capitulos> {
  constructor(
    private capitulosService: CapitulosService,
    private router: Router
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<capitulos> {
    return this.capitulosService.getCapitulos(+route.params['id']).pipe(
      catchError((error) => {
        this.router.navigate(['/comics']);
        return EMPTY;
      })
    );
  }
}
