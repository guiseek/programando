import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'web-logo',
  templateUrl: './logo.element.html',
  styleUrls: ['./logo.element.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LogoElement {
  @HostBinding('style.width') get width() {
    return this.size;
  }
  @HostBinding('style.height') get height() {
    return this.size;
  }

  @Input() size = '512px';
}
