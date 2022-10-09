import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { ISearchParams } from 'src/app/models/interfaces/searchParam.interface';
import { ISearchResult } from 'src/app/models/interfaces/searchResult.interface';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchOptions: ISearchParams = {
    query: '',
    page: 1,
  };
  searchResult$?: Observable<ISearchResult>;
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params: Params) => {
      console.log(params);
      if (params['query']) this.searchOptions.query = params['query'];
      if (params['page']) this.searchOptions.page = params['page'];
      if (this.searchOptions.query.length >= 3) {
        this.searchResult$ = this.searchService.getMultiByName$(
          this.searchOptions
        );
      }
    });
  }

  ngOnInit(): void {
    console.log(this.searchOptions.query);
  }

  setQuery(query: string) {
    this.searchOptions.query = query;
    this.searchOptions.page = 1;
    this.router.navigate(['/search'], {
      queryParams: {
        ...this.searchOptions,
      },
    });
  }
  setPage(page: number) {
    this.searchOptions.page = page;
    this.router.navigate(['/search'], {
      queryParams: {
        ...this.searchOptions,
      },
    });
  }
}
