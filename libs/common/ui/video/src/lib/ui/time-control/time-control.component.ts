import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-time-control',
  templateUrl: './time-control.component.html',
  styleUrls: ['./time-control.component.css']
})
export class TimeControlComponent {
  @Input() public video: HTMLVideoElement;
}
