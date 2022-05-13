import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MoviesModule } from 'src/app/pages/movies/movies.module';
import { ItemModule } from 'src/app/shared/modules/item/item.module';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';

@NgModule({
  imports: [CommonModule, ItemModule, MoviesModule],
  declarations: [ItemsBannerComponent],
  exports: [ItemsBannerComponent]
})
export class ItemsBannerModule {}
