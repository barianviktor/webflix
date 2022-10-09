import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGenre } from '../models/interfaces/genre.interface';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  constructor(private http: HttpClient) {}
  getGenres$(): Observable<IGenre[]> {
    return this.http.get<IGenre[]>(environment.api + '/genre/tv/list', {
      params: {
        api_key: environment.key,
      },
    });
  }
}
