import { Component } from '@angular/core';
import { AuthButtonRequest } from './auth-button.request';

@Component({
  selector: 'auth-github-button',
  template: `
    <button type="button" class="github" mat-icon-button (click)="in('github')">
      <mat-icon svgIcon="github"></mat-icon>
    </button>
  `,
  styleUrls: ['./request-button.scss']
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class GithubButtonRequest extends AuthButtonRequest { }
