/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { ConnectedOverlayPositionChange, FlexibleConnectedPositionStrategy, OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { PopoverConfig } from './popover-config';

export class PopoverRef<T = any> {
  private afterClosedSubject = new Subject<T>();

  constructor(
    private overlayRef: OverlayRef,
    private positionStrategy: FlexibleConnectedPositionStrategy,
    public config: PopoverConfig
  ) {
    if (!config.disableClose) {
      this.overlayRef.backdropClick().subscribe(() => {
        this.close();
      });

      this.overlayRef
        .keydownEvents()
        .pipe(filter(event => event.key === 'Escape'))
        .subscribe(() => {
          this.close();
        });
    }
  }

  close(dialogResult?: T): void {
    this.afterClosedSubject.next(dialogResult);
    this.afterClosedSubject.complete();

    this.overlayRef.dispose();
  }

  afterClosed(): Observable<T> {
    return this.afterClosedSubject.asObservable();
  }

  positionChanges(): Observable<ConnectedOverlayPositionChange> {
    return this.positionStrategy.positionChanges;
  }
}
