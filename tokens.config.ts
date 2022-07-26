import { defineTokens, palette } from '@nuxtjs/design-tokens'

// Select a color palette for your theme
const colors = ['#320E3B', '#6B7FD7', '#DDFBD2', '#E27396']

export default defineTokens({
  colors: {
    primary: palette(colors[4])
  }
})
