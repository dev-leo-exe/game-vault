<script setup lang="ts">
const code = defineModel<string>({ default: '' })
const focused = ref(false)

const onInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  code.value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4)
  input.value = code.value
}

const cellClass = (i: number) => {
  if (focused.value && i === Math.min(code.value.length, 3)) return 'border-2 border-primary bg-paper-raised shadow-focus'
  return code.value[i] ? 'border border-line-strong bg-paper-raised' : 'border border-line-strong bg-paper-sunken'
}
</script>

<template>
  <label class="relative inline-flex gap-2">
    <input
      :value="code"
      autofocus
      maxlength="4"
      inputmode="text"
      autocapitalize="characters"
      autocomplete="one-time-code"
      spellcheck="false"
      aria-label="Room code"
      class="absolute inset-0 w-full text-base opacity-0 caret-transparent"
      @input="onInput"
      @focus="focused = true"
      @blur="focused = false"
    >
    <span
      v-for="i in 4"
      :key="i"
      aria-hidden="true"
      class="flex h-16 w-14 items-center justify-center rounded-md text-[32px] leading-10 font-black text-ink tabular-nums transition-colors duration-320 ease-tide"
      :class="cellClass(i - 1)"
    >{{ code[i - 1] }}</span>
  </label>
</template>
