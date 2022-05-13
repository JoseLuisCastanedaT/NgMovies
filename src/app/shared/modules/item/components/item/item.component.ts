import { Component, Input } from '@angular/core';

import { IMAGES_SIZES } from 'src/app/shared/constants/image-sizes';
import { MovieInterface } from 'src/app/shared/types/movie.interface';
import { TvShowInterface } from 'src/app/shared/types/tvShow.interface';

@Component({
  selector: 'mov-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemData: MovieInterface | null = null;
  @Input() tvShowsItemData: TvShowInterface | null = null;

  imagesSizes = IMAGES_SIZES;
}
