<script setup lang="ts">
const joinOpen = ref(false)
const code = ref('')
</script>

<template>
  <div class="flex flex-1 flex-col">
    <slot />
    <ActionBar>
      <button type="button" @click="joinOpen = true" class="inline-flex min-h-button-h items-center justify-center gap-2 rounded-sm border-2 border-line-strong bg-aqua px-6 py-3 text-label text-on-aqua focus-visible:shadow-focus focus-visible:outline-none">
        <IconJoin class="size-5" />
        Join
      </button>
      <button type="button" class="inline-flex min-h-button-h items-center justify-center gap-2 rounded-sm border-2 border-ink bg-primary px-6 py-3 text-label text-on-primary shadow-print transition-[translate,box-shadow] duration-320 ease-tide focus-visible:shadow-focus focus-visible:outline-none active:translate-0.5 active:shadow-pressed dark:border-primary">
        <IconPlus class="size-5" />
        Host
      </button>
    </ActionBar>

    <Sheet v-model:open="joinOpen" title="Join a room">
      <p class="mb-4 text-caption text-ink-muted">Ask the host for the four-letter code on their screen.</p>
      <RoomCodeInput v-model="code" />
      <template #actions>
        <button type="button" :disabled="code.length < 4" class="inline-flex min-h-button-h items-center justify-center gap-2 rounded-sm border-2 border-ink bg-primary px-6 py-3 text-label text-on-primary shadow-print transition-[translate,box-shadow] duration-320 ease-tide focus-visible:shadow-focus focus-visible:outline-none active:translate-0.5 active:shadow-pressed disabled:cursor-not-allowed disabled:opacity-45 disabled:shadow-none disabled:active:translate-0 dark:border-primary">
          Join room
        </button>
      </template>
    </Sheet>
  </div>
</template>
