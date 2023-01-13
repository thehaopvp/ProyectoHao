import { Injectable } from '@angular/core';
import {
  ComicResponse,
  comics,
  ComicsResponse,
} from '../../comics/ComicInterface/comics-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, EMPTY, map, Observable, of, ReplaySubject } from 'rxjs';
import {
  ComentarioResponse,
  Comentarios,
  ComentariosResponse,
} from '../../comics/comentariosInterface/comentarios';

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
    return this.http
      .get<ComicsResponse>('comics')
      .pipe(map((resp) => resp.comic));
  }

  getComic(id: number): Observable<comics> {
    return this.http
      .get<ComicResponse>(`comics/${id}`)
      .pipe(map((Com) => Com.comic));
  }

  getAllComentario(id: number): Observable<Comentarios[]> {
    return this.http
      .get<ComentariosResponse>(`comentarios/list/${id}`)
      .pipe(map((Com) => Com.comentario));
  }

  createComentario(Comentarios: Comentarios): Observable<void> {
    return this.http.post<void>(`comentarios`, Comentarios);
  }

  // getCapitulos(id: number): Observable<Comentarios> {
  //   return this.http
  //     .get<ComentarioResponse>(`capitulos/${id}`)
  //     .pipe(map((Com) => Com.Comentarios));
  // }
}
