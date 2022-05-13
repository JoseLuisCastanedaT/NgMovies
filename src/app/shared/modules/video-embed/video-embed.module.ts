import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VideoEmbedComponent],
  exports: [VideoEmbedComponent]
})
export class VideoEmbedModule {}
