export default defineNuxtConfigSchema({
  appConfig: {
    cover: '/cover.jpg',
    socials: {
      /** Twitter handle */
      twitter: '',
      /** Github repository name */
      github: ''
    },
    // For testing
    number: {
      $resolve: val => parseFloat(val),
      $default: '9.8'
    }
  }
})
