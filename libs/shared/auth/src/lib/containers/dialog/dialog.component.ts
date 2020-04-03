import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '@webapp/shared/data-access';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'auth-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
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
