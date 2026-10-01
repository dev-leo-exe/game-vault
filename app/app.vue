<script setup lang="ts">
useHead({ htmlAttrs: { 'data-theme': useTheme() } })
</script>

<template>
  <div class="bg-paper text-ink font-sans w-full min-h-screen flex flex-col">
    <NuxtPage />
  </div>
</template>
