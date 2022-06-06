<template>
  <div class="w-full block mx-auto h-auto lg:max-w-2/3">
    <!-- Grid system -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Grid system</h3>
      </template>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-7 text-center items-center">
        <div class="grid-items">One of three columns</div>
        <div class="grid-items">One of three columns</div>
        <div class="grid-items">One of three columns</div>
      </div>
    </el-card>

    <!-- Equal-width -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Equal-width</h3>
      </template>
      <div class="grid grid-cols-6 gap-7 text-center items-center">
        <div class="grid-items col-span-3">1 of 2</div>
        <div class="grid-items col-span-3">2 of 2</div>

        <div class="grid-items col-span-2">1 of 3</div>
        <div class="grid-items col-span-2">2 of 3</div>
        <div class="grid-items col-span-2">3 of 3</div>
      </div>
    </el-card>

    <!-- Setting one column width -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Setting one column width</h3>
      </template>
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
    </el-card>

    <!-- Variable width content -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Variable width content</h3>
      </template>
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
    </el-card>

    <!-- Equal-width multi-row -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Equal-width multi-row</h3>
      </template>
      <div class="flex gap-4 text-center mb-6">
        <div class="grid-items flex-auto">col</div>
        <div class="grid-items flex-auto">col</div>
      </div>
      <div class="flex gap-4 text-center">
        <div class="grid-items flex-auto">col</div>
        <div class="grid-items flex-auto">col</div>
      </div>
    </el-card>

    <!-- Grid system -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Grid system</h3>
      </template>
      <div class="grid grid-cols-1 sm:grid-cols-12 gap-6 text-center">
        <div class="grid-items col-span-8">.col-6 .col-md-8</div>
        <div class="grid-items col-span-4">.col-6 .col-md-4</div>

        <div class="grid-items col-span-4">.col-6 .col-md-4</div>
        <div class="grid-items col-span-4">.col-6 .col-md-4</div>
        <div class="grid-items col-span-4">.col-6 .col-md-4</div>

        <div class="grid-items col-span-6">.col-6 .col-md-6</div>
        <div class="grid-items col-span-6">.col-6 .col-md-6</div>
      </div>
    </el-card>
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
  @apply p-3 my-1 bg-[#fff] border border-slate-200 rounded drop-shadow-[0_4px_16px_rgba(0,0,0,0.10)] shadow-[0_0_0_1px_rgb(0,0,0,0.10)] text-left text-sm text-[#393f49] border-0 font-normal;
}
</style>
