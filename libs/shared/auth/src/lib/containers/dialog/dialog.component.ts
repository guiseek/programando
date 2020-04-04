/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '@webapp/shared/data-access';

@Component({
  selector: 'auth-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent {
  error: null;
  constructor(
    protected service: AuthService,
    private snackBar: MatSnackBar,
    private ref: MatDialogRef<DialogComponent>
  ) {}

  async onAuth(provider) {
    try {
      await this.service
      .withProvider(provider);

      this.showSnack('Conectado');

      this.close();

    } catch (err) {
      this.showSnack(err.message);
    }
    // this.ref.close(auth);
  }
  showSnack(message = '') {
    this.snackBar.open(
      message, 'Fechar',
      {
        announcementMessage: message,
        duration: 10000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        direction: 'ltr'
      }
    )
  }
  close() {
    this.ref.close();
  }
}
