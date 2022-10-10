import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './features/movie-details/movie-details.component';
import { SearchComponent } from './features/search/search.component';
import { TvDetailsComponent } from './features/tv-details/tv-details.component';

const routes: Routes = [
  {
    path: 'search',

    component: SearchComponent,
  },
  {
    path: 'tv/:id',
    component: TvDetailsComponent,
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
  },
  {
    path: '**',
    redirectTo: 'search',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
