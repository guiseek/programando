/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { CdkAccordion } from '@angular/cdk/accordion';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-accordion',
  template: `
    <ng-content select="ui-accordion-item"></ng-content>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      ui-accordion {
        display: block;
        width: 100%;
      }
    `
  ]
})
export class AccordionComponent extends CdkAccordion {}
