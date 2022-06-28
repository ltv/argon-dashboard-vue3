<template>
  <div class="absolute pointer-events-none overflow-hidden w-full top-auto bottom-0 inset-x-0">
    <svg
      x="0"
      y="0"
      viewBox="0 0 2560 100"
      preserveAspectRatio="none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SplitBackground',
})
</script>
