<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  external: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <span class="not-prose">
    <NuxtLink
      :to="href"
      :external="external"
      class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium no-underline bg-ink text-paper dark:bg-ink-dark dark:text-paper-dark hover:opacity-85 transition-opacity"
    >
      <Icon
        v-if="icon"
        :name="icon"
        class="w-4 h-4"
      />
      <slot mdc-unwrap="p" />
    </NuxtLink>
  </span>
</template>
