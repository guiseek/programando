import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'web-navbar',
  templateUrl: './navbar.element.html',
  styleUrls: ['./navbar.element.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarElement {
  @Input() header: string;
}
