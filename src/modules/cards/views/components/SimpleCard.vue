<template>
  <div class="w-full">
    <el-card class="border-white">
      <template #header>
        <h3>{{ title }}</h3>
      </template>
      <p class="break-normal text-slate-500 py-1 pb-2">
        <span>
          <slot name="content"></slot>
        </span>
      </p>
      <div class="pt-3">
        <el-button type="primary" class="py-5">Go somewhere</el-button>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SimpleCard',
  props: {
    title: {
      type: String,
      default: 'Card title',
    },
  },
})
</script>
