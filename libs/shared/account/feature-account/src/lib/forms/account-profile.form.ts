import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthUser } from '@webapp/shared/data-access';

export class AccountProfileForm extends FormGroup {
  constructor() {
    super({
      uid: new FormControl({ value: '', disabled: true }),
      displayName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      photoURL: new FormControl()
    })
  }
  value: AuthUser;
}

export class AccountAuthForm extends FormGroup {
  constructor() {
    super({
      uid: new FormControl({ value: '', disabled: true }),
      displayName: new FormControl('', Validators.required),
      email: new FormControl({ value: '', disabled: true }),
      photoURL: new FormControl()
    })
  }
  value: AuthUser;
}
