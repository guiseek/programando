import { VideoPlayerComponent } from './../video-player.component';
import {
  Directive,
  OnChanges,
  Input,
  Host,
  ElementRef,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[uiVideoSource]'
})
export class VideoSourceDirective implements OnChanges {
  @Input() src: string = null;
  @Input() type: string = null;

  private init = true;
  private video: VideoPlayerComponent;
  private source: HTMLSourceElement;

  constructor(
    @Host() private matVideoComponent: VideoPlayerComponent,
    private el: ElementRef
  ) {
    this.video = matVideoComponent;
    this.source = el.nativeElement;
    this.init = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.source.src = this.src;
    this.source.type = this.type;

    if (!this.init) this.video.load();
  }
}
