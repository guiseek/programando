exports.config = {
  projectRoot: './apps/blog/src',
  projectName: 'blog',
  outDir: './dist/static/apps/blog',
  routes: {
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: 'libs/blog/posts'
      }
    }
  }
};
