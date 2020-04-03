import { PLATFORM_ID } from '@angular/core';
// import { WINDOW } from '@alencar/ui/layout';
import { Inject, Injectable } from '@angular/core';
import { firestore } from 'firebase/app';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

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
