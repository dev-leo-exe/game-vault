<script setup lang="ts">
const clouds = [
  { y: 52, scale: 1.5, seconds: 140, delay: -20 },
  { y: 86, scale: 1, seconds: 110, delay: -70 },
  { y: 118, scale: 1.25, seconds: 170, delay: -120 },
  { y: 30, scale: 0.8, seconds: 200, delay: -160 },
]
</script>

<template>
  <div
    class="grain overflow-hidden bg-linear-to-b from-sky-top via-sky-mid via-48% to-sky-bottom motion-reduce:[&_*]:animate-none"
    aria-hidden="true"
  >
    <svg class="absolute inset-0 size-full" viewBox="0 0 200 300" preserveAspectRatio="xMidYMax slice">
      <g class="origin-center animate-breathe [transform-box:fill-box]">
        <circle class="fill-sun-glow" cx="140" cy="150" r="32" opacity="0.4" />
        <circle class="fill-sun-glow" cx="140" cy="150" r="24" opacity="0.6" />
      </g>
      <circle class="fill-sun" cx="140" cy="150" r="16" />

      <g
        v-for="(cloud, index) in clouds"
        :key="index"
        class="animate-drift"
        :style="{ animationDuration: `${cloud.seconds}s`, animationDelay: `${cloud.delay}s` }"
      >
        <MotifCloud :y="cloud.y" :scale="cloud.scale" :flip="index % 2 === 1" />
      </g>

      <path class="fill-mist" transform="translate(-10 136) scale(1.2 0.55)" d="M0 80V58l26-12 20 6 30-20 24 12 26-8 30 14 22-6 22 8v28z" />
      <rect class="fill-sea-far" x="-20" y="168" width="240" height="140" />
      <rect
        v-for="i in 3"
        :key="i"
        class="animate-glint fill-sun-glow"
        :x="118 + i * 6"
        :y="168 + i * 4"
        :width="44 - i * 12"
        height="1.6"
        rx="0.8"
        :style="{ animationDelay: `${(i - 1) * 1.2}s` }"
      />
      <g transform="translate(0 212)">
        <MotifWavePaths class="animate-swell [&_.foam]:animate-glint" />
      </g>
      <rect class="fill-primary-deep dark:fill-team-a-soft" x="-20" y="288" width="240" height="20" />
    </svg>
  </div>
</template>
