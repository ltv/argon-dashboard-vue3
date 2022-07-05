<template>
  <div class="w-full">
    <el-card class="" :body-style="{ padding: '0px' }">
      <div class="text-white p-6 bg-gradient-to-r from-default to-dark-100">
        <div class="mb-4">
          <h3 class="text-17 font-semimedium text-white">{{ title }}</h3>
        </div>
        <div class="py-px">
          <span class="break-normal font-light"><slot name="content"></slot></span>
        </div>
        <div class="pt-3">
          <span class="font-light text-base text-danger"
            ><MinusIcon class="inline h-4 w-4" aria-hidden="true" /> Someone famous in
            <span class="italic"> {{ source }}</span></span
          >
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { MinusIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'ImageFillCard',
  props: {
    title: {
      type: String,
      default: 'Testimonial',
    },
    source: {
      type: String,
      default: 'Source Title',
    },
  },
  components: {
    MinusIcon,
  },
})
</script>
