import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './features/search/search.component';
import { MediaCardsContainerComponent } from './components/media-cards-container/media-cards-container.component';
import { MediaCardComponent } from './components/media-card/media-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationItemComponent } from './components/pagination-item/pagination-item.component';
import { MovieDetailsComponent } from './features/movie-details/movie-details.component';
import { TvDetailsComponent } from './features/tv-details/tv-details.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchComponent,
    MediaCardsContainerComponent,
    MediaCardComponent,
    PaginationComponent,
    PaginationItemComponent,
    MovieDetailsComponent,
    TvDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
