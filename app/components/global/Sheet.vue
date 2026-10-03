<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  scroll?: boolean
}>()
const open = defineModel<boolean>('open', { default: false })

const dialog = useTemplateRef('dialog')

const keyboard = ref(0)
const measureKeyboard = () => {
  const view = window.visualViewport!
  keyboard.value = Math.max(0, window.innerHeight - view.height - view.offsetTop)
}
const watchKeyboard = (on: boolean) => {
  const view = window.visualViewport
  if (!view) return
  for (const event of ['resize', 'scroll']) {
    if (on) view.addEventListener(event, measureKeyboard)
    else view.removeEventListener(event, measureKeyboard)
  }
  keyboard.value = 0
}

watch(open, (isOpen) => {
  if (isOpen) dialog.value?.showModal()
  else dialog.value?.close()
  watchKeyboard(isOpen)
})
onBeforeUnmount(() => watchKeyboard(false))
</script>

<template>
  <dialog
    ref="dialog"
    :aria-label="title"
    :style="{ paddingBottom: `${keyboard}px` }"
    :class="{ 'h-[82%]': scroll }"
    class="mx-auto mt-auto mb-0 max-h-[88%] w-full max-w-[560px] animate-rise rounded-t-lg border-t-2 border-ink bg-paper-raised text-ink shadow-float backdrop:animate-fade backdrop:bg-scrim motion-reduce:animate-none motion-reduce:backdrop:animate-none dark:border-line-strong"
    @close="open = false"
    @click.self="open = false"
  >
    <div
      class="grain px-4 pt-2"
      :class="scroll ? 'flex h-full flex-col' : 'pb-[calc(--spacing(4)+env(safe-area-inset-bottom))]'"
    >
      <div class="mx-auto mb-4 h-1 w-10 rounded-full bg-line-strong" aria-hidden="true" />
      <div class="mb-2 flex items-start gap-3">
        <h2 class="flex-1 font-display text-title no-wonk">{{ title }}</h2>
        <button
          type="button"
          aria-label="Close"
          class="-mt-1.5 -mr-2 inline-flex size-tap-min items-center justify-center rounded-full focus-visible:shadow-focus focus-visible:outline-none"
          @click="open = false"
        >
          <IconClose class="size-6" />
        </button>
      </div>
      <p v-if="subtitle" class="-mt-1 mb-3 text-caption text-ink-muted">{{ subtitle }}</p>
      <div
        v-if="scroll"
        class="-mx-4 min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pt-2 pb-4 [mask-image:linear-gradient(180deg,transparent,#000_12px,#000_calc(100%-24px),transparent)]"
      >
        <slot />
      </div>
      <slot v-else />
      <div
        v-if="$slots.actions"
        class="flex flex-col gap-2"
        :class="scroll ? '-mx-4 border-t border-line bg-paper-raised px-4 pt-3 pb-[calc(--spacing(4)+env(safe-area-inset-bottom))]' : 'mt-6'"
      >
        <slot name="actions" />
      </div>
    </div>
  </dialog>
</template>
