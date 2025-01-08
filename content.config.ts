import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    /**
     * This is collection for content-wind theme
     * Create `content.config.ts` in project root to overwrite this
     */
    content: defineCollection({
      type: 'page',
      source: '**',
      schema: z.object({
        layout: z.string(),
      }),
    }),
  },
})
