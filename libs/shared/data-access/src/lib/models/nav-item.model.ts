/*
 * ----------------------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { ScullyRoute } from '@scullyio/ng-lib';
export interface NavItem extends ScullyRoute {
  title: string;
  route: string;
  queryParams?: {
    [k: string]: string;
  } | string;
  isOpened?: boolean;
  icon?: string;
  externalUrl?: boolean;
  children?: NavItem[];
}
