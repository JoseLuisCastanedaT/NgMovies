import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [SliderComponent],
  exports: [SliderComponent]
})
export class SliderModule {}
