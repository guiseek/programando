/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { Component } from '@angular/core';
import { AuthButtonRequest } from './auth-button.request';

@Component({
  selector: 'auth-google-button',
  template: `
    <button type="button" aria-label="Botão para logar com Google" class="google" mat-icon-button (click)="in('google')">
      <mat-icon svgIcon="google"></mat-icon>
    </button>
  `,
  styleUrls: ['./request-button.scss']
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class GoogleButtonRequest extends AuthButtonRequest { }
