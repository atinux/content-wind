<script setup lang="ts">
const { cover } = useAppConfig()

useSeoMeta({
  ogImage: cover,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="pb-16 sm:pt-8 sm:pb-24">
    <Html lang="en" />
    <NuxtLoadingIndicator />
    <AppNavbar />
    <NuxtPage />
  </div>
</template>
