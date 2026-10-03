<script setup lang="ts">
const route = useRoute()
const slug = route.params.game as string

const { data: game } = await useAsyncData(`game-${slug}`, async () => dummyGames.find(game => game.id === slug) ?? null)
if (!game.value) throw createError({ statusCode: 404, statusMessage: 'Game not found', fatal: true })
</script>

<template>
  <div v-if="game" class="grain flex-1">
    <GameHero :title="game.title" :tagline="game.tagline" :tone="game.tone">
      <template #art>
        <MotifWave />
      </template>
    </GameHero>

    <main class="px-4 pt-6 pb-8">
      <GameFacts
        :players="game.players"
        :minutes="game.minutes"
        :teams="game.teams"
        :languages="game.languages"
      />
    </main>
  </div>
</template>
