import { CommonUiBrandModule } from '@webapp/common/ui/brand';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonUiKitModule } from '@webapp/common/ui/kit';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonUiKitModule, CommonUiBrandModule, RouterModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class CommonUiNavbarModule {

}
