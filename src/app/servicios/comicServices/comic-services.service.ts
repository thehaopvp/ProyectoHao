import { Injectable } from '@angular/core';
import { ComicResponse, comics, ComicsResponse } from '../../comics/ComicInterface/comics-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, EMPTY, map, Observable, of, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComicServicesService {
  constructor(
    private readonly http: HttpClient,

    private readonly router: Router
  ) {}

  subirComics(comics: comics): Observable<void> {
    return this.http.post<void>(`comics`, comics);
  }

  getAllComics(): Observable<comics[]> {
    return this.http.get<ComicsResponse>('comics').pipe(
      map(resp => resp.comic)
    );
  }

  getComic(id:number):Observable<comics>{
    return this.http.get<ComicResponse>(`comics/${id}`).pipe(
      map(Com => Com.comic)
    );
  }

}
