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
      description: 'A lightweight Nuxt template to build a Markdown driven website, based on Nuxt Content, TailwindCSS and Iconify. ✨'
    }
  },
  modules: [
    '@nuxt-themes/kit/module',
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
