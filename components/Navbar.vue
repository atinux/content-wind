<script lang="ts" setup>
const { navigation } = useContent()
</script>

<template>
  <div class="flex justify-between max-w-2xl px-4 py-4 mx-auto sm:px-8">
    <!-- Navigation -->
    <div class="text-primary-700 dark:text-primary-200">
      <NuxtLink
        v-for="link of navigation"
        :key="link._path"
        :to="link._path"
        active-class="font-bold"
        class="mr-4"
      >
        {{ link.title }}
      </NuxtLink>
    </div>
    <!-- Social icons & Color Mode -->
    <div class="space-x-3 transition text-primary-500">
      <a v-if="$theme.value.socials?.twitter" :href="`https://twitter.com/${$theme.value.socials?.twitter}`" title="Twitter" class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300"><Icon name="fa-brands:twitter" /></a>
      <a v-if="$theme.value.socials?.github" :href="`https://github.com/${$theme.value.socials?.github}`" title="Twitter" class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300"><Icon name="fa-brands:github" /></a>
      <ColorModeSwitch class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300" />
    </div>
  </div>
</template>
