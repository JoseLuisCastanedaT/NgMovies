import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ItemComponent],
  exports: [ItemComponent]
})
export class ItemModule {}
