const postcssImport = require('postcss-import')
const cssnano       = require('cssnano')

module.exports = {
  plugins: [
    postcssImport({
      path: 'app/css',
    }),
    cssnano({
      preset: 'default'
    }),
  ]
}
