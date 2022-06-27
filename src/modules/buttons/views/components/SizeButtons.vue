<template>
  <div class="w-full">
    <div class="flex flex-wrap gap-3 pb-7 border-b border-slate-200/90">
      <div>
        <el-button type="primary" size="large">Large button</el-button>
      </div>
      <div>
        <el-button size="large" class="el-button--secondary">Large button</el-button>
      </div>
    </div>
    <div class="flex flex-wrap gap-3 py-9 border-b border-slate-200/90">
      <div>
        <el-button type="primary" size="small">Small button</el-button>
      </div>
      <div>
        <el-button size="small" class="el-button--secondary">Small button</el-button>
      </div>
    </div>
    <div class="grid grid-flow-row gap-2 pt-6">
      <div>
        <el-button class="w-full" type="primary" size="large">Block level button</el-button>
      </div>
      <div>
        <el-button class="el-button--secondary w-full" size="large">Block level button</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SizeButtons',
})
</script>
