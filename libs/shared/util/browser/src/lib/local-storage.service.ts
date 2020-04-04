import { isPlatformBrowser } from '@angular/common';
import { FactoryProvider, InjectionToken, PLATFORM_ID } from '@angular/core';

export const LOCAL_STORAGE = new InjectionToken('LocalStorageToken');

export function localStorageFactory(platformId: Object): Storage {
  if (isPlatformBrowser(platformId)) {
    return localStorage;
  } else {
    return {
      length: 0,
      clear: () => {},
      getItem: () => null,
      key: () => null,
      removeItem: () => {},
      setItem: () => {}
    };
  }
}

export const localStorageProvider: FactoryProvider = {
  provide: LOCAL_STORAGE,
  useFactory: localStorageFactory,
  deps: [PLATFORM_ID]
};

export const LOCAL_STORAGE_PROVIDERS = [localStorageProvider];

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LocalStorageService {

//   constructor() { }
// }
