<script setup lang="ts">
import type { Stat } from '../utils/games'

const props = defineProps<{ stats: Stat[] }>()
const grid = computed(() => props.stats.filter(stat => !stat.fullRow))
const rows = computed(() => props.stats.filter(stat => stat.fullRow))
</script>

<template>
  <dl class="rounded-md border border-line-strong bg-paper-raised">
    <div v-if="grid.length" class="grid auto-cols-fr grid-flow-col divide-x divide-line">
      <div v-for="stat in grid" :key="stat.label" class="flex min-w-0 flex-col px-4 py-3">
        <dt class="order-last text-caption text-ink-muted">{{ stat.label }}</dt>
        <dd class="text-[32px] leading-10 font-black tabular-nums">{{ stat.value }}</dd>
      </div>
    </div>
    <div
      v-for="stat in rows"
      :key="stat.label"
      class="px-4 pt-3 pb-4 not-first:border-t not-first:border-line"
    >
      <dt class="text-caption text-ink-muted">{{ stat.label }}</dt>
      <dd class="my-1 font-display text-title no-wonk">{{ stat.value }}</dd>
      <dd v-if="stat.meta" class="text-caption text-ink-muted">{{ stat.meta }}</dd>
    </div>
  </dl>
</template>
