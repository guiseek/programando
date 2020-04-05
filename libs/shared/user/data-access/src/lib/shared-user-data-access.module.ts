import { NgModule } from '@angular/core';
import { SharedDataAccessModule } from '@webapp/shared/data-access';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    SharedDataAccessModule
  ],
  providers: [UserService]
})
export class SharedUserDataAccessModule {}
