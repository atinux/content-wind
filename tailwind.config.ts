import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  plugins: [
    typography(),
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald
      }
    }
  }
}
