<template>
  <div class="w-full mx-auto">
    <transition name="slide-up" appear>
      <div class="w-full" key="analysis">
        <AnalysisCard />
      </div>
    </transition>

    <transition name="slide-up" appear :style="{ transitionDelay: '0.1s' }">
      <div class="mt-6" key="charts">
        <div class="flex flex-wrap">
          <div class="lg:flex-8 lg:max-w-2/3 w-full lg:mb-0 lg:pr-3.5 mb-6">
            <GradientLineChart />
          </div>
          <div class="lg:flex-4 lg:max-w-1/3 w-full lg:pl-3.5">
            <TotalBarChart />
          </div>
        </div>
      </div>
    </transition>

    <transition name="slide-up" appear :style="{ transitionDelay: '0.2s' }">
      <div class="mt-6" key="tables">
        <div class="flex flex-wrap">
          <div class="lg:flex-8 lg:max-w-2/3 w-full lg:mb-0 lg:pr-3.5">
            <PageVisitTable />
          </div>
          <div class="lg:flex-4 lg:max-w-1/3 w-full lg:pl-3.5">
            <SocialTrafficTable />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AnalysisCard from 'modules/cards/views/components/AnalysisCard.vue'
// Chart
import GradientLineChart from './components/GradientLineChart.vue'
import TotalBarChart from './components/TotalBarChart.vue'
// Table
import PageVisitTable from './components/PageVisitTable.vue'
import SocialTrafficTable from './components/SocialTrafficTable.vue'

export default defineComponent({
  name: 'DashBoard',
  components: {
    AnalysisCard,
    GradientLineChart,
    TotalBarChart,
    PageVisitTable,
    SocialTrafficTable,
  },
  setup() {
    return {}
  },
})
</script>
