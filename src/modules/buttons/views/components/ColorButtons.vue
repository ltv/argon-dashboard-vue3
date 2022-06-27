<template>
  <div class="w-full">
    <div class="flex flex-wrap gap-3.25">
      <div>
        <el-button class="btn-default">Default</el-button>
      </div>
      <div>
        <el-button type="primary" class="">Primary</el-button>
      </div>
      <div>
        <el-button class="el-button--secondary">Secondary</el-button>
      </div>
      <div>
        <el-button type="info" class="">Info</el-button>
      </div>
      <div>
        <el-button type="success" class="">Success</el-button>
      </div>

      <div>
        <el-button type="danger" class="">Danger</el-button>
      </div>
      <div>
        <el-button type="warning" class="">Warning</el-button>
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
