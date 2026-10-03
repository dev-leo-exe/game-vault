<script setup lang="ts">
defineProps<{
  tags: string[]
  label?: string
}>()
</script>

<template>
  <ul class="flex flex-wrap gap-2" :aria-label="label ?? 'Tags'">
    <li
      v-for="tag in tags"
      :key="tag"
      class="rounded-xs border border-line-strong bg-paper-raised px-3 py-1 text-caption font-bold"
    >
      {{ tag }}
    </li>
  </ul>
</template>
