/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { NgModule } from '@angular/core';
import { SharedDataAccessModule } from '@webapp/shared/data-access';
import { AccountService } from './services/account.service';

@NgModule({
  imports: [
    SharedDataAccessModule
  ],
  providers: [
    AccountService
  ]
})
export class SharedAccountDataAccessModule {}
