import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.css']
})
export class DownloadButtonComponent {
  @Input() video: HTMLVideoElement;
  @Input() title: string;
}
