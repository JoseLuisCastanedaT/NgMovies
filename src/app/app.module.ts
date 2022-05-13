import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenresModule } from './pages/genres/genres.module';
import { HomeModule } from './pages/home/home.module';
import { MovieDisplayModule } from './pages/movie-display/movie-display.module';
import { FooterModule } from './shared/modules/footer/footer.module';
import { HeaderModule } from './shared/modules/header/header.module';
import { SliderModule } from './shared/modules/slider/slider.module';
import { MoviesService } from './shared/services/movies.service';
import { TvShowsService } from './shared/services/tvShows.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    SliderModule,
    MovieDisplayModule,
    GenresModule
  ],
  providers: [HttpClient, MoviesService, TvShowsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
