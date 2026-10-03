<script setup lang="ts">
defineProps<{ row?: boolean }>()
</script>

<template>
  <div
    class="sticky bottom-0 z-10 flex gap-2 border-t border-line bg-paper px-4 pt-3 pb-[calc(--spacing(4)+env(safe-area-inset-bottom))]"
    :class="row ? '*:flex-1' : 'flex-col'"
  >
    <slot />
  </div>
</template>
