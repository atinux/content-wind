<!-- This component is used to show Markdown code block examples -->
<template>
  <pre class="max-w-full overflow-x-auto text-gray-700 dark:text-gray-300"><ContentSlot :use="$slots.default" unwrap="p" /></pre>
</template>
