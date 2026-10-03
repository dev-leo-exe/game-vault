<script setup lang="ts">
import type { Tone } from '../utils/games'

withDefaults(defineProps<{
  to: string
  title: string
  players: string
  minutes: number
  tone?: Tone
  blurb?: string
  wide?: boolean
}>(), { tone: 'dawn' })
</script>

<template>
  <NuxtLink
    :to="to"
    class="flex w-full overflow-hidden rounded-md border border-line-strong bg-paper-raised text-left text-ink shadow-print transition-[translate,box-shadow] duration-320 ease-tide focus-visible:shadow-focus focus-visible:outline-none active:translate-0.5 active:shadow-pressed"
    :class="wide ? 'flex-row' : 'flex-col'"
  >
    <div
      class="grain overflow-hidden border-line-strong bg-linear-to-b"
      :class="[toneClasses[tone], wide ? 'w-2/5 shrink-0 border-r' : 'aspect-16/10 border-b']"
    >
      <div class="absolute inset-x-0 -bottom-px">
        <slot name="art" />
      </div>
    </div>
    <div class="flex min-w-0 flex-col gap-1 px-3 pt-3 pb-4">
      <h3 class="font-display text-heading no-wonk">{{ title }}</h3>
      <p v-if="blurb" class="text-caption text-ink-muted">{{ blurb }}</p>
      <div class="flex gap-3 text-caption text-ink-muted">
        <span class="inline-flex items-center gap-1">
          <IconPeople class="size-4" />
          {{ players }}
        </span>
        <span class="inline-flex items-center gap-1">
          <IconClock class="size-4" />
          {{ minutes }} min
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
