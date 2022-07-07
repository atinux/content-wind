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
const isFetching = ref(false)
const icon = computed<IconifyIcon | null>(() => state.value?.[props.name])
const component = computed(() => nuxtApp.vueApp.component(props.name))

async function loadIconComponent () {
  if (component.value) {
    return
  }
  if (!state.value?.[props.name]) {
    isFetching.value = true
    state.value[props.name] = await loadIcon(props.name).catch(() => {})
    isFetching.value = false
  }
}

watch(() => props.name, loadIconComponent)

!component.value && await loadIconComponent()
</script>

<template>
  <span v-if="isFetching" class="inline-block w-5 h-5" />
  <Iconify v-else-if="icon" :icon="icon" class="inline-block w-5 h-5" />
  <Component :is="component" v-else-if="component" class="inline-block w-5 h-5" />
  <span v-else>{{ name }}</span>
</template>
