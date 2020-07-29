const postcssImport = require('postcss-import')
const cssnano       = require('cssnano')

module.exports = {
  plugins: [
    postcssImport({
      path: 'src/index.css',
    }),
    cssnano({
      preset: 'default'
    }),
  ]
}
