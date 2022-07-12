import { defineThemeTokens, palette } from '@nuxt-themes/kit'

// Select a color palette for your theme
const colors = ['#320E3B', '#6B7FD7', '#DDFBD2', '#E27396']

export default defineThemeTokens({
  colors: {
    primary: palette(colors[1])
  }
})
