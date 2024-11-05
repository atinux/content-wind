<script setup lang="ts">
import type { LayoutKey } from '#build/types/layouts';

const route = useRoute()

const { data } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

useContentHead(data.value)
</script>

<template>
  <NuxtLayout :name="data?.layout as LayoutKey || 'default'">
    <ContentRenderer v-if="data" :value="data" />
  </NuxtLayout>
</template>