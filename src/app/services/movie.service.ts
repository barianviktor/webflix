import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGenre } from '../models/interfaces/genre.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  getGenres$(): Observable<IGenre[]> {
    return this.http.get<IGenre[]>(environment.api + '/genre/movie/list', {
      params: {
        api_key: environment.key,
      },
    });
  }
  getMovie$(): Observable<any> {
    return this.http.get<any>(environment.api + '/genre/18-drama/tv/items', {
      params: {
        api_key: environment.key,
        /* query: 'Game of Thrones',
        year: 2005, */
      },
    });
  }
}
