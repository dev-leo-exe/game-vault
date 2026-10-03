<script setup lang="ts">
const joinOpen = ref(false)
const code = ref('')
</script>

<template>
  <div class="flex flex-1 flex-col">
    <slot />
    <ActionBar>
      <Button variant="secondary" @click="joinOpen = true">
        <IconJoin class="size-5" />
        Join
      </Button>
      <Button>
        <IconPlus class="size-5" />
        Host
      </Button>
    </ActionBar>

    <Sheet v-model:open="joinOpen" title="Join a room">
      <p class="mb-4 text-caption text-ink-muted">Ask the host for the four-letter code on their screen.</p>
      <RoomCodeInput v-model="code" />
      <template #actions>
        <Button :disabled="code.length < 4">Join room</Button>
      </template>
    </Sheet>
  </div>
</template>
