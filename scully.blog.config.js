const { RemoveAngular } = require('./dist/libs/scully/plugin/remove-angular');
const { AddScripts } = require('./dist/libs/scully/plugin/add-scripts');

const postRenderers = [RemoveAngular, AddScripts];

exports.config = {
  projectRoot: './apps/blog/src',
  projectName: 'blog',
  defaultPostRenderers: postRenderers,
  outDir: './dist/static/apps/blog',
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: 'libs/blog/posts'
      },
      postRenderers
    }
  }
};
