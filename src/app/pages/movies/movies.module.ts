import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItemModule } from 'src/app/shared/modules/item/item.module';
import { MoviesComponent } from './components/movies/movies.component';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ItemModule,
    PaginatorModule,
    InputTextModule,
    RouterModule
  ],
  declarations: [MoviesComponent],
  exports: [MoviesComponent]
})
export class MoviesModule {}
