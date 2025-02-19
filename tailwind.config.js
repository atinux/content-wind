const colors = require('tailwindcss/colors')
const typography = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  plugins: [
    typography(),
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
      },
    },
  },
}
