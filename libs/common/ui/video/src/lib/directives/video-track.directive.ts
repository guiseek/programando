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
  selector: '[uiVideoTrack]'
})
export class VideoTrackDirective implements OnChanges {
  @Input() src: string = null;
  @Input() kind: string = null;
  @Input() srclang: string = null;
  @Input() label: string = null;

  private init = true;
  private video: VideoPlayerComponent;
  private track: HTMLTrackElement;

  constructor(
    @Host() private matVideoComponent: VideoPlayerComponent,
    private el: ElementRef
  ) {
    this.video = matVideoComponent;
    this.track = el.nativeElement;
    this.init = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.track.src = this.src;
    this.track.kind = this.kind;
    this.track.srclang = this.srclang;
    this.track.label = this.label;

    if (!this.init) this.video.load();
  }
}
