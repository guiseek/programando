import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatRippleModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@NgModule({
  imports: [CommonModule, CdkAccordionModule, MatRippleModule],
  declarations: [AccordionComponent, AccordionItemComponent],
  exports: [AccordionComponent, AccordionItemComponent]
})
export class CommonUiCdkAccordionModule {}
