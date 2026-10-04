<script setup lang="ts">
definePageMeta({ layout: false })

const supabase = useSupabaseClient()
const route = useRoute()
if (useSupabaseUser().value) await navigateTo('/', { replace: true })

const waiting = ref(false)
const messages: Record<string, string> = {
  invite: 'This vault is invite-only. Ask a friend to add you.',
  failed: 'Discord didn’t sign you in. Try again.',
}
const error = ref(messages[route.query.error as string])

const signIn = async () => {
  if (waiting.value) return
  waiting.value = true
  error.value = undefined
  const { error: failed } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
    options: { redirectTo: `${location.origin}/confirm` },
  })
  if (failed) {
    waiting.value = false
    error.value = messages.failed
  }
}
</script>

<template>
  <div class="flex flex-1 flex-col">
    <div class="relative flex min-h-90 flex-1 flex-col">
      <LoginScene class="absolute inset-0" />
      <div class="relative z-10 mx-4 mt-16 ml-6 flex items-start gap-3">
        <div class="min-w-0 flex-1">
          <h1 class="font-display text-display-xl">Game<br>Vault</h1>
          <p class="mt-2 max-w-[22ch] text-body-lg">Party games for one room, many phones.</p>
        </div>
        <Seal vertical label="Game Vault">遊戯庫</Seal>
      </div>
    </div>

    <section
      aria-label="Sign in"
      class="flex flex-col gap-3 border-t-2 border-ink bg-paper px-6 pt-6 pb-[calc(--spacing(6)+env(safe-area-inset-bottom))] dark:border-line-strong"
    >
      <p v-if="error" role="alert" class="flex items-center gap-1 text-caption font-bold text-error">
        <IconAlert class="size-[18px] shrink-0" />
        {{ error }}
      </p>
      <Button
        :class="{ 'translate-0.5 animate-pulse shadow-pressed!': waiting }"
        :aria-busy="waiting"
        :aria-disabled="waiting"
        @click="signIn"
      >
        <IconDiscord class="size-5" />
        {{ waiting ? 'Waiting for Discord…' : 'Continue with Discord' }}
      </Button>
    </section>
  </div>
</template>
