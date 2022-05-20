import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
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
    navigation: {
      fields: ['navTitle']
    },
    highlight: {
      theme: 'dracula',
      preload: ['html', 'typescript']
    }
  }
})
