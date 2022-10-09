import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISearchParams } from '../models/interfaces/searchParam.interface';
import { ISearchResult } from '../models/interfaces/searchResult.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getMultiByName$(searchOption: ISearchParams): Observable<ISearchResult> {
    return this.http.get<ISearchResult>(environment.api + '/search/multi', {
      params: {
        api_key: environment.key,
        ...searchOption,
      },
    });
  }
}
