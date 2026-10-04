<script setup lang="ts">
definePageMeta({ layout: false })

const route = useRoute()
const user = useSupabaseUser()

const failure = route.query.error_description as string | undefined
if (failure) {
  const error = failure.includes('invite-only') ? 'invite' : 'failed'
  await navigateTo({ path: '/login', query: { error } }, { replace: true })
}
watch(user, (signedIn) => {
  if (signedIn) navigateTo('/', { replace: true })
}, { immediate: true })
</script>

<template>
  <p class="m-auto text-caption text-ink-muted">Signing you in…</p>
</template>
