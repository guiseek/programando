import { SharedAuthModule } from '@webapp/shared/auth';
import { CommonUiCdkAccordionModule } from '@webapp/common/ui/cdk/accordion';
import { CommonUiSidenavModule } from '@webapp/common/ui/sidenav';
import { CommonUiVideoModule } from '@webapp/common/ui/video';
import { CommonUiBrandModule } from '@webapp/common/ui/brand';
import {
  CommonUiMaterialModule,
  CommonUiKitModule
} from '@webapp/common/ui/kit';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonUiKitModule,
    CommonUiBrandModule,
    CommonUiMaterialModule,
    CommonUiVideoModule,
    CommonUiSidenavModule,
    CommonUiCdkAccordionModule,
    SharedAuthModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent
      }
    ])
  ],
  declarations: [ShellComponent]
})
export class PortalFeatureShellModule {}
