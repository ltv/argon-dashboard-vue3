<template>
  <div class="w-full mx-auto">
    <div class="w-full">
      <AnalysisCard />
    </div>

    <div class="mt-6">
      <div class="flex flex-wrap">
        <div class="lg:flex-8 lg:max-w-2/3 w-full lg:mb-0 lg:pr-3.5 mb-6">
          <GradientLineChart />
        </div>
        <div class="lg:flex-4 lg:max-w-1/3 w-full lg:pl-3.5">
          <el-card>
            <template #header>
              <div class="flex flex-wrap items-center -mx-3.75">
                <div class="max-w-full basis-0 grow">
                  <h6 class="uppercase text-muted tracking-0.625 mb-1">Performance</h6>
                  <h2 class="mb-0">Total orders</h2>
                </div>
              </div>
            </template>
            <div class="card-body">NewComponent</div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AnalysisCard from './AnalysisCard.vue'
import GradientLineChart from './GradientLineChart.vue'
export default defineComponent({
  name: 'DashBoard',
  components: {
    AnalysisCard,
    GradientLineChart,
  },
  setup() {
    return {}
  },
})
</script>
