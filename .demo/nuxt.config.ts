export default defineNuxtConfig({
  extends: '../',
  modules: ['@nuxthq/studio'],
  // For typings
  typescript: { includeWorkspace: true },
})
