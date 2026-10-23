<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () =>
  queryCollectionNavigation('content'),
);

const appConfig = useAppConfig();
</script>

<template>
  <div class="flex items-center justify-between px-5 py-6 mx-auto max-w-2xl sm:px-0">
    <!-- Navigation -->
    <nav class="flex gap-6 text-sm text-muted dark:text-muted-dark">
      <NuxtLink
        v-for="link in navigation"
        :key="link.path"
        class="hover:text-ink dark:hover:text-ink-dark transition-colors"
        :to="link.path"
        exact-active-class="text-ink dark:text-ink-dark underline decoration-1 underline-offset-8"
      >{{ link.title }}</NuxtLink>
    </nav>
    <!-- Social icons & Color Mode -->
    <div class="flex items-center gap-4 text-muted dark:text-muted-dark">
      <a
        v-if="appConfig.socials?.twitter || appConfig.socials?.x"
        class="flex hover:text-ink dark:hover:text-ink-dark transition-colors"
        :href="`https://x.com/${appConfig.socials?.twitter || appConfig.socials?.x}`"
        title="X"
      >
        <Icon class="size-4" name="i-simple-icons-x" />
      </a>
      <a
        v-if="appConfig.socials?.github"
        class="flex hover:text-ink dark:hover:text-ink-dark transition-colors"
        :href="`https://github.com/${appConfig.socials?.github}`"
        title="GitHub"
      >
        <Icon class="size-4" name="i-simple-icons-github" />
      </a>
      <a
        v-if="appConfig.socials?.mastodon"
        class="flex hover:text-ink dark:hover:text-ink-dark transition-colors"
        :href="`https://elk.zone/${appConfig.socials?.mastodon}`" title="Mastodon"
      >
        <Icon class="size-4" name="i-simple-icons-mastodon" />
      </a>
      <a
        v-if="appConfig.socials?.bluesky"
        class="flex hover:text-ink dark:hover:text-ink-dark transition-colors"
        :href="`https://bsky.app/profile/${appConfig.socials?.bluesky}`" title="Bluesky"
      >
        <Icon class="size-4" name="i-simple-icons-bluesky" />
      </a>
      <ColorModeSwitch class="flex hover:text-ink dark:hover:text-ink-dark transition-colors" />
    </div>
  </div>
</template>
