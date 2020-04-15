import { HandledRoute } from '@scullyio/scully/routerPlugins/addOptionalRoutesPlugin';

export interface RouteMapConfig {
  ignore?: string[] | RegExp[];
}

export interface RouteMap extends HandledRoute {
  config: {
    directory: string;
    routemap: RouteMapConfig
  }
}