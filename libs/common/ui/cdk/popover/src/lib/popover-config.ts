import { InjectionToken } from '@angular/core';

export interface PopoverConfig<T = any> {
  backdropClass: string;
  data?: T;
  disableClose: boolean;
  panelClass: string | string[];
  arrowOffset?: number;
  arrowSize?: number;
}

export const POPOVER_DATA = new InjectionToken('popover.data');

export const defaultConfig: PopoverConfig = {
  backdropClass: '',
  disableClose: false,
  panelClass: '',
  arrowOffset: 30,
  arrowSize: 20
};
