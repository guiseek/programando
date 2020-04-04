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
  selector: 'auth-github-button',
  template: `
    <button type="button" aria-label="Botão para logar com Github" class="github" mat-icon-button (click)="in('github')">
      <mat-icon svgIcon="github"></mat-icon>
    </button>
  `,
  styleUrls: ['./request-button.scss']
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class GithubButtonRequest extends AuthButtonRequest { }
