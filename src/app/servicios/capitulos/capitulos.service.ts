import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, EMPTY, map, Observable, of, ReplaySubject } from 'rxjs';
import { capitulos ,capituloResponse,capitulosResponse } from '../../comics/capitulosInterface/capitulos';

@Injectable({
  providedIn: 'root',
})
export class CapitulosService {
  constructor(
    private readonly http: HttpClient,

    private readonly router: Router
  ) {}

  subirCapitulos(capitulos: capitulos): Observable<void> {
    return this.http.post<void>(`capitulos`, capitulos);
  }

  getAllCapitulos(id:number): Observable<capitulos[]> {
    return this.http.get<capitulosResponse>(`capitulos/list/${id}`).pipe(
      map(resp => resp.capitulo)
    );
  }

  getCapitulos(id:number):Observable<capitulos>{
    return this.http.get<capituloResponse>(`capitulos/${id}`).pipe(
      map(Com => Com.capitulo)
    );
  }

  siguiente(id:number):Observable<capitulos>{
    return this.http.get<any>(`capitulos/siguiente/${id}`)
    ;
  }

  anterior(id:number):Observable<capitulos>{
    return this.http.get<any>(`capitulos/anterior/${id}`)
  }

}
