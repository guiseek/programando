import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonUiKitModule } from '@webapp/common/ui/kit';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonUiKitModule, RouterModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class CommonUiNavbarModule {

}
