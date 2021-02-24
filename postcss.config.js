module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['themes/hugo-twcss/assets/css']
    }),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1 }),
    require('postcss-clean'),
  ],
}