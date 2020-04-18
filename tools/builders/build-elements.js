const fs = require('fs-extra');
const concat = require('concat');
const { join } = require('path');

(async function build() {
  try {
    const files = [
      './dist/apps/elements/runtime-es2015.js',
      './dist/apps/elements/polyfills-es2015.js',
      // './dist/apps/elements/5-es2015.js',
      './dist/apps/elements/main-es2015.js'
    ];

    // const chunkhash = Date.now();
    const dir = `./dist/static/apps/elements`;
    await fs.ensureDir(dir);
    await fs.emptyDir(dir);

    // const bundle = `web.${chunkhash}.js`
    const bundle = `web.js`
    await concat(files, join(dir, bundle));
    // await fs.outputJSON(`../hugo/data/components.json`, { bundle })
  } catch (err) {
    console.log(err)
  }

})();