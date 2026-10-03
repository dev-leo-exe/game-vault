<script setup lang="ts">
defineProps<{ games: Game[] }>()
const picked = defineModel<string>()
</script>

<template>
  <div role="radiogroup" aria-label="Choose a game" class="flex flex-col gap-2">
    <GamePickerRow
      v-for="game in games"
      :id="game.id"
      :key="game.id"
      v-model="picked"
      name="game"
      :title="game.title"
      :players="game.players"
      :minutes="game.minutes"
      :tone="game.tone"
      :note="game.note"
    >
      <template #art>
        <MotifWave />
      </template>
    </GamePickerRow>
  </div>
</template>
