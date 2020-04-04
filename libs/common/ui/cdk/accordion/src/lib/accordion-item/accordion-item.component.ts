/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('bodyExpansion', [
      state('false', style({ height: '0px', visibility: 'hidden' })),
      state('true', style({ height: '*', visibility: 'visible' })),
      transition('true <=> false', animate('300ms ease-in-out'))
    ]),
    trigger('indicatorRotate', [
      state('false', style({ transform: 'rotate(0deg)' })),
      state('true', style({ transform: 'rotate(180deg)' })),
      transition('true <=> false', animate('300ms ease-in-out'))
    ])
  ]
})
export class AccordionItemComponent extends CdkAccordionItem {
  @Input() title: string;

  @Input() expanded = false;
}
