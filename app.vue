<script setup type="ts">
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>

<template>
  <div class="sm:py-10">
    <Html lang="en" />
    <Meta property="og:image" content="https://avatars.githubusercontent.com/u/904724?v=4" />
    <!-- Navbar -->
    <div class="flex justify-between max-w-2xl mx-auto px-4 sm:px-6 py-4">
      <div class="text-gray-700 dark:text-gray-200">
        <NuxtLink v-for="link of navigation" :to="link._path" active-class="font-bold" class="mr-4">{{ link.navTitle || link.title }}</NuxtLink>
      </div>
      <div class="space-x-3 transition text-gray-500">
        <a href="https://twitter.com/Atinux" class="hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:twitter" /></a>
        <a href="https://github.com/Atinux/content-wind" class="hover:text-gray-700 dark:hover:text-gray-300"><Icon name="fa-brands:github" /></a>
        <ColorModeSwitch class="hover:text-gray-700 dark:hover:text-gray-300" />
      </div>
    </div>
    <NuxtPage/>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>
