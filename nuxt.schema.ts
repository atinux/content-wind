export default defineNuxtSchema({
  appConfig: {
    /** Default OG image path */
    cover: '/cover.jpg',
    /**
     * Social media icons displayed in the navbar
     */
    socials: {
      /**
       * Twitter handle
       * 
       * @example 'Atinux'
       * @studioIcon simple-icons:twitter
       * */
      twitter: '',
      /**
       * Github repository name
       * @example 'nuxt/framework'
       * @studioIcon simple-icons:github
       * */
      github: '',
      /**
       * Mastodon handle
       * @example '@nuxt@webtoo.ls'
       * @studioIcon simple-icons:mastodon
       * */
      mastodon: ''
    }
  }
})
