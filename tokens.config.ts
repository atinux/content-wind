import { defineTheme } from 'pinceau'
import colors from 'tailwindcss/colors'

// See Typography config on https://github.com/nuxt-themes/typography/blob/main/tokens.config.ts
export default defineTheme({
  typography: {
    color: {
      secondary: colors.gray
    }
  },
  prose: {
    code: {
      block: {
        backgroundColor: {
          initial: colors.gray['50'],
          dark: colors.gray['900']
        }
      },
      inline: {
        backgroundColor: {
          initial: colors.gray['100'],
          dark: colors.gray['900']
        }
      }
    }
  }
})
