import { $dt } from 'nuxt-theme-kit'

export default {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  content: ['content/**/*.{md,yml,json,json5,csv}'],
  theme: {
    extend: {
      colors: {
        primary: $dt('colors.primary')
      }
    }
  }
}
