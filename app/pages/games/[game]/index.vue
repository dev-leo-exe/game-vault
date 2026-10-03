<script setup lang="ts">
import type { Component } from 'vue'
import { PreviewCodenames } from '#components'

definePageMeta({ layout: 'game' })

const route = useRoute()
const slug = route.params.game as string

const { data: game } = await useAsyncData(`game-${slug}`, async () => dummyGames.find(game => game.id === slug) ?? null)
if (!game.value) throw createError({ statusCode: 404, statusMessage: 'Game not found', fatal: true })

const previews: Record<string, Component> = { codenames: PreviewCodenames }

const { data: tryNext } = await useAsyncData(`try-next-${slug}`, async () =>
  dummyGames.filter(game => game.id !== slug).sort(() => Math.random() - 0.5).slice(0, 2))
</script>

<template>
  <div v-if="game" class="grain flex-1">
    <GameHero :title="game.title" :tagline="game.tagline" :tone="game.tone">
      <template #art>
        <MotifWave />
      </template>
    </GameHero>

    <main class="pb-8">
      <GameFacts
        class="mx-4 mt-6"
        :players="game.players"
        :minutes="game.minutes"
        :teams="game.teams"
        :languages="game.languages"
      />

      <GameSection v-if="game.about" title="About the game">
        <p v-for="paragraph in game.about" :key="paragraph" class="max-w-[60ch] text-body not-first:mt-3">
          {{ paragraph }}
        </p>
        <TagList v-if="game.tags" class="mt-4" :tags="game.tags" label="What it is like" />
      </GameSection>

      <GameSection v-if="previews[game.id]" title="A look at the board">
        <component :is="previews[game.id]" />
      </GameSection>

      <GameSection v-if="tryNext?.length" title="Try next">
        <div class="grid grid-cols-2 gap-4">
          <GameCard
            v-for="next in tryNext"
            :key="next.id"
            :to="`/games/${next.id}`"
            :title="next.title"
            :players="next.players"
            :minutes="next.minutes"
            :tone="next.tone"
          >
            <template #art>
              <MotifWave />
            </template>
          </GameCard>
        </div>
      </GameSection>
    </main>
  </div>
</template>
