import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonUiKitModule, CommonUiMaterialModule } from '@webapp/common/ui/kit';
import { SharedUserDataAccessModule } from '@webapp/shared/user/data-access';
import { SettingsComponent } from './components/settings/settings.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { SettingsDialog } from './dialogs/settings/settings.dialog';

@NgModule({
  imports: [
    CommonModule,
    CommonUiKitModule,
    CommonUiMaterialModule,
    SharedUserDataAccessModule
  ],
  declarations: [SettingsDialog, SettingsComponent, SubjectsComponent],
  exports: [SettingsDialog, SettingsComponent, SubjectsComponent]
})
export class SharedUserFeatureModule {}
