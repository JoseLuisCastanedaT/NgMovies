import { MovieInterface } from './movie.interface';

export interface MovieResponseInterface {
  page: number;
  results: MovieInterface[];
  total_results: number;
  total_pages: number;
}
