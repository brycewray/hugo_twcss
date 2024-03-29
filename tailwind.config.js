const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: [
    "./content/**/*.md",
    "./content/**/*.html",
    "./themes/hugo-twcss/layouts/**/*.html"
  ],
  darkMode: 'media',
  theme: {
    fill: theme => ({
      current: 'currentColor',
      white: theme('colors.white'),
    }),
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      gray: colors.gray,
      yellow: colors.yellow,
      blue: {
        '100': '#bbeeff',
        '200': '#00aaff',
        '300': '#0088ff',
        '400': '#0033ff',
        '500': '#0000ff',
        '600': '#0000bb',
        '700': '#0000aa',
        '800': '#000088',
        '900': '#000066',
      },
    },
  },
  variants: {
    logical: [
      'responsive',
      'hover'
    ],
  },
  plugins: [
    require('tailwindcss-logical'),
  ], // if we add forms, do it here
}