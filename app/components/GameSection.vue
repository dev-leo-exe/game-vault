<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <section class="mt-8 px-4">
    <h2 class="mb-3 font-display text-heading no-wonk">{{ title }}</h2>
    <slot />
  </section>
</template>
