import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItemsBannerModule } from 'src/app/shared/modules/items-banner/items-banner.module';
import { SliderModule } from 'src/app/shared/modules/slider/slider.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [CommonModule, SliderModule, ItemsBannerModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
