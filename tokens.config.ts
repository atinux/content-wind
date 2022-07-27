import { defineTokens } from '@nuxtjs/design-tokens'

// import { defineTokens, palette } from '@nuxtjs/design-tokens'
// Select a color palette for your theme
// const colors = ['#F8818C', '#6B7FD7', '#DDFBD2', '#E27396'].map(hex => palette(hex))
// Use as `primary: colors[index]`

export default defineTokens({
  colors: {
    // primary: colors[0]
    primary: {
      DEFAULT: { value: '#78716c' },
      50: { value: '#fafaf9' },
      100: { value: '#f5f5f4' },
      200: { value: '#e7e5e4' },
      300: { value: '#d6d3d1' },
      400: { value: '#a8a29e' },
      500: { value: '#78716c' },
      600: { value: '#57534e' },
      700: { value: '#44403c' },
      800: { value: '#292524' },
      900: { value: '#1c1917' }
    }
  }
})
