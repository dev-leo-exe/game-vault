<script setup lang="ts">
const route = useRoute()
const joinOpen = ref(false)
const hostOpen = ref(false)
const pickedGame = ref<string>()

const host = () => {
  pickedGame.value = route.params.game as string
  hostOpen.value = true
}
</script>

<template>
  <div class="flex flex-1 flex-col">
    <slot />
    <ActionBar>
      <Button @click="host">
        <IconPlus class="size-5" />
        Host this game
      </Button>
      <Button variant="ghost" @click="joinOpen = true">
        <IconJoin class="size-5" />
        Join with a code
      </Button>
    </ActionBar>

    <JoinSheet v-model:open="joinOpen" />
    <HostSheet v-model:open="hostOpen" v-model:game="pickedGame" />
  </div>
</template>
