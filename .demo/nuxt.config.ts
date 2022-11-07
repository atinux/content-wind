export default defineNuxtConfig({
  extends: '../',
  modules: ['@nuxthq/studio'],
  generate: {
    routes: ['/about']
  }
})
