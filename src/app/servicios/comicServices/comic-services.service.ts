import { Injectable } from '@angular/core';
import { comics } from 'src/app/comics/ComicInterface/comics-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, EMPTY, Observable, of, ReplaySubject } from 'rxjs';

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

}
