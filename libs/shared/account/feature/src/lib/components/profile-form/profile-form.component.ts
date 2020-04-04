import { Component, Input } from '@angular/core';
import { AccountProfileForm } from '../../forms/account-profile.form';

@Component({
  selector: 'webapp-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent {
  @Input()
  form = new AccountProfileForm();
}
