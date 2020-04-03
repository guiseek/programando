const {RouteTypes} = require('@scullyio/scully');

const {News} = require('./plugins/newsPlugin');

exports.config = {
  projectRoot: './apps/academy/src',
  projectName: 'academy',
  outDir: './dist/static/apps/academy',
  routes: {
    '/cursos/:id': {
      type: 'contentFolder',
      id: {
        folder: 'libs/academy/cursos'
      }
    },
    '/curso/:id/:step': {
      type: News,
      url: 'http://localhost:4200/assets/news.json',
    },
  }
};
