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
  getMovie$(id: number): Observable<any> {
    return this.http.get<any>(environment.api + '/movie/' + id, {
      params: {
        api_key: environment.key,
      },
    });
  }
}
