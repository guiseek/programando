exports.config = {
  projectRoot: './apps/portal/open/src',
  projectName: 'portal-open',
  outDir: './dist/static/apps/portal-open',
  routes: {
    '/blog/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: 'libs/blog/posts'
      }
    }
  }
};
