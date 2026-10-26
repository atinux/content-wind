<script setup lang="ts">
/**
 * Document driven is removed in Content v3.
 * This page is a simple/full-feature replacement of document driven.
 */
import type { LayoutKey } from '#build/types/layouts'

const route = useRoute()

const { data: page } = await useAsyncData(`page-${route.params.slug}`, () => {
  return content.get(route.path)
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
  })
}

useSeoMeta({
  title: page.value.data.title,
  description: page.value.data.description,
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
