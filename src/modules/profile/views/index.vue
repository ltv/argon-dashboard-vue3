<template>
  <div class="w-full grid grid-cols-3 gap-7">
    <div class="col-span-2 col-left">
      <div class="grid grid-cols-6 gap-7">
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
      <div class="mt-7">
        <el-card class="items-center border-white">
          <template #header>
            <div class="flex justify-between py-2">
              <h3>Edit Profile</h3>
              <el-button class="el-button--secondary text-sky-700" size="small">Settings</el-button>
            </div>
          </template>
          <p class="break-normal text-slate-500 py-2">
            <span> Form right here. </span>
          </p>
          <div class="pt-3">
            <el-button type="primary" class="py-5">Save</el-button>
          </div>
        </el-card>
      </div>
    </div>
    <div class="col-right">
      <div class="grid grid-flow-row grid-cols-6 gap-7">
        <div class="col-span-6">
          <el-card
            class="text-center border-slate-100"
            :body-style="{ padding: '0px', position: 'relative' }"
          >
            <img alt="..." src="@/assets/images/throne.jpg" />
            <div class="justify-center">
              <el-link :underline="false" class="card-avatar-profile">
                <el-avatar
                  :size="!isHover ? 140 : 146"
                  @mouseover="hoverCheck(true)"
                  @mouseleave="hoverCheck(false)"
                  src="@/assets/images/tywin_lannister.jpg"
                  class="transition-all border-white border-4"
                />
              </el-link>
            </div>
            <div class="text-center border-0 pb-6 card-header">
              <div class="flex justify-between">
                <div class="ml-4 z-0">
                  <el-button class="shadow-lg w-16" size="small" type="info">Connect</el-button>
                </div>
                <div class="mr-4 z-0">
                  <el-button class="shadow-lg w-16" size="small" type="default">Message</el-button>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <div class="flex justify-center gap-x-11">
                <div class="block">
                  <div>
                    <span class="text-[1.1rem] text-normal font-bold">22</span>
                  </div>
                  <div>
                    <span class="text-sm text-[#adb5bd] mb-0">Friends</span>
                  </div>
                </div>
                <div class="block">
                  <div>
                    <span class="text-[1.1rem] text-normal font-bold">10</span>
                  </div>
                  <div>
                    <span class="text-sm text-[#adb5bd] mb-0">Photos</span>
                  </div>
                </div>
                <div class="block">
                  <div>
                    <span class="text-[1.1rem] text-normal font-bold">89</span>
                  </div>
                  <div>
                    <span class="text-sm text-[#adb5bd] mb-0">Comments</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-8">
              <div class="text-center text-card-title">
                <h3 class="font-semibold pb-2">Admin<span class="font-thin">, 27</span></h3>
                <h5 class="font-light">Bucharest, Romania</h5>
              </div>
              <div class="text-center text-card-title">
                <h3 class="font-semibold pb-2">
                  Solution Manager - Creative Tim Officer<span class="font-thin">, 27</span>
                </h3>
                <h5 class="font-light">University of Computer Science</h5>
              </div>
            </div>
          </el-card>
        </div>
        <div class="col-span-6">
          <el-card class="mb-7.5 border-none">
            <template #header>
              <h3 class="cursor-auto mb-0 text-card-title">Progress track</h3>
            </template>
            <div class="demo-progress">
              <el-progress :percentage="50" />
              <el-progress :percentage="10" />
              <el-progress :percentage="30" />
              <el-progress :percentage="40" />
              <el-progress :percentage="50" />
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
