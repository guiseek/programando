/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { Component } from '@angular/core';

@Component({
  selector: 'ui-toolbar-button',
  template: `<ng-content></ng-content>`,
  // encapsulation: ViewEncapsulation.None,
  styles: [`:host { display: block; margin-right: 16px; }`]
})
export class ToolbarButtonContent { }
