import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '@webapp/shared/data-access';
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { PopoverRef, POPOVER_DATA } from '@webapp/common/ui/cdk/popover';
import { User } from 'firebase/app';

@Component({
  selector: 'auth-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {
  constructor(
    private auth: AuthService,
    private snackBar: MatSnackBar,
    public popoverRef: PopoverRef<string>,
    @Optional() @Inject(POPOVER_DATA) public data: User
  ) {}

  signOut() {
    this.auth.signOut()
      .then(() => this.popoverRef.close(''))
      .then(() => this.showSnack('Desconectado'));
  }
  showSnack(message = '') {
    this.snackBar.open(message, 'OK',
    {
      announcementMessage: message,
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      direction: 'ltr'
    })
  }
}
