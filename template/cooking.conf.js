var cooking = require('cooking');

cooking.set({
  entry: './src/app.js',
  dist: './dist',
  template: 'src/index.tpl',

  // development
  devServer: true,

  // production
  clean: true,

  extends: []
});

module.exports = cooking.resolve();

