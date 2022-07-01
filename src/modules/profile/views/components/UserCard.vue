<template>
  <div class="w-full">
    <el-card
      class="border-0 text-center border-slate-100"
      :body-style="{ padding: '0px', position: 'relative' }"
    >
      <img alt="..." :src="backgroundImg" />
      <div class="justify-center p-1">
        <el-link :underline="false" class="card-avatar-profile hover:scale-105">
          <!-- Avatar -->
          <el-avatar
            :size="!isHover ? 134 : 134"
            @mouseover="hoverCheck(true)"
            @mouseleave="hoverCheck(false)"
            :src="avatarImg"
            class="transition-all"
          />
        </el-link>
      </div>
      <div class="text-center border-0 pb-6 card-header mt-[100px] md:mt-0 lg:mt-0">
        <div class="flex justify-between">
          <div class="ml-4 z-0">
            <el-button class="shadow-lg w-16" size="small" type="info">Connect</el-button>
          </div>
          <div class="mr-4 z-0">
            <el-button class="shadow-lg w-16" size="small" type="default">Message</el-button>
          </div>
        </div>
      </div>
      <div class="md:mt-8 lg:mt-8">
        <div class="flex justify-center gap-x-11">
          <div class="block">
            <div>
              <span class="text-[1.1rem] text-normal font-bold">{{ friends }}</span>
            </div>
            <div>
              <span class="text-sm text-[#adb5bd] mb-0">Friends</span>
            </div>
          </div>
          <div class="block">
            <div>
              <span class="text-[1.1rem] text-normal font-bold">{{ photos }}</span>
            </div>
            <div>
              <span class="text-sm text-[#adb5bd] mb-0">Photos</span>
            </div>
          </div>
          <div class="block">
            <div>
              <span class="text-[1.1rem] text-normal font-bold">{{ comments }}</span>
            </div>
            <div>
              <span class="text-sm text-[#adb5bd] mb-0">Comments</span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-8">
        <div class="text-center text-primary">
          <h3 class="text-[17px] mt-6 font-semibold pb-2">
            {{ name }}<span class="font-thin">, {{ age }}</span>
          </h3>
          <h5 class="font-light">{{ location }}</h5>
        </div>
        <div class="text-center text-primary">
          <h3 class="text-[13px] mt-6 font-semibold pb-2">
            {{ pos }}
          </h3>
          <h5 class="text-base text-dark-lighter font-normal">{{ degree }}</h5>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Location } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'UserCard',
  components: {
    Location,
  },
  props: {
    avatarImg: {
      type: String,
    },
    backgroundImg: {
      type: String,
    },
    friends: {
      type: Number,
      default: 0,
    },
    photos: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: '',
    },
    age: {
      type: Number,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    pos: {
      type: String,
      default: '',
    },
    degree: {
      type: String,
      default: '',
    },
  },
  setup() {
    const isHover = ref(false)
    const hoverCheck = (b: boolean) => {
      isHover.value = b
    }
    return {
      isHover,
      hoverCheck,
    }
  },
})
</script>

<style lang="scss" scoped>
:deep(.card-avatar-profile.el-link) .el-link--inner {
  @apply absolute border-[3px] border-[#fff] rounded-full;
}
</style>
