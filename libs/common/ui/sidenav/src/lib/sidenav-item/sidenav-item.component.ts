import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ui-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavItemComponent {
  @Input() isOpen = false;
  @Input() children = [];
  @Input() route: string;
  @Input() title: string;
  @Input() icon: string;
  @Input() externalUrl: string;
}
