<script setup lang="ts">
defineProps<{ title: string }>()
const open = defineModel<boolean>('open', { default: false })

const dialog = useTemplateRef('dialog')
watch(open, (isOpen) => (isOpen ? dialog.value?.showModal() : dialog.value?.close()))
</script>

<template>
  <dialog
    ref="dialog"
    :aria-label="title"
    class="mx-auto mt-auto mb-0 max-h-[88%] w-full max-w-[560px] animate-rise rounded-t-lg border-t-2 border-ink bg-paper-raised text-ink shadow-float backdrop:animate-fade backdrop:bg-scrim motion-reduce:animate-none motion-reduce:backdrop:animate-none dark:border-line-strong"
    @close="open = false"
    @click.self="open = false"
  >
    <div class="grain px-4 pt-2 pb-[calc(--spacing(4)+env(safe-area-inset-bottom))]">
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
      <slot />
      <div v-if="$slots.actions" class="mt-6 flex flex-col gap-2">
        <slot name="actions" />
      </div>
    </div>
  </dialog>
</template>
