import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-quality-control',
  templateUrl: './quality-control.component.html',
  styleUrls: ['./quality-control.component.css']
})
export class QualityControlComponent {
  @Input() video: HTMLVideoElement;
}
