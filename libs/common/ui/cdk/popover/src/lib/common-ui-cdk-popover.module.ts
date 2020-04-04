/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopoverArrowDirective } from './popover-arrow.directive';
import { PopoverCloseDirective } from './popover-close.directive';
import { PopoverOpenDirective } from './popover-open.directive';
import { UiPopoverService } from './popover.service';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule],
  declarations: [PopoverComponent, PopoverCloseDirective, PopoverArrowDirective, PopoverOpenDirective],
  exports: [PopoverCloseDirective, PopoverOpenDirective],
  providers: [UiPopoverService]
})
export class CommonUiCdkPopoverModule {}
