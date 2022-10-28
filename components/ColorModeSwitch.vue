<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template>
  <button aria-label="Color Mode" class="inline-block w-5" @click="onClick">
    <ColorScheme placeholder="...">
      <Icon v-if="colorMode.value === 'dark'" name="ph:moon-bold" class="w-5 h-5" />
      <Icon v-else name="ph:sun-bold" class="w-5 h-5" />
    </ColorScheme>
  </button>
</template>
