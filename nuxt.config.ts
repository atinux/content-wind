import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  /**
   * https://nuxt-theme-kit.netlify.app
   */
  theme: {
    meta: {
      name: 'Content Wind',
      author: 'Sébastien Chopin',
      description: 'A lightweight Nuxt template to build a Markdown driven website, based on Nuxt Content, TailwindCSS and Iconify ✨'
    },
    options: {
    },
    tokens: {
      colors: {
        gray: {
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
    }
  },
  modules: [
    'nuxt-theme-kit',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: ''
  },
  // https://content.nuxtjs.org
  content: {
    documentDriven: true,
    navigation: {
      fields: ['navTitle']
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'dracula'
    }
  }
})
