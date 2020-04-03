import { FormGroup, FormControl, Validators } from '@angular/forms';

export class AccountUpdatePasswordForm extends FormGroup {
  constructor() {
    super({
      current: new FormControl('', [
        // hasPassword ? Validators.required : null,
        Validators.minLength(6)
      ]),
      newer: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    }, {
      validators: (control: FormGroup) => {
        const current = control.get('current');
        const newer = control.get('newer');

        return current && newer && current.value === newer.value ? { 'equals': true } : null;
      }
    })
  }
  value: { current: string | null, newer: string };

  get isNotEquals() {
    const current = this.get('current');
    const newer = this.get('newer');
    return newer.value && current.value && this.hasError('equals')
  }
}
