<script setup lang="ts">
const open = defineModel<boolean>('open', { default: false })
const picked = defineModel<string>('game')
const hostGame = computed(() => dummyGames.find(game => game.id === picked.value))
</script>

<template>
  <Sheet
    v-model:open="open"
    title="Host a game"
    subtitle="Pick what the room will play. You can change it in the lobby."
    scroll
  >
    <GamePicker v-model="picked" :games="dummyGames" />
    <template #actions>
      <Button :disabled="!hostGame">{{ hostGame ? `Host ${hostGame.title}` : 'Pick a game' }}</Button>
    </template>
  </Sheet>
</template>
