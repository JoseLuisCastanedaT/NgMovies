import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GenresComponent } from './components/genres/genres.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [CommonModule, RouterModule, ButtonModule],
  declarations: [GenresComponent],
  exports: [GenresComponent]
})
export class GenresModule {}
