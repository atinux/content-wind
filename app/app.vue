<script setup lang="ts">
const { cover } = useAppConfig()

useSeoMeta({
  ogImage: cover,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="sm:pt-6 sm:pb-10">
    <Html lang="en" />
    <NuxtLoadingIndicator />
    <AppNavbar />
    <NuxtPage />
  </div>
</template>
