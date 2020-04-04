/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { EventEmitter, Output } from '@angular/core';
import { authProviders } from '@webapp/shared/data-access';


export abstract class AuthButtonRequest {
  @Output() auth = new EventEmitter();
  // constructor(protected service: AuthService) {}
  in(provider: authProviders) {
    this.auth.emit(provider);
    // this.service.withProvider(provider).then(user => this.auth.emit(user));
  }
}
