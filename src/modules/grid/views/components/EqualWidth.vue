<template>
  <div class="w-full">
    <div class="grid grid-cols-6 gap-7 text-center items-center my-3">
      <div class="grid-items col-span-3">1 of 2</div>
      <div class="grid-items col-span-3">2 of 2</div>

      <div class="grid-items col-span-2">1 of 3</div>
      <div class="grid-items col-span-2">2 of 3</div>
      <div class="grid-items col-span-2">3 of 3</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EqualWidth',
})
</script>

<style scoped>
.grid-items {
  @apply p-3 my-1 bg-white border-slate-200 rounded drop-shadow-[0_4px_16px_rgba(0,0,0,0.10)] shadow-[0_0_0_1px_rgb(0,0,0,0.10)] text-left text-sm text-gray-410 border-0 font-normal;
}
</style>
