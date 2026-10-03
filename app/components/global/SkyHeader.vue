<script setup lang="ts">
defineProps<{
  title: string
  eyebrow?: string
}>()
</script>

<template>
  <header class="grain h-60 overflow-hidden border-b border-line-strong bg-linear-to-b from-sky-top via-sky-mid via-48% to-sky-bottom">
    <div class="absolute inset-x-0 -bottom-px">
      <slot name="art" />
    </div>
    <div class="absolute top-2 left-3 z-10">
      <slot name="start" />
    </div>
    <div class="absolute inset-x-4 top-14 flex items-start gap-3">
      <div class="min-w-0 flex-1">
        <p v-if="eyebrow" class="text-caption font-bold text-ink">{{ eyebrow }}</p>
        <h1 class="font-display text-display text-ink">{{ title }}</h1>
      </div>
      <slot name="seal" />
    </div>
  </header>
</template>
