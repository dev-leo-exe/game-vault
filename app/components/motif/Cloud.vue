<script setup lang="ts">
const props = defineProps<{ y: number, scale: number, flip?: boolean }>()
const transform = computed(() => props.flip
  ? `translate(0 ${props.y}) scale(${-props.scale} ${props.scale}) translate(-60 0)`
  : `translate(0 ${props.y}) scale(${props.scale})`)
const outline = 'M2 16C0 12 3 8.5 8 8.5C10 3.5 15.5 0.5 21.5 1.5C27 2.5 30 5.5 31 8C34 5 40 4.5 44 7.5C48.5 5.5 55 7 57 11C58.5 14 57 16 54 16Z'
</script>

<template>
  <g :transform="transform">
    <path class="fill-cloud" :d="outline" />
    <path class="fill-none stroke-cloud-shade stroke-[1.3]" stroke-linecap="round" d="M7 13H40M49 12.5c1.5-2.8 5.6-2.4 5.8.4.2 2.3-2.6 3.1-3.8 1.4" />
    <path class="fill-none stroke-ink stroke-1 opacity-55 dark:stroke-cloud-shade dark:opacity-100" stroke-linejoin="round" :d="outline" />
  </g>
</template>
