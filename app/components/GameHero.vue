<script setup lang="ts">
import type { Tone } from '../utils/games'

defineProps<{
  title: string
  tagline?: string
  tone: Tone
}>()
</script>

<template>
  <header>
    <div
      class="grain h-56 overflow-hidden border-b-2 border-ink bg-linear-to-b dark:border-line-strong"
      :class="toneClasses[tone]"
    >
      <div class="absolute inset-x-0 -bottom-px">
        <slot name="art" />
      </div>
      <NuxtLink
        to="/"
        aria-label="Back to library"
        class="absolute top-3 left-3 z-10 inline-flex size-tap-min items-center justify-center rounded-full border border-line-strong bg-paper-raised text-ink focus-visible:shadow-focus focus-visible:outline-none"
      >
        <IconBack class="size-6" />
      </NuxtLink>
    </div>
    <div class="px-4 pt-4">
      <h1 class="font-display text-display no-wonk">{{ title }}</h1>
      <p v-if="tagline" class="mt-1 text-body-lg text-ink-muted">{{ tagline }}</p>
    </div>
  </header>
</template>
