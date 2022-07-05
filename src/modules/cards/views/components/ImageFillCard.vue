<template>
  <div class="w-full">
    <el-card :body-style="{ padding: '0px', position: 'relative' }">
      <img alt="..." :src="imgSrc" />
      <div class="absolute text-white p-3 inset-y-0 left-0 flex items-center justify-center">
        <div>
          <div class="py-3">
            <span class="text-xl font-semibold"> {{ title }}</span>
          </div>
          <div class="py-px">
            <span class="break-normal font-light"><slot name="content"></slot></span>
          </div>
          <div class="py-3">
            <span class="font-semibold">Last updated {{ updateTime }} mins ago</span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ImageFillCard',
  props: {
    imgSrc: {
      type: String,
    },
    title: {
      type: String,
      default: 'Card title',
    },
    updateTime: {
      type: Number,
      default: 0,
    },
  },
})
</script>
