<script setup lang="ts">
const tiles: { word: string, revealed?: 'a' | 'b' | 'neutral' }[] = [
  { word: 'Lantern' }, { word: 'Harbor', revealed: 'a' }, { word: 'Tide' },
  { word: 'Crane', revealed: 'b' }, { word: 'Ember' }, { word: 'Scroll' }, { word: 'Needle' },
  { word: 'Pine', revealed: 'neutral' }, { word: 'Anchor' }, { word: 'Kite' },
]
const tints = {
  a: 'bg-tile-a text-on-tile-a',
  b: 'bg-tile-b text-on-tile-b',
  neutral: 'bg-tile-neutral text-on-tile-neutral',
}
</script>

<template>
  <PrintFrame caption="Open words stay bright; found ones step back with their team’s mark.">
    <div class="grid grid-cols-5 gap-1">
      <span
        v-for="tile in tiles"
        :key="tile.word"
        class="relative flex aspect-square min-w-0 items-center justify-center rounded-xs p-1 text-center text-[11px] leading-tight"
        :class="tile.revealed ? tints[tile.revealed] : 'border border-line-strong bg-tile font-bold'"
      >
        <MarkMist v-if="tile.revealed === 'neutral'" class="absolute top-1 right-1 size-3.5" />
        <MarkCrest v-else-if="tile.revealed" :team="tile.revealed" class="absolute top-1 right-1 size-3.5" />
        {{ tile.word }}
      </span>
    </div>
  </PrintFrame>
</template>
