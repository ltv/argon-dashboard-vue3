<template>
  <div class="w-full">
    <el-card
      class="text-center border-slate-100 border-0"
      :body-style="{ padding: '0px', position: 'relative' }"
    >
      <img alt="..." :src="backgroundImg" />
      <div class="justify-center">
        <el-link :underline="false" class="card-avatar-profile">
          <el-avatar
            :size="!isHover ? 140 : 146"
            @mouseover="hoverCheck(true)"
            @mouseleave="hoverCheck(false)"
            :src="avatarImg"
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
              <span class="text-1.1 text-normal font-bold">{{ friends }}</span>
            </div>
            <div>
              <span class="text-sm text-gray-210 mb-0">Friends</span>
            </div>
          </div>
          <div class="block">
            <div>
              <span class="text-1.1 text-normal font-bold">{{ photos }}</span>
            </div>
            <div>
              <span class="text-sm text-gray-210 mb-0">Photos</span>
            </div>
          </div>
          <div class="block">
            <div>
              <span class="text-1.1 text-normal font-bold">{{ comments }}</span>
            </div>
            <div>
              <span class="text-sm text-gray-210 mb-0">Comments</span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-8">
        <div class="text-center text-primary-dark">
          <h3 class="font-semibold pb-2">
            {{ name }}<span class="font-thin">, {{ age }}</span>
          </h3>
          <h5 class="font-light">
            <el-icon :size="12">
              <Location />
            </el-icon>
            {{ location }}
          </h5>
        </div>
        <div class="text-center text-primary-dark">
          <h3 class="text-0.813 mt-6 font-semibold pb-2">
            {{ job }}
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
  name: 'ProfileCard',
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
    job: {
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
