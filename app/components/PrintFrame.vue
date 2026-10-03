<script setup lang="ts">
defineProps<{ caption?: string }>()
</script>

<template>
  <figure>
    <div class="pointer-events-none rounded-xs border-2 border-ink bg-paper-sunken p-2 shadow-print dark:border-line-strong" inert>
      <slot />
    </div>
    <figcaption v-if="caption" class="mt-3 text-caption text-ink-muted">{{ caption }}</figcaption>
  </figure>
</template>
