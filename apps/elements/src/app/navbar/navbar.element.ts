import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

export interface NavItem {
  title: string;
  route: string;
  queryParams?: {
    [k: string]: string;
  } | string;
  icon?: string;
  externalUrl?: boolean;
}

@Component({
  selector: 'web-navbar',
  templateUrl: './navbar.element.html',
  styleUrls: ['./navbar.element.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarElement {
  @Input()
  title: string;

  @Input()
  items: NavItem[] = [];
}
