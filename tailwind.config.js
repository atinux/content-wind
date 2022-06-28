const { themeTokens } = require('./.nuxt/theme/tokens')

module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  content: ['content/**/*.{md,yml,json,json5,csv}'],
  theme: {
    extend: {
      colors: {
        // Customize the feeling of your site
        gray: Object.entries(themeTokens.colors.gray).reduce(
          (acc, [key, value]) => {
            acc[key] = value.variable
            return acc
          },
          {}
        )
      }
    }
  }
}
