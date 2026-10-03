<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'primary' | 'secondary' }>(), { variant: 'primary' })

const variants = {
  primary: 'bg-primary text-on-primary dark:border-primary',
  secondary: 'bg-aqua text-on-aqua dark:border-line-strong',
}

const ripple = ref<{ id: number, x: number, y: number }>()
const onPointerDown = (event: PointerEvent) => {
  const box = (event.currentTarget as HTMLElement).getBoundingClientRect()
  ripple.value = { id: event.timeStamp, x: event.clientX - box.left, y: event.clientY - box.top }
}
</script>

<template>
  <button
    type="button"
    class="relative isolate inline-flex min-h-button-h items-center justify-center gap-2 overflow-hidden rounded-sm border-2 border-ink px-6 shadow-print active:translate-0.5 active:shadow-pressed py-3 text-label transition-[translate,box-shadow] duration-320 ease-tide focus-visible:shadow-focus focus-visible:outline-none disabled:pointer-events-none disabled:opacity-45 disabled:shadow-none"
    :class="variants[variant]"
    @pointerdown="onPointerDown"
  >
    <span
      v-if="ripple"
      :key="ripple.id"
      aria-hidden="true"
      class="pointer-events-none absolute -z-10 -mt-1.5 -ml-1.5 size-3 animate-ripple rounded-full opacity-0 motion-reduce:hidden"
      :class="variant === 'primary' ? 'bg-foam' : 'bg-primary'"
      :style="{ left: `${ripple.x}px`, top: `${ripple.y}px` }"
    />
    <slot />
  </button>
</template>
