import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@vercel/analytics/nuxt',
  ],

  css: ['assets/css/main.css'],
  colorMode: { classSuffix: '' },

  fonts: {
    families: [{ name: 'Inter', weights: [400, 500, 600], global: true }],
  },

  content: {
    v3Composables: false,
    build: {
      markdown: {
        highlight: {
          // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
          theme: {
            dark: 'github-dark',
            default: 'github-light',
          },
        },
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-02-19',

  vite: { plugins: [tailwindcss()] },
})
