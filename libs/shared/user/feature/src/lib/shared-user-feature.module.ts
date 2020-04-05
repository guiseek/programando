import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsDialog } from './dialogs/settings/settings.dialog';

@NgModule({
  imports: [CommonModule],
  declarations: [SettingsDialog],
  exports: [SettingsDialog]
})
export class SharedUserFeatureModule {}
