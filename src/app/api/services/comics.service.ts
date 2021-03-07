import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Comic, ComicFilters } from '../models/comics.model';
import { handleError } from 'src/utils';
import { Pagination, ResponseWrapper } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ComicsService {
  private baseURL = environment.baseApiURL;

  constructor(private http: HttpClient) {}

  public list(filters: ComicFilters): Observable<Pagination<Comic>> {
    return this.http
      .get<Pagination<Comic>>(`${this.baseURL}/comics`, {
        params: {
          ...(filters as any),
        },
      })
      .pipe(catchError(handleError))
  }

  public getByID(comicId: number): Observable<Pagination<Comic>> {
    return this.http
      .get<Pagination<Comic>>(`${this.baseURL}/comics/${comicId}`)
      .pipe(catchError(handleError));
  }
}
