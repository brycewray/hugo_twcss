module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['themes/hugo-twcss/assets/css']
    }),
    require('tailwindcss/nesting'),
    require("autoprefixer"),
  ]
}
