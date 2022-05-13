import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { TvShowsService } from 'src/app/shared/services/tvShows.service';
import { MovieInterface } from 'src/app/shared/types/movie.interface';
import { TvShowInterface } from 'src/app/shared/types/tvShow.interface';

@Component({
  selector: 'mov-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: MovieInterface[] = [];
  upcomingMovies: MovieInterface[] = [];
  topRatedMovies: MovieInterface[] = [];
  popularTvShows: TvShowInterface[] = [];

  constructor(
    private moviesService: MoviesService,
    private tvShowsService: TvShowsService
  ) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((response) => {
      this.popularMovies = response;
    });
    this.moviesService.getMovies('top_rated').subscribe((response) => {
      this.topRatedMovies = response;
    });
    this.moviesService.getMovies('upcoming').subscribe((response) => {
      this.upcomingMovies = response;
    });
    this.tvShowsService.getTvShows('popular').subscribe((response) => {
      this.popularTvShows = response;
    });
  }
}
