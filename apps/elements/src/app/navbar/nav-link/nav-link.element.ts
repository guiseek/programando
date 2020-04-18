import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'web-nav-link',
  template: `
    <li class="nav-item">
      <a [attr.href]="href" class="nav-link">
        <slot name="nav-icon"></slot>
        <slot name="nav-text"></slot>
        <!-- <ng-content select="svg"></ng-content>
        <ng-content select="span"></ng-content> -->
      </a>
    </li>
  `,
  styleUrls: ['./nav-link.element.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavLinkElement {
  @Input() href: string;
}
