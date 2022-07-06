<template>
  <div class="w-full block mx-auto h-auto lg:max-w-2/3">
    <!-- Grid system -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Grid system</h3>
      </template>
      <div>
        <GridSystem />
      </div>
    </el-card>

    <!-- Equal-width -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Equal-width</h3>
      </template>
      <div>
        <EqualWidth />
      </div>
    </el-card>

    <!-- Setting one column width -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Setting one column width</h3>
      </template>
      <div class="my-3">
        <OneColumnWidth />
      </div>
    </el-card>

    <!-- Variable width content -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Variable width content</h3>
      </template>
      <div class="my-3">
        <VariableWidth />
      </div>
    </el-card>

    <!-- Equal-width multi-row -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Equal-width multi-row</h3>
      </template>
      <div class="my-3">
        <MultiRow />
      </div>
    </el-card>

    <!-- Mix and match -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Mix and match</h3>
      </template>
      <div>
        <Mix />
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import GridSystem from './components/GridSystem.vue'
import EqualWidth from './components/EqualWidth.vue'
import OneColumnWidth from './components/OneColumnWidth.vue'
import VariableWidth from './components/VariableWidth.vue'
import MultiRow from './components/MultiRow.vue'
import Mix from './components/Mix.vue'

export default defineComponent({
  components: {
    GridSystem,
    EqualWidth,
    OneColumnWidth,
    VariableWidth,
    MultiRow,
    Mix,
  },
  name: 'Grid',
  setup(_) {
    return {}
  },
})
</script>

<style scoped>
.grid-items {
  @apply p-3 my-1 bg-white border-slate-200 rounded drop-shadow-[0_4px_16px_rgba(0,0,0,0.10)] shadow-[0_0_0_1px_rgb(0,0,0,0.10)] text-left text-sm text-gray-410 border-0 font-normal;
}
</style>
