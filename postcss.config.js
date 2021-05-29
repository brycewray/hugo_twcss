module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['themes/hugo-twcss/assets/css']
    }),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-nesting'),
    require('postcss-csso')({
      restructure: true
    })
  ],
}