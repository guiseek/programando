/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
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
