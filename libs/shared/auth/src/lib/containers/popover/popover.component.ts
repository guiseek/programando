/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { Component, Inject, Optional } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopoverRef, POPOVER_DATA } from '@webapp/common/ui/cdk/popover';
import { AuthService } from '@webapp/shared/data-access';
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
