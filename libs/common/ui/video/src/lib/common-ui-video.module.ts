import { FullscreenService } from './services/fullscreen.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SecondsToTimePipe } from './pipes/seconds-to-time.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player.component';
import { PlayButtonComponent } from './ui/play-button/play-button.component';
import { FrameControlComponent } from './ui/frame-control/frame-control.component';
import { TimeControlComponent } from './ui/time-control/time-control.component';
import { VideoSpinnerComponent } from './ui/video-spinner/video-spinner.component';
import { VideoSourceDirective } from './directives/video-source.directive';
import { VideoTrackDirective } from './directives/video-track.directive';
import { SeekProgressControlComponent } from './ui/seek-progress-control/seek-progress-control.component';
import { VolumeControlComponent } from './ui/volume-control/volume-control.component';
import { FullscreenButtonComponent } from './ui/fullscreen-button/fullscreen-button.component';
import { DownloadButtonComponent } from './ui/download-button/download-button.component';
import { QualityControlComponent } from './ui/quality-control/quality-control.component';
import { EventService } from './services/event.service';
import { SliderProgressBarComponent } from './ui/slider-progress-bar/slider-progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatProgressBarModule
  ],
  declarations: [
    VideoPlayerComponent,
    PlayButtonComponent,
    FrameControlComponent,
    TimeControlComponent,
    VideoSpinnerComponent,
    VideoSourceDirective,
    VideoTrackDirective,
    SecondsToTimePipe,
    SeekProgressControlComponent,
    VolumeControlComponent,
    FullscreenButtonComponent,
    DownloadButtonComponent,
    QualityControlComponent,
    SliderProgressBarComponent
  ],
  exports: [VideoPlayerComponent, VideoSourceDirective, VideoTrackDirective],
  providers: [FullscreenService, EventService]
})
export class CommonUiVideoModule {}
