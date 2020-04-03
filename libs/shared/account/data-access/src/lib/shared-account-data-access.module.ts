import { AccountService } from './services/account.service';
import { SharedDataAccessModule } from '@webapp/shared/data-access';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedDataAccessModule
  ],
  providers: [
    AccountService
  ]
})
export class SharedAccountDataAccessModule {}
