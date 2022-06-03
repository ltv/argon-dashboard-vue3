<template>
  <div class="flex flex-col gap-2 mx-auto h-auto w-full lg:w-2/3">
    <!-- Grid system -->
    <div class="container h-auto mx-auto border border-slate-50 bg-white shadow-lg mt-5 rounded">
      <div class="font-semibold text-lg text-indigo-900 px-6 pt-4">Grid system</div>
      <el-divider />
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-7 mb-6 text-center items-center px-6 py-2">
        <div class="grid-items">One of three columns</div>
        <div class="grid-items">One of three columns</div>
        <div class="grid-items">One of three columns</div>
      </div>
    </div>

    <!-- Equal-width -->
    <div class="container h-auto mx-auto border border-slate-50 bg-white shadow-lg mt-5 rounded">
      <div class="font-semibold text-lg text-indigo-900 px-6 pt-4">Equal-width</div>
      <el-divider />
      <div class="grid grid-cols-6 gap-7 mb-6 text-center items-center px-6 py-2">
        <div class="grid-items col-span-3">1 of 2</div>
        <div class="grid-items col-span-3">2 of 2</div>

        <div class="grid-items col-span-2">1 of 3</div>
        <div class="grid-items col-span-2">2 of 3</div>
        <div class="grid-items col-span-2">3 of 3</div>
      </div>
    </div>

    <!-- Setting one column width -->
    <div class="container h-auto mx-auto border border-slate-50 bg-white shadow-lg mt-5 rounded">
      <div class="font-semibold text-lg text-indigo-900 px-6 pt-4">Setting one column width</div>
      <el-divider />
      <div class="flex gap-4 text-center px-6 py-2">
        <div class="grid-items flex-auto">1 of 3</div>
        <div class="grid-items flex-auto w-2/4">2 of 3 (wider)</div>
        <div class="grid-items flex-auto">3 of 3</div>
      </div>
      <div class="flex gap-4 mb-6 text-center px-6 py-2">
        <div class="grid-items flex-auto">1 of 3</div>
        <div class="grid-items flex-auto w-2/5">2 of 3 (wider)</div>
        <div class="grid-items flex-auto">3 of 3</div>
      </div>
    </div>

    <!-- Variable width content -->
    <div class="container h-auto mx-auto border border-slate-50 bg-white shadow-lg mt-5 rounded">
      <div class="font-semibold text-lg text-indigo-900 px-6 pt-4">Variable width content</div>
      <el-divider />
      <div class="grid grid-cols-1 md:grid-cols-12 gap-7 mb-6 text-center px-6 py-2">
        <div class="grid-items md:col-start-3 md:col-span-2">1 of 3</div>
        <div class="grid-items md:col-span-3">Variable width content</div>
        <div class="grid-items md:col-span-2">3 of 3</div>

        <div class="grid-items md:col-span-7">1 of 3</div>
        <div class="grid-items md:col-span-3">Variable width content</div>
        <div class="grid-items md:col-span-2">3 of 3</div>
      </div>
    </div>

    <!-- Equal-width multi-row -->
    <div class="container h-auto mx-auto border border-slate-50 bg-white shadow-lg mt-5 rounded">
      <div class="font-semibold text-lg text-indigo-900 px-6 pt-4">Equal-width multi-row</div>
      <el-divider />
      <div class="flex gap-4 text-center px-6 py-2">
        <div class="grid-items flex-auto">col</div>
        <div class="grid-items flex-auto">col</div>
      </div>
      <div class="flex gap-4 mb-6 text-center px-6 py-2">
        <div class="grid-items flex-auto">col</div>
        <div class="grid-items flex-auto">col</div>
      </div>
    </div>

    <!-- Mix and match -->
    <div class="container h-auto mx-auto border border-slate-50 bg-white shadow-lg mt-5 rounded">
      <div class="font-semibold text-lg text-indigo-900 px-6 pt-4">Mix and match</div>
      <el-divider />
      <div class="grid grid-cols-1 sm:grid-cols-12 gap-6 mb-6 text-center px-6 py-2">
        <div class="grid-items col-span-8">.col-6 .col-md-8</div>
        <div class="grid-items col-span-4">.col-6 .col-md-4</div>

        <div class="grid-items col-span-4">.col-6 .col-md-4</div>
        <div class="grid-items col-span-4">.col-6 .col-md-4</div>
        <div class="grid-items col-span-4">.col-6 .col-md-4</div>

        <div class="grid-items col-span-6">.col-6 .col-md-6</div>
        <div class="grid-items col-span-6">.col-6 .col-md-6</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Grid',
  setup(_) {
    return {}
  },
})
</script>

<style scoped>
.grid-items {
  @apply p-3 my-1 bg-white border border-slate-200 rounded drop-shadow-[0_4px_16px_rgba(0,0,0,0.10)] shadow-sm text-left text-sm font-normal;
}
</style>
