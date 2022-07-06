<template>
  <div class="w-full block mx-auto h-auto lg:max-w-2/3">
    <!-- Heading section -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Headings</h3>
      </template>
      <div>
        <Heading />
      </div>
    </el-card>

    <!-- Display section -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Display titles</h3>
      </template>
      <div>
        <DisplayTitle />
      </div>
    </el-card>

    <!-- Specialized titles -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Specialized titles</h3>
      </template>
      <div>
        <SpecializedTitle />
      </div>
    </el-card>

    <!-- Paragraphs -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Paragraphs</h3>
      </template>
      <div>
        <Paragraphs />
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Heading from './components/Heading.vue'
import DisplayTitle from './components/DisplayTitle.vue'
import SpecializedTitle from './components/SpecializedTitle.vue'
import Paragraphs from './components/Paragraphs.vue'

export default defineComponent({
  components: {
    Heading,
    DisplayTitle,
    SpecializedTitle,
    Paragraphs,
  },
})
</script>
