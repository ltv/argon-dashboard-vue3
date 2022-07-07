<template>
  <div class="w-full h-auto">
    <el-card>
      <template #header>
        <div class="flex flex-wrap items-center -mx-3.75">
          <div class="max-w-full basis-0 grow px-6">
            <h6 class="uppercase text-muted tracking-0.625 mb-1">{{ title }}</h6>
            <h2 class="mb-0">{{ subcription }}</h2>
          </div>
        </div>
      </template>
      <div class="card-body">
        <BarChart
          ref="totalChart"
          :chartData="totalData"
          :options="chartOptions"
          :height="350"
          class="h-83"
        />
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { BarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default defineComponent({
  name: 'TotalBarChart',
  components: {
    BarChart,
  },
  props: {
    title: {
      type: String,
      default: 'Performance',
    },
    subcription: {
      type: String,
      default: 'Total orders',
    },
  },
  setup() {
    const totalChart = ref()
    const totalData = computed(() => ({
      labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: ' Sales',
          fill: true,
          data: [25, 20, 30, 22, 17, 29],
          backgroundColor: 'rgb(251 99 64)',
          borderColor: 'rgb(251 99 64)',
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
          barThickness: 10,
        },
      ],
    }))

    const chartOptions = ref({
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: 'index',
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            color: '#0000000d',
            borderDash: [2, 2],
          },
          ticks: {
            display: true,
            padding: 10,
            color: 'rgb(136 152 170)',
            font: {
              size: 12,
              family: 'Open Sans',
              style: 'normal',
              lineHeight: 2,
            },
            callback: function (value: number) {
              if (!(value % 10)) {
                return value
              }
            },
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            zeroLineColor: 'transparent',
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            color: 'rgb(136 152 170)',
            padding: 20,
            font: {
              size: 12,
              family: 'Open Sans',
              style: 'normal',
              lineHeight: 2,
            },
          },
        },
      },
    })

    return {
      totalChart,
      totalData,
      chartOptions,
    }
  },
})
</script>
