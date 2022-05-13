import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'mov-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit {
  @Input() site: string = 'YouTube';
  @Input() key: string | null = null;

  videoURL: SafeResourceUrl = '';

  ngOnInit(): void {
    switch (this.site) {
      case 'YouTube':
        this.videoURL = this.getSafeURL(
          'https://www.youtube.com/embed/' + this.key
        );
        break;
      case 'Vimeo':
        this.videoURL = this.getSafeURL(
          'https://player.vimeo.com/video/' +
            this.key +
            '&color=ff9933&title=0&byline=0&portrait=0&badge=0'
        );
    }
  }

  constructor(private sanitizer: DomSanitizer) {}

  getSafeURL(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
