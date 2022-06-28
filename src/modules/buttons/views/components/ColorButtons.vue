<template>
  <div class="w-full">
    <div class="flex flex-wrap gap-3.25">
      <div>
        <el-button class="btn-default">Default</el-button>
      </div>
      <div>
        <el-button type="primary">Primary</el-button>
      </div>
      <div>
        <el-button class="el-button--secondary">Secondary</el-button>
      </div>
      <div>
        <el-button type="info">Info</el-button>
      </div>
      <div>
        <el-button type="success">Success</el-button>
      </div>
      <div>
        <el-button type="danger">Danger</el-button>
      </div>
      <div>
        <el-button type="warning">Warning</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ColorButtons',
})
</script>
