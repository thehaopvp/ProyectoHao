import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { ComicServicesService } from '../../servicios/comicServices/comic-services.service';
import { Comentarios } from '../comentariosInterface/comentarios';

@Injectable({
  providedIn: 'root'
})
export class ComentariosResolver implements Resolve<Comentarios[]> {
  constructor(
    private comicServicesService: ComicServicesService,
    private router: Router
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Comentarios[]> {
    return this.comicServicesService.getAllComentario(+route.params['id']).pipe(
      catchError((error) => {
        this.router.navigate(['/comics']);
        return EMPTY;
      })
    );
  }
}
