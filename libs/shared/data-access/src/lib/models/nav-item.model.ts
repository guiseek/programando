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
