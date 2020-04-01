const postcssPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')
const cssvariables = require('postcss-css-variables')
const postcssPartialImport = require ('postcss-partial-import')
const postcssNesting = require('postcss-nesting')

module.exports = {
  plugins: [
    require('postcss-preset-env'),
    postcssPresetEnv({
      stage: 0,
      browsers: [
        'last 2 versions',
        'IE 11',
      ],
      features: {
        'nesting-rules': true,
        'custom-properties': true,
      },
    }),
    postcssPartialImport({
      path: 'assets/css/',
      // see https://discourse.gohugo.io/t/pipes-postcss-postcss-import-how-to-keep-filesystem-context/15164
    }),
    cssvariables({}),
    postcssNesting({}),
    process.env.HUGO_ENVIRONMENT === 'production' 
    ? cssnano({ preset: 'default' })
    : null,
  ],
}