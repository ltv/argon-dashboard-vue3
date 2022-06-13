<template>
  <div class="w-full mx-auto">
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
                <h2 class="text-xl text-[#32325d] font-semibold mb-0 leading-7.5">350,897</h2>
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
                <h2 class="text-xl text-[#32325d] font-semibold mb-0 leading-7.5">2,356</h2>
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
                <h2 class="text-xl text-[#32325d] font-semibold mb-0 leading-7.5">924</h2>
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
                <h2 class="text-xl text-[#32325d] font-semibold mb-0 leading-7.5">49,65%</h2>
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

    <div class="mt-6">
      <div class="flex flex-wrap">
        <div class="flex-8 max-w-2/3 lg:mb-0 mb-12 pr-3.5">
          <el-card class="bg-default">
            <template #header>
              <div class="flex flex-wrap items-center">
                <div class="max-w-full basis-0 grow">
                  <h6 class="uppercase text-light tracking-0.625 mb-1">Overview</h6>
                  <h2 class="text-white mb-0">Sales value</h2>
                </div>
                <div class="max-w-full basis-0 grow">
                  <div class="flex flex-wrap mb-0 pl-0 justify-end gap-x-3">
                    <div>
                      <el-button type="primary" class="py-2 px-3 w-20 h-9">
                        <span class="hidden md:block">Month</span>
                        <span class="md:hidden">M</span>
                      </el-button>
                    </div>
                    <div>
                      <el-button class="el-button--secondary py-2 px-3 w-20 h-9" size="small">
                        <span class="hidden md:block text-primary-blue">Month</span>
                        <span class="md:hidden text-primary-blue">M</span>
                      </el-button>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <div class="card-body">
              <div class="chart">
                <canvas id="chart-line" class="chart-canvas" height="300"></canvas>
              </div>
            </div>
          </el-card>
        </div>
        <div class="flex-4 max-w-1/3 pl-3.5">
          <el-card>
            <template #header>
              <div class="flex flex-wrap items-center -mx-3.75">
                <div class="max-w-full basis-0 grow">
                  <h6 class="uppercase text-muted tracking-0.625 mb-1">Performance</h6>
                  <h2 class="mb-0">Total orders</h2>
                </div>
              </div>
            </template>
            <div class="card-body">
              <!-- <div class="chart">
                <div
                  class="chartjs-size-monitor"
                  style="
                    position: absolute;
                    inset: 0px;
                    overflow: hidden;
                    pointer-events: none;
                    visibility: hidden;
                    z-index: -1;
                  "
                >
                  <div
                    class="chartjs-size-monitor-expand"
                    style="
                      position: absolute;
                      left: 0;
                      top: 0;
                      right: 0;
                      bottom: 0;
                      overflow: hidden;
                      pointer-events: none;
                      visibility: hidden;
                      z-index: -1;
                    "
                  >
                    <div
                      style="
                        position: absolute;
                        width: 1000000px;
                        height: 1000000px;
                        left: 0;
                        top: 0;
                      "
                    ></div>
                  </div>
                  <div
                    class="chartjs-size-monitor-shrink"
                    style="
                      position: absolute;
                      left: 0;
                      top: 0;
                      right: 0;
                      bottom: 0;
                      overflow: hidden;
                      pointer-events: none;
                      visibility: hidden;
                      z-index: -1;
                    "
                  >
                    <div
                      style="position: absolute; width: 200%; height: 200%; left: 0; top: 0"
                    ></div>
                  </div>
                </div>
                <canvas
                  id="chart-orders"
                  class="chart-canvas chartjs-render-monitor"
                  width="120"
                  height="175"
                  style="display: block; width: 241px; height: 350px"
                ></canvas>
              </div> -->
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
