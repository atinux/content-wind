import { $dt } from '@nuxtjs/design-tokens'

export default {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      colors: {
        primary: $dt('colors.primary')
      }
    }
  }
}
