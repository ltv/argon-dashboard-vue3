<template>
  <div class="w-full">
    <div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OneColumnWidth',
})
</script>

<style scoped>
.grid-items {
  @apply p-3 my-1 bg-[#fff] border border-slate-200 rounded drop-shadow-[0_4px_16px_rgba(0,0,0,0.10)] shadow-[0_0_0_1px_rgb(0,0,0,0.10)] text-left text-sm text-[#393f49] border-0 font-normal;
}
</style>
