import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonUiCdkAccordionModule } from '@webapp/common/ui/cdk/accordion';
import {
  CommonUiKitModule,
  CommonUiMaterialModule
} from '@webapp/common/ui/kit';

import { SidenavContainerComponent } from './sidenav-container/sidenav-container.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';

@NgModule({
  imports: [
    RouterModule,
    CommonUiKitModule,
    CommonUiMaterialModule,
    CommonUiCdkAccordionModule
  ],
  declarations: [
    SidenavContainerComponent,
    SidenavComponent,
    SidenavItemComponent
  ],
  exports: [SidenavContainerComponent, SidenavComponent, SidenavItemComponent]
})
export class CommonUiSidenavModule {}
