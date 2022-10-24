export default defineAppConfig({
  cover: '/cover.jpg',
  socials: {}
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    socials?: {
      twitter?: string
      github?: string
    }
  }
}
