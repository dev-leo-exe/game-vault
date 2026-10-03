<script setup lang="ts">
const open = defineModel<boolean>('open', { default: false })
const code = ref('')
</script>

<template>
  <Sheet v-model:open="open" title="Join a room">
    <p class="mb-4 text-caption text-ink-muted">Ask the host for the four-letter code on their screen.</p>
    <RoomCodeInput v-model="code" />
    <template #actions>
      <Button :disabled="code.length < 4">Join room</Button>
    </template>
  </Sheet>
</template>
