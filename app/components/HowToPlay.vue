<script setup lang="ts">
defineProps<{ steps: { title: string, description: string }[] }>()
</script>

<template>
  <ol class="flex flex-col gap-4">
    <li v-for="(step, index) in steps" :key="step.title" class="flex items-start gap-3">
      <span
        class="inline-flex size-8 shrink-0 items-center justify-center rounded-xs border-2 border-ink font-black tabular-nums dark:border-line-strong"
        aria-hidden="true"
      >
        {{ index + 1 }}
      </span>
      <div class="min-w-0">
        <h3 class="font-bold">{{ step.title }}</h3>
        <p class="text-ink-muted">{{ step.description }}</p>
      </div>
    </li>
  </ol>
</template>
