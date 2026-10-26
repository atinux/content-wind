<script setup lang="ts">
/**
 * Document driven is removed in Content v3.
 * This page is a simple/full-feature replacement of document driven.
 */
import type { LayoutKey } from '#build/types/layouts'

const route = useRoute()

const { data: page } = await useAsyncData(`page-${route.params.slug}`, () => {
  return content.get<{ title?: string, description?: string, image?: string, layout?: string }>(route.path)
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
  })
}

// Like Content v3, a leading `# heading` is the default title and the paragraph after it the default description
type Node = string | [string, Record<string, unknown>, ...Node[]]
const text = (node: Node): string => typeof node === 'string' ? node : node.slice(2).map(child => text(child as Node)).join('')
const [first, second] = page.value.nodes as Node[]
const heading = first?.[0] === 'h1' ? first : undefined
const paragraph = heading ? second : first

useSeoMeta({
  title: page.value.data.title || (heading && text(heading)),
  description: page.value.data.description || (paragraph?.[0] === 'p' ? text(paragraph) : undefined),
  ogImage: page.value.data.image,
})
</script>

<template>
  <NuxtLayout :name="page?.data.layout as LayoutKey || 'default'">
    <ContentRenderer
      v-if="page"
      :value="page"
      class="prose"
    />
  </NuxtLayout>
</template>
