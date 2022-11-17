import { defineTheme } from 'pinceau'
import colors from 'tailwindcss/colors'

// See Typography config on https://github.com/nuxt-themes/typography/blob/main/tokens.config.ts
export default defineTheme({
  typography: {
    colors: {
      secondary: colors.gray
    }
  },
  prose: {
    code: {
      block: {
        backgroundColor: {
          dark: colors.gray['900']
        }
      }
    }
  }
})
