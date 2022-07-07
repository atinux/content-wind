<script setup lang="ts">
import type { IconifyIcon } from '@iconify/vue'
import { Icon as Iconify } from '@iconify/vue/dist/offline'
import { loadIcon } from '@iconify/vue'

const nuxtApp = useNuxtApp()
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
const state = useState('icons', () => ({}))
const icon = computed<IconifyIcon | null>(() => state.value?.[props.name])
const component = computed(() => nuxtApp.vueApp.component(props.name))

async function loadIconComponent () {
  if (!state.value?.[props.name]) {
    state.value[props.name] = await loadIcon(props.name).catch(() => {})
  }
}

watch(() => props.name, loadIconComponent)

await loadIconComponent()
</script>

<template>
  <Iconify v-if="icon" :icon="icon" class="inline-block w-5 h-5" />
  <Component :is="component" v-else-if="component" />
  <span v-else>{{ name }}</span>
</template>
