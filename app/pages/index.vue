<template>
  <div class="grain flex-1">
    <SkyHeader title="Game Vault" :eyebrow="greeting">
      <template #start>
        <ThemeToggle />
      </template>
      <template #art>
        <MotifWave />
      </template>
      <template #seal>
        <Seal vertical label="Game Vault">遊戯庫</Seal>
      </template>
    </SkyHeader>

    <main>
      <GamePick v-if="pick">
        <GameCard
          :title="pick.title"
          :players="pick.players"
          :minutes="pick.minutes"
          :tone="pick.tone"
          :blurb="pick.blurb"
          wide
        >
          <template #art>
            <MotifWave />
          </template>
        </GameCard>
      </GamePick>

      <GameLibrary :count="games.length">
        <GameCard
          v-for="game in games"
          :key="game.id"
          :title="game.title"
          :players="game.players"
          :minutes="game.minutes"
          :tone="game.tone"
        >
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
const games = dummyGames
const pick = games[0]
</script>
