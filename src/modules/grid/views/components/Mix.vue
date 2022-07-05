<template>
  <div class="w-full">
    <div class="grid grid-cols-1 sm:grid-cols-12 gap-6 text-center my-3">
      <div class="grid-items col-span-8">.col-6 .col-md-8</div>
      <div class="grid-items col-span-4">.col-6 .col-md-4</div>

      <div class="grid-items col-span-4">.col-6 .col-md-4</div>
      <div class="grid-items col-span-4">.col-6 .col-md-4</div>
      <div class="grid-items col-span-4">.col-6 .col-md-4</div>

      <div class="grid-items col-span-6">.col-6 .col-md-6</div>
      <div class="grid-items col-span-6">.col-6 .col-md-6</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Mix',
})
</script>

<style scoped>
.grid-items {
  @apply p-3 my-1 bg-white border-slate-200 rounded drop-shadow-[0_4px_16px_rgba(0,0,0,0.10)] shadow-[0_0_0_1px_rgb(0,0,0,0.10)] text-left text-sm text-gray-410 border-0 font-normal;
}
</style>
