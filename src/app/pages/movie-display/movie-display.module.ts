import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SliderModule } from 'src/app/shared/modules/slider/slider.module';
import { MovieDisplayComponent } from './components/movie-display/movie-display.component';
import { TabViewModule } from 'primeng/tabview';
import { VideoEmbedModule } from 'src/app/shared/modules/video-embed/video-embed.module';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { ItemsBannerModule } from 'src/app/shared/modules/items-banner/items-banner.module';

@NgModule({
  imports: [
    CommonModule,
    SliderModule,
    TabViewModule,
    VideoEmbedModule,
    ImageModule,
    CarouselModule,
    ItemsBannerModule
  ],
  declarations: [MovieDisplayComponent],
  exports: [MovieDisplayComponent]
})
export class MovieDisplayModule {}
