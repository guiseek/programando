import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopoverCloseDirective } from './popover-close.directive';
import { PopoverOpenDirective } from './popover-open.directive';
import { UiPopoverService } from './popover.service';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule],
  declarations: [PopoverComponent, PopoverCloseDirective, PopoverOpenDirective],
  exports: [PopoverCloseDirective, PopoverOpenDirective],
  providers: [UiPopoverService]
})
export class CommonUiCdkPopoverModule {}
