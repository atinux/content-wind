export default defineNuxtConfigSchema({
  appConfig: {
    /** Default OG image path */
    cover: '/cover.jpg',
    /**
     * Social media icons displayed in the navbar
     */
    socials: {
      /**
       * Twitter handle
       * @example 'Atinux'
       * */
      twitter: '',
      /**
       * Github repository name
       * @example 'nuxt/framework'
       * */
      github: ''
    }
  }
})
