const { registerPlugin, routeSplit } = require('@scullyio/scully');
const { httpGetJson } = require('@scullyio/scully/utils/httpGetJson');

const NewsPlugin = 'news';

const newsPlugin = async (route, config) => {
  const list = await httpGetJson(config.url);
  const { createPath } = routeSplit(route);
  const handledRoutes = [];
  for (let item of list) {
    handledRoutes.push({
      route: createPath(item.id, item.slug)
    });
  }
  return handledRoutes;
};

const newsPluginValidator = async conf => [];

registerPlugin('router', 'news', newsPlugin, newsPluginValidator);
exports.NewsPlugin = NewsPlugin;
