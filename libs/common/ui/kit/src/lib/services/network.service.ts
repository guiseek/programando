/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { firestore } from 'firebase/app';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private _state = new BehaviorSubject<boolean>(true);
  public state$ = this._state.asObservable().pipe(distinctUntilChanged());
  window: Window;
  constructor(
    // @Inject(WINDOW) private window: Window,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.window = window;
      this.window.addEventListener('online', ev => {
        this._state.next(true);
        firestore().enableNetwork();
      });
      this.window.addEventListener('offline', ev => {
        this._state.next(false);
        firestore().disableNetwork();
      });
    }
  }
  get currentState() {
    return this._state.value;
  }
}
