import { Component, ViewEncapsulation } from '@angular/core';
import { CdkAccordion } from '@angular/cdk/accordion';

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
