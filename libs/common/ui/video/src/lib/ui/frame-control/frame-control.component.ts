import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-frame-control',
  templateUrl: './frame-control.component.html',
  styles: []
})
export class FrameControlComponent implements OnInit {
  @Input() video: HTMLVideoElement;
  @Input() fps = 29.97;

  constructor() {}

  ngOnInit() {}

  seekFrames(nbFrames: number) {
    if (!this.video.paused) {
      this.video.pause();
    }

    const currentFrames = this.video.currentTime * this.fps;
    const newPos = (currentFrames + nbFrames) / this.fps + 0.00001;
    this.video.currentTime = newPos;
  }
}
