import { CommonUiCdkAccordionModule } from '@webapp/common/ui/cdk/accordion';
import { CommonUiBrandModule } from '@webapp/common/ui/brand';

import { CommonUiToolbarModule } from '@webapp/common/ui/toolbar';
import { CommonUiKitModule, CommonUiMaterialModule } from '@webapp/common/ui/kit';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedAccountDataAccessModule } from '@webapp/shared/account/data-access';
import { AccountContainer } from './containers/account/account.container';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';

@NgModule({
  imports: [
    CommonModule,
    CommonUiKitModule,
    CommonUiBrandModule,
    CommonUiMaterialModule,
    CommonUiToolbarModule,
    MatProgressSpinnerModule,
    CommonUiCdkAccordionModule,
    SharedAccountDataAccessModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountContainer
      }
    ])
  ],
  declarations: [AccountContainer, ProfileFormComponent, UpdatePasswordComponent]
})
export class SharedAccountFeatureAccountModule {}
