import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { CommonUiCdkPopoverModule } from '@webapp/common/ui/cdk/popover';
import { SharedDataAccessModule } from '@webapp/shared/data-access';
import {
  CommonUiKitModule,
  CommonUiMaterialModule
} from '@webapp/common/ui/kit';
import { GoogleButtonRequest } from './components/google-button.request';
import { GithubButtonRequest } from './components/github-button.request';
import { DialogComponent } from './containers/dialog/dialog.component';
import { DialogButtonComponent } from './components/dialog-button.component';
import { UserComponent } from './containers/user/user.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { PopoverComponent } from './containers/popover/popover.component';

@NgModule({
  imports: [
    A11yModule,
    OverlayModule,
    RouterModule,
    MatRippleModule,
    CommonUiKitModule,
    CommonUiMaterialModule,
    CommonUiCdkPopoverModule,
    SharedDataAccessModule
  ],
  declarations: [
    GoogleButtonRequest,
    GithubButtonRequest,
    DialogComponent,
    DialogButtonComponent,
    UserComponent,
    PopoverComponent
  ],
  exports: [
    GoogleButtonRequest,
    GithubButtonRequest,
    DialogComponent,
    DialogButtonComponent,
    UserComponent,
    PopoverComponent
  ]
})
export class SharedAuthModule {}
