<template>
  <div class="w-full mx-auto lg:w-[70.25%] xl:w-[65.95%]">
    <div class="container mx-auto">
      <el-card class="border-slate-100" :body-style="{ padding: '0px' }">
        <div class="card-header px-6 py-5">
          <h3>Icons</h3>
        </div>
        <p class="break-normal text-slate-500 px-4"></p>
        <div class="p-6">
          <div
            class="grid grid-cols-1 grid-flow-row md:grid-cols-2 md:gap-x-7 lg:grid-cols-2 lg:gap-x-7 lg:gap-y-2 xl:grid-cols-4 xl:gap-x-7 xl:gap-y-0.5"
          >
            <div class="block" v-for="(icon, key) in icons" :key="key">
              <el-button>
                <el-icon>
                  <component :is="icon.icon" />
                </el-icon>
                <span>{{ icon.name }}</span>
              </el-button>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as Icons from '@heroicons/vue/solid'
export default defineComponent({
  setup() {
    const icons = Object.keys(Icons).map((value: string) => ({
      name: value,
      icon: Icons[value as keyof typeof Icons],
    }))

    return {
      icons,
    }
  },
})
</script>

<style lang="scss" scoped>
body {
  .el-button {
    @apply bg-blue-60
    py-9 
    px-6
    flex 
    w-full 
    text-primary-dark 
    text-base 
    font-normal 
    leading-5 
    rounded-md 
    border-transparent
    text-left 
    items-center 
    align-middle 
    no-underline 
    my-2 
    hover:border-transparent 
    focus:outline
    focus:outline-2
    focus:outline-webkit 
    shadow-none
    drop-shadow-none
    translate-x-0
    translate-y-0
    hover:border-opacity-95
    hover:bg-white 
    hover:text-primary-dark
    hover:shadow-medium
    hover:drop-shadow
    #{!important};
  }
  .el-button > ::v-deep(span) {
    @apply w-full;
  }
  .el-button [class*='el-icon'] + span {
    @apply w-full inline-block text-sm text-left font-normal leading-6 overflow-hidden text-ellipsis whitespace-nowrap;
  }
  .el-button .el-icon {
    @apply text-2xl text-indigo-410 inline-block -ml-2 mr-0.5 #{!important};
  }
  .card-typography {
    @apply bg-white break-words mt-2 mb-7 shadow rounded-lg flex flex-col;
  }
  .card-header {
    @apply p-5 border-b border-primary-white;
  }
  .row {
    @apply my-8 w-full h-auto;
  }
  .title {
    @apply uppercase text-80 font-semibold text-muted;
  }
  .medium {
    @apply flex flex-col md:flex-row md:justify-center md:items-center;
  }
}
</style>
