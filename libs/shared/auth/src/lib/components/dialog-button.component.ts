import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../containers/dialog/dialog.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
