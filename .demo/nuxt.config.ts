export default defineNuxtConfig({
  typescript: { includeWorkspace: true },
  extends: '../',
  modules: ['@nuxthq/studio'],
  generate: {
    routes: ['/about']
  }
})
