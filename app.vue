<script setup type="ts">
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>

<template>
  <div class="sm:py-10">
    <Html lang="en" />
    <Meta property="og:image" content="https://avatars.githubusercontent.com/u/904724?v=4" />
    <div class="flex justify-between max-w-2xl pr-2 mx-auto my-4">
      <div>
        <NuxtLink v-for="link of navigation" :to="link._path" active-class="font-bold" class="mr-4">{{ link.navTitle || link.title }}</NuxtLink>
      </div>
      <div class="space-x-3 transition text-neutral-500">
        <a href="https://twitter.com/Atinux" class="hover:text-neutral-700 dark:hover:text-neutral-300"><Icon name="fa-brands:twitter" /></a>
        <a href="https://github.com/Atinux/content-wind" class="hover:text-neutral-700 dark:hover:text-neutral-300"><Icon name="fa-brands:github" /></a>
        <ColorModeSwitch class="hover:text-neutral-700 dark:hover:text-neutral-300" />
      </div>
    </div>
    <NuxtPage/>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100;
}
</style>
