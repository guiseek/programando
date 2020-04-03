import { PopoverComponent } from './popover/popover.component';
import { PopoverOpenDirective } from './popover-open.directive';
import { PopoverCloseDirective } from './popover-close.directive';
import { UiPopoverService } from './popover.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [CommonModule, OverlayModule, PortalModule],
  declarations: [PopoverComponent, PopoverCloseDirective, PopoverOpenDirective],
  providers: [UiPopoverService]
})
export class CommonUiCdkPopoverModule {}
