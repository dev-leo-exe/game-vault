<script setup lang="ts">
defineProps<{
  label: string
  vertical?: boolean
  team?: 'a' | 'b'
  variant?: 'stamp' | 'cartouche'
}>()

const tones = {
  a: 'bg-team-a text-on-team-a',
  b: 'bg-team-b text-on-team-b',
}
</script>

<template>
  <span
    v-if="variant === 'cartouche'"
    role="img"
    :aria-label="label"
    class="inline-block border border-ink bg-paper-raised px-1 py-2 font-seal text-seal-label leading-[normal] tracking-[.12em] text-ink [writing-mode:vertical-rl] [text-orientation:upright]"
  >
    <slot />
  </span>
  <span
    v-else
    role="img"
    :aria-label="label"
    class="inline-flex min-h-8 min-w-8 items-center justify-center rounded-xs font-seal text-seal-label outline outline-current -outline-offset-3"
    :class="[
      team ? tones[team] : 'bg-seal text-on-seal',
      vertical ? 'px-1 leading-[normal] pt-[calc(--spacing(2)+0.08em)] pb-2 [writing-mode:vertical-rl] [text-orientation:upright]' : 'p-1',
    ]"
  >
    <slot />
  </span>
</template>
