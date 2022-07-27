import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    /**
     * https://nuxt-theme-kit.netlify.app
     */
    // TODO: Remove this ignore
    // https://github.com/nuxt-themes/config/issues/5
    // @ts-ignore
    theme: {
      meta: {
        name: 'Content Wind',
        author: 'Sébastien Chopin',
        description: 'A lightweight Nuxt template to build a Markdown driven website, based on Nuxt Content, TailwindCSS and Iconify. ✨'
      }
    }
  },
  modules: [
    '@nuxt-themes/config/module',
    '@nuxtjs/design-tokens/module',
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
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'dracula'
    }
  }
})
