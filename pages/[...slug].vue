<script setup lang="ts">
/**
 * Document driven is removed in Content v3.
 * This page is a simple/full-feature replacement of document driven.
 */
import type { LayoutKey } from '#build/types/layouts'

const route = useRoute()

const { data } = await useAsyncData(`page-${route.params.slug}`, () => {
  return queryCollection('content').path(route.path).first()
})

useSeoMeta(data.value?.seo || {})
</script>

<template>
  <NuxtLayout :name="data?.layout as LayoutKey || 'default'">
    <ContentRenderer
      v-if="data"
      :value="data"
    />
  </NuxtLayout>
</template>
