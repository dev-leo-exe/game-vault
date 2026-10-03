<script setup lang="ts">
const joinOpen = ref(false)
const code = ref('')

const hostOpen = ref(false)
const pickedGame = ref(dummyGames[0]?.id) // last played, once that's tracked
const hostGame = computed(() => dummyGames.find(game => game.id === pickedGame.value))
</script>

<template>
  <div class="flex flex-1 flex-col">
    <slot />
    <ActionBar>
      <Button variant="secondary" @click="joinOpen = true">
        <IconJoin class="size-5" />
        Join
      </Button>
      <Button @click="hostOpen = true">
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

    <Sheet
      v-model:open="hostOpen"
      title="Host a game"
      subtitle="Pick what the room will play. You can change it in the lobby."
      scroll
    >
      <GamePicker v-model="pickedGame" :games="dummyGames" />
      <template #actions>
        <Button :disabled="!hostGame">{{ hostGame ? `Host ${hostGame.title}` : 'Pick a game' }}</Button>
      </template>
    </Sheet>
  </div>
</template>
