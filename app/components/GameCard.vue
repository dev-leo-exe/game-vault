<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  players: string
  minutes: number
  tone?: 'indigo' | 'dawn' | 'aqua' | 'sand'
  blurb?: string
  wide?: boolean
}>(), { tone: 'dawn' })

const tones = {
  indigo: 'from-primary-soft to-mist dark:from-team-a-soft',
  dawn: 'from-sky-top via-sky-mid via-55% to-sky-bottom',
  aqua: 'from-paper-raised to-aqua',
  sand: 'from-peach-soft to-sand',
}
</script>

<template>
  <button
    type="button"
    class="flex w-full overflow-hidden rounded-md border border-line-strong bg-paper-raised text-left text-ink shadow-print transition-[translate,box-shadow] duration-320 ease-tide focus-visible:shadow-focus focus-visible:outline-none active:translate-0.5 active:shadow-pressed"
    :class="wide ? 'flex-row' : 'flex-col'"
  >
    <div
      class="relative overflow-hidden border-line-strong bg-linear-to-b"
      :class="[tones[tone], wide ? 'w-2/5 shrink-0 border-r' : 'aspect-16/10 border-b']"
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
          <svg class="size-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20c.6-3.4 3.2-5.5 6.5-5.5s5.9 2.1 6.5 5.5M16 4.3a3.5 3.5 0 0 1 0 6.4M18 14.8c2 .7 3.2 2.5 3.5 5.2" />
          </svg>
          {{ players }}
        </span>
        <span class="inline-flex items-center gap-1">
          <svg class="size-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2" />
          </svg>
          {{ minutes }} min
        </span>
      </div>
    </div>
  </button>
</template>
