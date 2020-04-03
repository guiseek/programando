import { Component } from '@angular/core';
import { AuthButtonRequest } from './auth-button.request';

@Component({
  selector: 'auth-google-button',
  template: `
    <button type="button" class="google" mat-icon-button (click)="in('google')">
      <mat-icon svgIcon="google"></mat-icon>
    </button>
  `,
  styleUrls: ['./request-button.scss']
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class GoogleButtonRequest extends AuthButtonRequest { }
