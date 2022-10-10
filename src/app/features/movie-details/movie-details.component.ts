import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { catchError, Observable, of, switchMap, tap } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails$: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {
    this.movieDetails$ = route.params.pipe(
      switchMap((params: Params) => {
        return this.movieService.getMovie$(params['id']);
      }),
      catchError((err: any) => {
        this.router.navigate(['/search']);
        return of(err);
      })
    );
  }

  ngOnInit(): void {}
}
