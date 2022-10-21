export default defineAppConfig({
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
