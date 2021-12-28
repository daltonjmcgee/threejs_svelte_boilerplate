const preprocess = require('svelte-preprocess');

module.exports = {
  preprocess: preprocess({
    scss: {
      renderSync: true,
      includePaths: ['./src/'],
    },
  }),
}
