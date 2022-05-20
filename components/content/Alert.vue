<script setup>
defineProps({
  icon: {
    type: String,
    default: 'heroicons-outline:exclamation'
  }
})
</script>

<template>
  <div class="rounded-md bg-yellow-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0 mr-3" v-if="icon">
        <Icon class="h-5 w-5 text-yellow-400" aria-hidden="true" :name="icon" />
      </div>
      <div>
        <h3 class="text-base font-medium text-yellow-800 m-0"><Markdown :use="$slots.title" unwrap="p" /></h3>
        <div class="text-sm text-yellow-700 mt-2">
          <Markdown :use="$slots.default" unwrap="p" />
        </div>
      </div>
    </div>
  </div>
</template>