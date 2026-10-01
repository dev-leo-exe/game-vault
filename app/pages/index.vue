<template>
  <div>
    <SkyHeader title="Game Vault" :eyebrow="greeting">
      <template #art>
        <MotifWave />
      </template>
      <template #seal>
        <Seal vertical label="Game Vault">遊戯庫</Seal>
      </template>
    </SkyHeader>

    <main>
      <GamePick v-if="pick">
        <GameCard v-bind="pick" blurb="Word association in two teams" wide>
          <template #art>
            <MotifWave />
          </template>
        </GameCard>
      </GamePick>

      <GameLibrary :count="games.length">
        <GameCard v-for="game in games" :key="game.title" v-bind="game">
          <template #art>
            <MotifWave />
          </template>
        </GameCard>
      </GameLibrary>
    </main>
  </div>
</template>

<script setup lang="ts">
const hour = new Date().getHours()
const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

//dummy data for now, will be replaced with a fetch from the API in the future
const games = [
  { title: 'Codenames', players: '4–10', minutes: 15, tone: 'indigo' as const },
]
const pick = games[0]
</script>
