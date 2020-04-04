/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogComponent } from '../containers/dialog/dialog.component';

@Component({
  selector: 'auth-dialog-button',
  template: `
    <button type="button" mat-icon-button (click)="open()">
      <mat-icon>account_circle</mat-icon>
    </button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogButtonComponent implements OnDestroy {
  @Output() auth = new EventEmitter();

  destroy$ = new Subject<void>();

  constructor(private dialog: MatDialog) {}

  open(): void {
    const ref = this.dialog.open(DialogComponent).addPanelClass('sign');

    ref
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => this.auth.emit(response));
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
