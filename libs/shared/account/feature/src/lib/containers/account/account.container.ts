import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountAuthForm } from './../../forms/account-profile.form';
import { Observable, Subject } from 'rxjs';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthUser, AuthAccount } from '@webapp/shared/data-access';
import { AccountService } from '@webapp/shared/account/data-access';
import { tap, takeUntil } from 'rxjs/operators';
import { AccountProfileForm } from '../../forms/account-profile.form';
import { Router } from '@angular/router';
import { AccountUpdatePasswordForm } from '../../forms/account-update-password.form';

@Component({
  selector: 'webapp-account',
  templateUrl: './account.container.html',
  styleUrls: ['./account.container.scss']
})
export class AccountContainer implements OnInit, OnDestroy {
  form = new AccountAuthForm();
  passForm = new AccountUpdatePasswordForm();

  user$: Observable<AuthAccount>;

  destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private account: AccountService
  ) { }

  ngOnInit(): void {
    this.user$ = this.account.auth.user$
      .pipe(tap((user) =>
        this.form.patchValue(user.toJSON())));
  }

  removeAccount() {
    const message = 'Sua conta será removida, confirma operação?';
    this.showSnack(message, 'Confirmar')
      .onAction().pipe(takeUntil(this.destroy$))
      .subscribe(() => {

        this.account.auth
          .removeAccount()
          .then(() => this.router.navigateByUrl('/'));
      });
  }
  async onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      try {

        this.account.auth
          .updateProfile(this.form.value);

      } catch (err) {
        this.showSnack(err.message);
      }
    }
  }
  async changePassword() {
    this.passForm.markAllAsTouched();

    if (this.passForm.valid) {
      try {

        await this.account.auth
          .updatePassword(this.passForm.value);

      } catch (err) {
        this.showSnack(err.message);
      }
    }
  }

  showSnack(message = '', action = 'Fechar') {
    return this.snackBar.open(
      message, action,
      {
        announcementMessage: message,
        duration: 4000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        direction: 'ltr'
      }
    )
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
