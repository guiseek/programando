import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { CommonUiCdkAccordionModule } from '@webapp/common/ui/cdk/accordion';
import { CommonUiKitModule, CommonUiMaterialModule } from '@webapp/common/ui/kit';
import { CommonUiToolbarModule } from '@webapp/common/ui/toolbar';
import { SharedAccountDataAccessModule } from '@webapp/shared/account/data-access';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { AccountContainer } from './containers/account/account.container';


@NgModule({
  imports: [
    CommonModule,
    CommonUiKitModule,
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
