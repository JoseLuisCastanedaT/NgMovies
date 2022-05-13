import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { tvShowsResponseInterface } from '../types/tvShowsResponse.interface';

@Injectable()
export class TvShowsService {
  constructor(private httpClient: HttpClient) {}

  getTvShows(type: string = 'popular', count: number = 12) {
    return this.httpClient
      .get<tvShowsResponseInterface>(
        `${environment.apiURL}/tv/${type}?api_key=${environment.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }
}
