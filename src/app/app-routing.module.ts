import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './features/details/details.component';
import { SearchComponent } from './features/search/search.component';

const routes: Routes = [
  {
    path: 'search',

    component: SearchComponent,
  },
  {
    path: ':type/:id',
    component: DetailsComponent,
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
