import { Component, Input } from '@angular/core';
import { MovieInterface } from 'src/app/shared/types/movie.interface';
import { TvShowInterface } from 'src/app/shared/types/tvShow.interface';

@Component({
  selector: 'mov-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent {
  @Input() items: MovieInterface[] = [];
  @Input() tvShowsItems: TvShowInterface[] = [];
  @Input() title: string = '';
}
