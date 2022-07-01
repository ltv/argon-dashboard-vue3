<template>
  <div class="w-full">
    <div class="flex gap-4 text-center mb-6">
      <div class="grid-items flex-auto">1 of 3</div>
      <div class="grid-items flex-auto w-2/4">2 of 3 (wider)</div>
      <div class="grid-items flex-auto">3 of 3</div>
    </div>
    <div class="flex gap-4 text-center">
      <div class="grid-items flex-auto">1 of 3</div>
      <div class="grid-items flex-auto w-2/5">2 of 3 (wider)</div>
      <div class="grid-items flex-auto">3 of 3</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OneColumnWidth',
})
</script>
