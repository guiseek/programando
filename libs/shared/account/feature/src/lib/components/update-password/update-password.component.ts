import { AccountUpdatePasswordForm } from './../../forms/account-update-password.form';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'webapp-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent {
  @Input()
  form = new AccountUpdatePasswordForm();
}
