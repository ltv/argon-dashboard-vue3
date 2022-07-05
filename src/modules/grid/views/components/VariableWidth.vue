<template>
  <div class="w-full">
    <div class="flex gap-4 justify-center mb-6">
      <div class="grid-items flex-auto md:flex-initial">1 of 3</div>
      <div class="grid-items">Variable width content</div>
      <div class="grid-items flex-auto md:flex-initial">3 of 3</div>
    </div>
    <div class="flex gap-4 justify-center">
      <div class="grid-items flex-auto md:w-[60%] md:flex-initial">1 of 3</div>
      <div class="grid-items">Variable width content</div>
      <div class="grid-items flex-auto md:w-[15%] md:flex-initial">3 of 3</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VariableWidth',
})
</script>

<style scoped>
.grid-items {
  @apply p-3 my-1 bg-white border-slate-200 rounded drop-shadow-[0_4px_16px_rgba(0,0,0,0.10)] shadow-[0_0_0_1px_rgb(0,0,0,0.10)] text-left text-sm text-gray-410 border-0 font-normal;
}
</style>
