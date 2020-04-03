import {
  Output,
  EventEmitter
} from '@angular/core';
import { AuthService, authProviders } from '@webapp/shared/data-access';


export abstract class AuthButtonRequest {
  @Output() auth = new EventEmitter();
  // constructor(protected service: AuthService) {}
  in(provider: authProviders) {
    this.auth.emit(provider);
    // this.service.withProvider(provider).then(user => this.auth.emit(user));
  }
}
