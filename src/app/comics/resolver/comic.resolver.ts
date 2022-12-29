import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { comics } from '../ComicInterface/comics-interface';
import { ComicServicesService } from '../../servicios/comicServices/comic-services.service';

@Injectable({
  providedIn: 'root'
})
export class ComicResolver implements Resolve<comics> {
  constructor(
    private comicService: ComicServicesService,
    private router: Router
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<comics> {
    return this.comicService.getComic(+route.params['id']).pipe(
      catchError((error) => {
        this.router.navigate(['/comics']);
        return EMPTY;
      })
    );
  }
}
