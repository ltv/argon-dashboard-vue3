<template>
  <div class="w-full">
    <div class="flex flex-wrap gap-3.25">
      <div>
        <el-button plain>Default</el-button>
      </div>
      <div>
        <el-button type="primary" plain>Primary</el-button>
      </div>
      <div>
        <el-button class="el-button--secondary" plain>Secondary</el-button>
      </div>
      <div>
        <el-button type="info" plain>Info</el-button>
      </div>
      <div>
        <el-button type="success" plain>Success</el-button>
      </div>
      <div>
        <el-button type="danger" plain>Danger</el-button>
      </div>
      <div>
        <el-button type="warning" plain>Warning</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OutlineButtons',
})
</script>
