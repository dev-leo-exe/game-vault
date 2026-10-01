<template>
  <section class="relative h-60 overflow-hidden border-b border-line-strong bg-linear-to-b from-sky-top via-sky-mid via-48% to-sky-bottom">
    <div class="absolute inset-x-0 -bottom-px">
      <slot name="art" />
    </div>
    <div class="absolute top-14 right-4">
      <slot name="seal" />
    </div>
  </section>
</template>
