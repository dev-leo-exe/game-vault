<script setup lang="ts">
// Mini team crest for 16–22px: ring, disc, one wave scale (a) or a half sun on the horizon (b)
defineProps<{ team: 'a' | 'b' }>()
</script>

<template>
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="10" cy="10" r="9.2" class="fill-paper-raised stroke-ink stroke-[1.2]" />
    <circle cx="10" cy="10" r="7.2" :class="team === 'a' ? 'fill-team-a' : 'fill-team-b'" />
    <path
      v-if="team === 'a'"
      d="M4.6 13.6a5.4 5.4 0 0 1 10.8 0M7.6 13.6a2.4 2.4 0 0 1 4.8 0"
      class="fill-none stroke-paper-raised stroke-[1.7]"
    />
    <g v-else class="fill-paper-raised">
      <path d="M6.2 11.8a3.8 3.8 0 0 1 7.6 0z" />
      <rect x="4.8" y="13" width="10.4" height="1.8" rx="0.9" />
    </g>
  </svg>
</template>
