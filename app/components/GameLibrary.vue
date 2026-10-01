<script setup lang="ts">
defineProps<{ count: number }>()
</script>

<template>
  <section>
    <div class="mx-4 mt-6 mb-3 flex items-baseline justify-between">
      <h2 class="font-display text-heading no-wonk">All games</h2>
      <span class="text-caption text-ink-muted">{{ count }} {{ count === 1 ? 'game' : 'games' }}</span>
    </div>
    <div class="grid grid-cols-2 gap-4 px-4 pb-6">
      <slot />
    </div>
  </section>
</template>
