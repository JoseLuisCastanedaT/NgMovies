import { TvShowInterface } from './tvShow.interface';

export interface tvShowsResponseInterface {
  page: number;
  results: TvShowInterface[];
  total_results: number;
  total_pages: number;
}
