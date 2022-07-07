<template>
  <div class="w-full">
    <el-card class="border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Progress track</h3>
      </template>
      <div class="flex flex-col -my-4">
        <div class="flex gap-7 progress items-center">
          <el-link
            :underline="false"
            class="card-avatar-profile block flex-none h-12 w-12 overflow-hidden border-[0.2px] rounded-full"
          >
            <el-avatar
              :size="!isHover ? 48 : 48"
              @mouseover="hoverCheck(true)"
              @mouseleave="hoverCheck(false)"
              :src="bootstrapLogo"
              class="transition-all border-white border-0"
            />
          </el-link>

          <div class="flex-auto">
            <h5 class="mb-2">Argon Design System</h5>
            <el-progress :percentage="59" :show-text="false" :color="customColors" />
          </div>
        </div>
        <div class="flex gap-7 progress items-center">
          <el-link
            :underline="false"
            class="card-avatar-profile block flex-none h-12 w-12 overflow-hidden border-[0.2px] rounded-full"
          >
            <el-avatar
              :size="!isHover ? 48 : 48"
              @mouseover="hoverCheck(true)"
              @mouseleave="hoverCheck(false)"
              :src="angularLogo"
              class="transition-all border-white border-0"
            />
          </el-link>

          <div class="flex-auto">
            <h5 class="mb-2">Angular Now UI Kit PRO</h5>
            <el-progress :percentage="100" :show-text="false" :color="customColors" />
          </div>
        </div>
        <div class="flex gap-7 progress items-center">
          <el-link
            :underline="false"
            class="card-avatar-profile block flex-none h-12 w-12 overflow-hidden border-[0.2px] rounded-full"
          >
            <el-avatar
              :size="!isHover ? 48 : 48"
              @mouseover="hoverCheck(true)"
              @mouseleave="hoverCheck(false)"
              :src="sketchLogo"
              class="transition-all border-white border-0"
            />
          </el-link>

          <div class="flex-auto">
            <h5 class="mb-2">Black Dashboard</h5>
            <el-progress :percentage="70" :show-text="false" :color="customColors" />
          </div>
        </div>
        <div class="flex gap-7 progress items-center">
          <el-link
            :underline="false"
            class="card-avatar-profile block flex-none h-12 w-12 overflow-hidden border-[0.2px] rounded-full"
          >
            <el-avatar
              :size="!isHover ? 48 : 48"
              @mouseover="hoverCheck(true)"
              @mouseleave="hoverCheck(false)"
              :src="reactLogo"
              class="transition-all border-white border-0"
            />
          </el-link>

          <div class="flex-auto">
            <h5 class="mb-2">React Material Dashboard</h5>
            <el-progress :percentage="82" :show-text="false" :color="customColors" />
          </div>
        </div>
        <div class="flex gap-7 progress items-center">
          <el-link
            :underline="false"
            class="card-avatar-profile block flex-none h-12 w-12 overflow-hidden border-[0.2px] rounded-full"
          >
            <el-avatar
              :size="!isHover ? 48 : 48"
              @mouseover="hoverCheck(true)"
              @mouseleave="hoverCheck(false)"
              :src="vueLogo"
              class="transition-all border-white border-0"
            />
          </el-link>

          <div class="flex-auto">
            <h5 class="mb-2">Vue Paper UI Kit PRO</h5>
            <el-progress :percentage="100" :show-text="false" :color="customColors" />
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import reactLogo from '@/assets/images/react.jpg'
import sketchLogo from '@/assets/images/sketch.jpg'
import bootstrapLogo from '@/assets/images/bootstrap.jpg'
import vueLogo from '@/assets/images/vue.jpg'
import angularLogo from '@/assets/images/angular.jpg'

export default defineComponent({
  name: 'ProgressTrack',
  setup(_) {
    const isHover = ref(false)
    const hoverCheck = (b: boolean) => {
      isHover.value = b
    }

    const customColors = [
      { color: '#fb6340', percentage: 60 },
      { color: '#f5365c', percentage: 80 },
      { color: '#11cdef', percentage: 85 },
      { color: '#2dce89', percentage: 100 },
    ]

    return {
      customColors,
      bootstrapLogo,
      reactLogo,
      sketchLogo,
      vueLogo,
      angularLogo,
      isHover,
      hoverCheck,
    }
  },
})
</script>

<style lang="scss" scoped>
::v-deep(.progress) .el-link--inner {
  @apply border-0 #{!important};
}

.el-card__body .progress {
  @apply border-b py-5 border-b-light-10 #{!important};
}
.el-card__body .progress:last-child {
  @apply border-0 border-b-light-10 #{!important};
}
</style>
