<template>
  <div class="w-full block mx-auto h-auto lg:max-w-1/2">
    <div class="flex flex-wrap gap-3.25">
      <el-card class="mb-7.5 border-none">
        <template #header>
          <h3 class="cursor-auto mb-0 text-primary-dark">Tags</h3>
        </template>
        <p>dark</p>
        <div class="mb-5">
          <el-tag class="mr-4" effect="dark" type="warning">warning</el-tag>
          <el-tag class="mr-4" effect="dark" type="success">success</el-tag>
          <el-tag class="mr-4" effect="dark" type="danger">danger</el-tag>
          <el-tag class="mr-4" effect="dark" type="info">info</el-tag>
          <el-tag class="mr-4" effect="dark">primary</el-tag>
        </div>
        <p>light</p>
        <div class="mb-5">
          <el-tag class="mr-4" type="warning">warning</el-tag>
          <el-tag class="mr-4" type="success">success</el-tag>
          <el-tag class="mr-4" type="danger">danger</el-tag>
          <el-tag class="mr-4" type="info">info</el-tag>
          <el-tag class="mr-4">primary</el-tag>
        </div>
        <p>plain</p>
        <div class="mb-5">
          <el-tag class="mr-4" effect="plain" type="warning">warning</el-tag>
          <el-tag class="mr-4" effect="plain" type="success">success</el-tag>
          <el-tag class="mr-4" effect="plain" type="danger">danger</el-tag>
          <el-tag class="mr-4" effect="plain" type="info">info</el-tag>
          <el-tag class="mr-4" effect="plain">primary</el-tag>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'ColorTags',
})
</script>
