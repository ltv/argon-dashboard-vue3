<template>
  <div class="w-full">
    <div class="grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-3 gap-7">
      <div class="col-span-3">
        <el-card
          class="border-white"
          :body-style="{ 'padding-top': '16px', 'padding-bottom': '16px' }"
        >
          <div class="flex flex-wrap">
            <div class="basis-0 grow">
              <div class="card-header">
                <h5 class="font-semibold text-0.8125 text-muted mb-0">TOTAL TRAFFIC</h5>
              </div>
              <h2 class="text-xl textindigo-210 font-semibold mb-0 leading-7.5">350,897</h2>
            </div>
            <div
              class="w-12 h-12 text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#f5365c] to-[#f56036]"
            >
              <font-awesome-icon :icon="['fas', 'hand-point-up']" size="lg" />
            </div>
          </div>
          <p class="mt-4 mb-0 text-sm">
            <span class="text-success mr-2 inline">
              <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
              3.48%
            </span>
            <span class="whitespace-nowrap text-normal">Since last month</span>
          </p>
        </el-card>
      </div>
      <div class="col-span-3">
        <el-card
          class="border-white"
          :body-style="{ 'padding-top': '16px', 'padding-bottom': '16px' }"
        >
          <div class="flex flex-wrap">
            <div class="basis-0 grow">
              <div class="card-header">
                <h5 class="font-semibold text-0.8125 text-muted mb-0">NEW USERS</h5>
              </div>
              <h2 class="text-xl textindigo-210 font-semibold mb-0 leading-7.5">2,356</h2>
            </div>
            <div
              class="w-12 h-12 text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#fb6340] to-[#fbb140]"
            >
              <font-awesome-icon :icon="['fas', 'chart-pie']" size="lg" />
            </div>
          </div>
          <p class="mt-4 mb-0 text-sm">
            <span class="text-success mr-2 inline">
              <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
              3.48%
            </span>
            <span class="whitespace-nowrap text-normal">Since last month</span>
          </p>
        </el-card>
      </div>
      <div class="col-span-3">
        <el-card
          class="border-white"
          :body-style="{ 'padding-top': '16px', 'padding-bottom': '16px' }"
        >
          <div class="flex flex-wrap">
            <div class="basis-0 grow">
              <div class="card-header">
                <h5 class="font-semibold text-0.8125 text-muted mb-0">SALES</h5>
              </div>
              <h2 class="text-xl textindigo-210 font-semibold mb-0 leading-7.5">924</h2>
            </div>

            <div
              class="w-12 h-12 text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#2dce89] to-[#2dcecc]"
            >
              <font-awesome-icon :icon="['fas', 'coins']" size="lg" />
            </div>
          </div>
          <p class="mt-4 mb-0 text-sm">
            <span class="text-success mr-2 inline">
              <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
              3.48%
            </span>
            <span class="whitespace-nowrap text-normal">Since last month</span>
          </p>
        </el-card>
      </div>
      <div class="col-span-3">
        <el-card
          class="border-white"
          :body-style="{ 'padding-top': '16px', 'padding-bottom': '16px' }"
        >
          <div class="flex flex-wrap">
            <div class="basis-0 grow">
              <div class="card-header">
                <h5 class="font-semibold text-0.8125 text-muted mb-0">PERFORMANCE</h5>
              </div>
              <h2 class="text-xl textindigo-210 font-semibold mb-0 leading-7.5">49,65%</h2>
            </div>
            <div
              class="w-12 h-12 text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#11cdef] to-[#1171ef]"
            >
              <font-awesome-icon :icon="['fas', 'chart-simple']" size="lg" />
            </div>
          </div>
          <p class="mt-4 mb-0 text-sm">
            <span class="text-success mr-2 inline">
              <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
              3.48%
            </span>
            <span class="whitespace-nowrap text-normal">Since last month</span>
          </p>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowUpIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'AnalysisCard',
  components: {
    ArrowUpIcon,
  },
  setup() {
    return {}
  },
})
</script>
