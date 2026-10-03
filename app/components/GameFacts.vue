<script setup lang="ts">
defineProps<{
  players: string
  minutes: number
  teams?: number
  languages?: number
}>()
</script>

<template>
  <dl class="grid auto-cols-fr grid-flow-col divide-x divide-line rounded-md border border-line-strong bg-paper-raised">
    <div class="flex min-w-0 flex-col items-center gap-0.5 px-1 py-3 text-center">
      <IconPeople class="mb-1 size-5 text-ink-muted" />
      <dt class="order-last text-caption text-ink-muted">Players</dt>
      <dd class="text-xl leading-6 font-black whitespace-nowrap tabular-nums">{{ players }}</dd>
    </div>
    <div class="flex min-w-0 flex-col items-center gap-0.5 px-1 py-3 text-center">
      <IconClock class="mb-1 size-5 text-ink-muted" />
      <dt class="order-last text-caption text-ink-muted">Minutes</dt>
      <dd class="text-xl leading-6 font-black whitespace-nowrap tabular-nums">{{ minutes }}</dd>
    </div>
    <div v-if="teams" class="flex min-w-0 flex-col items-center gap-0.5 px-1 py-3 text-center">
      <IconTeams class="mb-1 size-5 text-ink-muted" />
      <dt class="order-last text-caption text-ink-muted">Teams</dt>
      <dd class="text-xl leading-6 font-black whitespace-nowrap tabular-nums">{{ teams }}</dd>
    </div>
    <div v-if="languages" class="flex min-w-0 flex-col items-center gap-0.5 px-1 py-3 text-center">
      <IconGlobe class="mb-1 size-5 text-ink-muted" />
      <dt class="order-last text-caption text-ink-muted">Languages</dt>
      <dd class="text-xl leading-6 font-black whitespace-nowrap tabular-nums">{{ languages }}</dd>
    </div>
  </dl>
</template>
