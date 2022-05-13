import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MoviesService } from 'src/app/shared/services/movies.service';
import { MovieInterface } from 'src/app/shared/types/movie.interface';
import { IMAGES_SIZES } from 'src/app/shared/constants/image-sizes';
import { MovieVideoInterface } from 'src/app/shared/types/movieVideo.interface';
import { MovieImagesInterface } from 'src/app/shared/types/movieImages.interface';
import { MovieCreditsInterface } from 'src/app/shared/types/movieCredits.interface';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mov-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.scss']
})
export class MovieDisplayComponent implements OnInit, OnDestroy {
  movie: MovieInterface | null = null;
  movieVideos: MovieVideoInterface[] = [];
  movieImages: MovieImagesInterface | null = null;
  movieCredits: MovieCreditsInterface | null = null;
  similarMovies: MovieInterface[] = [];
  imagesSizes = IMAGES_SIZES;

  private urlSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.urlSubscription = this.route.params.subscribe((params) => {
      this.getMovie(params['id']);
      this.getMovieVideos(params['id']);
      this.getMovieImages(params['id']);
      this.getMovieCredits(params['id']);
      this.getSimilarMovies(params['id']);

      let id = params['id'];
      this.router.navigateByUrl('/movie/' + id);
    });
  }

  ngOnDestroy(): void {
    this.urlSubscription.unsubscribe();
  }

  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  getMovieVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe((movieVideoData) => {
      this.movieVideos = movieVideoData;
    });
  }

  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
    });
  }

  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
    });
  }

  getSimilarMovies(id: string) {
    this.moviesService.getSimilarMovies(id).subscribe((similarMoviesData) => {
      this.similarMovies = similarMoviesData;
    });
  }
}
