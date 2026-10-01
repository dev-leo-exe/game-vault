<script setup lang="ts">
const theme = useTheme()
const dark = ref(false)
onMounted(() => {
  dark.value = theme.value ? theme.value === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches
})

const setTheme = (next: 'light' | 'dark') => {
  theme.value = next
  document.documentElement.dataset.theme = next
}

const toggle = () => {
  dark.value = !dark.value
  const next = dark.value ? 'dark' : 'light'

  if (!document.startViewTransition) return setTheme(next)
  document.startViewTransition(() => setTheme(next))
}
</script>

<template>
  <button
    type="button"
    aria-label="Dark mode"
    :aria-pressed="dark"
    class="inline-flex size-tap-min items-center justify-center rounded-full border border-line-strong bg-paper-raised text-ink focus-visible:shadow-focus focus-visible:outline-none"
    @click="toggle"
  >
    <svg class="size-6 fill-none stroke-current stroke-2 dark:hidden" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2.5v2M12 19.5v2M4.6 4.6L6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
    </svg>
    <svg class="hidden size-6 fill-none stroke-current stroke-2 dark:block" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
    </svg>
  </button>
</template>
