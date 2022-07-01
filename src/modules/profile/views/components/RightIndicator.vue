<template>
  <div class="w-full">
    <el-card class="border-white indicator bg-gradient-to-r from-danger to-red-light border-0">
      <div class="flex flex-wrap">
        <div class="basis-0 grow">
          <div class="card-header">
            <h5 class="font-semibold text-0.8125 text-white mb-0">PERFORMANCE</h5>
          </div>
          <h2 class="text-xl text-white font-semibold mb-0 leading-7.5">49,65%</h2>
        </div>
        <div
          class="w-12 h-12 text-center inline-flex items-center justify-center rounded-full text-black bg-white"
        >
          <font-awesome-icon :icon="['fas', 'chart-simple']" size="lg" />
        </div>
      </div>
      <p class="mt-4 mb-0 text-sm">
        <span class="text-white mr-2 inline">
          <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
          3.48%
        </span>
        <span class="whitespace-nowrap text-light">Since last month</span>
      </p>
    </el-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ArrowUpIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'RightIndicator',
  components: {
    ArrowUpIcon,
  },
})
</script>
