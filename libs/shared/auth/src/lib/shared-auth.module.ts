/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { CommonUiCdkPopoverModule } from '@webapp/common/ui/cdk/popover';
import { CommonUiKitModule, CommonUiMaterialModule } from '@webapp/common/ui/kit';
import { SharedDataAccessModule } from '@webapp/shared/data-access';
import { DialogButtonComponent } from './components/dialog-button.component';
import { GithubButtonRequest } from './components/github-button.request';
import { GoogleButtonRequest } from './components/google-button.request';
import { DialogComponent } from './containers/dialog/dialog.component';
import { PopoverComponent } from './containers/popover/popover.component';
import { UserComponent } from './containers/user/user.component';

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
