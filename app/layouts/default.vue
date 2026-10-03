<script setup lang="ts">
const joinOpen = ref(false)
const hostOpen = ref(false)
const pickedGame = ref(dummyGames[0]?.id) // last played, once that's tracked
</script>

<template>
  <div class="flex flex-1 flex-col">
    <slot />
    <ActionBar row>
      <Button variant="secondary" @click="joinOpen = true">
        <IconJoin class="size-5" />
        Join
      </Button>
      <Button @click="hostOpen = true">
        <IconPlus class="size-5" />
        Host
      </Button>
    </ActionBar>

    <JoinSheet v-model:open="joinOpen" />
    <HostSheet v-model:open="hostOpen" v-model:game="pickedGame" />
  </div>
</template>
