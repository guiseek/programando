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
  declarations: [PopoverComponent, PopoverArrowDirective, PopoverCloseDirective, PopoverOpenDirective],
  exports: [PopoverArrowDirective, PopoverCloseDirective, PopoverOpenDirective],
  providers: [UiPopoverService]
})
export class CommonUiCdkPopoverModule {}
