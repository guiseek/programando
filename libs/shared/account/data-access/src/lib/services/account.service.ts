import { AuthService } from '@webapp/shared/data-access';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  constructor(
    public auth: AuthService
  ) { }


}
