import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paginator } from 'primeng/paginator';
import { take } from 'rxjs/operators';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { MovieInterface } from 'src/app/shared/types/movie.interface';

@Component({
  selector: 'mov-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: MovieInterface[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;

  @ViewChild('p') paginator: Paginator;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      } else {
        this.getPagedMovies(1);
      }
    });
  }

  getPagedMovies(page: number, searchKeyword?: string) {
    this.moviesService.searchMovies(page, searchKeyword).subscribe((movies) => {
      this.movies = movies;
    });
  }

  getMoviesByGenre(genreId: string, page: number) {
    this.moviesService
      .getMoviesByGenre(genreId, page)
      .subscribe((moviesByGenre) => {
        this.movies = moviesByGenre;
      });
  }

  paginate(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber);
    } else {
      if (this.searchValue) {
        this.getPagedMovies(pageNumber, this.searchValue);
      } else {
        this.getPagedMovies(pageNumber);
      }
    }
    this.scrollToTop();
  }

  searchChangedFilter() {
    if (this.genreId) {
      this.genreId = null;
    }
    if (this.searchValue) {
      this.getPagedMovies(1, this.searchValue);
      this.paginator.changePage(0);
      this.scrollToTop();
    }
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
