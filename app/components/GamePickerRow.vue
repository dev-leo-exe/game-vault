<script setup lang="ts">
import type { Tone } from '../utils/games'

defineProps<{
  id: string
  name: string
  title: string
  players: string
  minutes: number
  tone: Tone
  note?: string
}>()
const picked = defineModel<string>()
</script>

<template>
  <label
    class="group flex min-h-18 cursor-pointer items-center gap-3 rounded-md bg-paper py-2 pr-3 pl-2 text-ink ring-1 ring-line-strong transition-[background-color,box-shadow] duration-320 ease-tide has-checked:bg-primary-soft has-checked:ring-2 has-checked:ring-primary has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-focus"
  >
    <input v-model="picked" type="radio" :name="name" :value="id" class="sr-only">
    <span
      class="grain h-14 w-18 shrink-0 overflow-hidden rounded-sm border border-line-strong bg-linear-to-b"
      :class="toneClasses[tone]"
      aria-hidden="true"
    >
      <span class="absolute inset-x-0 -bottom-px">
        <slot name="art" />
      </span>
    </span>
    <span class="flex min-w-0 flex-1 flex-col">
      <span class="truncate font-display text-heading no-wonk">{{ title }}</span>
      <span class="text-caption text-ink-muted tabular-nums">{{ players }} players · {{ minutes }} min</span>
      <span
        v-if="note"
        class="mt-1.5 self-start rounded-xs border border-line px-1.5 py-1 text-[13px] leading-none font-bold text-ink-muted [text-box:trim-both_cap_alphabetic] group-has-checked:border-primary/40 group-has-checked:text-ink"
      >{{ note }}</span>
    </span>
    <span
      class="inline-flex size-7 shrink-0 items-center justify-center rounded-xs border-2 border-line-strong bg-paper-raised text-on-primary group-has-checked:border-primary group-has-checked:bg-primary"
      aria-hidden="true"
    >
      <IconCheck class="hidden size-[18px] stroke-[2.5] group-has-checked:block" />
    </span>
  </label>
</template>
