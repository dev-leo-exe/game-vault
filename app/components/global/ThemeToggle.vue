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
    <IconSun class="size-6 dark:hidden" />
    <IconMoon class="hidden size-6 dark:block" />
  </button>
</template>
