import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { MovieResponseInterface } from '../types/movieResponse.interface';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MovieInterface } from '../types/movie.interface';
import { MovieVideoResponseInterface } from '../types/movieVideoResponse.interface';
import { MovieImagesInterface } from 'src/app/shared/types/movieImages.interface';
import { MovieCreditsInterface } from '../types/movieCredits.interface';
import { MovieGenresResponseInterface } from '../types/movieGenresResponse.interface';

@Injectable()
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.httpClient
      .get<MovieResponseInterface>(
        `${environment.apiURL}/movie/${type}?api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  getMovie(id: string) {
    return this.httpClient.get<MovieInterface>(
      `${environment.apiURL}/movie/${id}?api_key=${environment.apiKey}`
    );
  }

  getMovieVideos(id: string) {
    return this.httpClient
      .get<MovieVideoResponseInterface>(
        `${environment.apiURL}/movie/${id}/videos?api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMoviesGenres() {
    return this.httpClient
      .get<MovieGenresResponseInterface>(
        `${environment.apiURL}/genre/movie/list?api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }

  getMoviesByGenre(genreId: string, pageNumber: number) {
    return this.httpClient
      .get<MovieResponseInterface>(
        `${environment.apiURL}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovieImages(id: string) {
    return this.httpClient.get<MovieImagesInterface>(
      `${environment.apiURL}/movie/${id}/images?api_key=${environment.apiKey}`
    );
  }

  getMovieCredits(id: string) {
    return this.httpClient.get<MovieCreditsInterface>(
      `${environment.apiURL}/movie/${id}/credits?api_key=${environment.apiKey}`
    );
  }

  getSimilarMovies(id: string, count: number = 12) {
    return this.httpClient
      .get<MovieResponseInterface>(
        `${environment.apiURL}/movie/${id}/similar?api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  searchMovies(page: number, searchValue?: string) {
    //If there is searchValue, use /search/movie, else use /movie/popular
    const uri = searchValue ? '/search/movie' : '/movie/popular';
    return this.httpClient
      .get<MovieResponseInterface>(
        `${environment.apiURL}${uri}?page=${page}&query=${searchValue}&api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
