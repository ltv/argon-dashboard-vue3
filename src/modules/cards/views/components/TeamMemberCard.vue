<template>
  <div class="w-full">
    <el-card class="text-center border-white">
      <el-link :underline="false">
        <el-avatar :size="140" :src="imgSrc" />
      </el-link>
      <div class="pt-4">
        <h4 class="mb-0 py-2">
          <span class="text-17 font-semibold text-primary-dark">{{ name }}</span>
        </h4>
        <h4 class="text-15 text-muted font-light mb-0">{{ description }}</h4>
      </div>
      <div class="flex flex-wrap items-center justify-center pt-4 gap-3">
        <div>
          <el-button
            circle
            class="w-9.85 h-9.85 bg-[#1da1f2] border-[#1da1f2] active:bg-[#33aaf3] active:border-[#33aaf3] text-white"
          >
            <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
          </el-button>
        </div>
        <div>
          <el-button
            circle
            class="w-9.85 h-9.85 bg-[#3b5999] border-[#3b5999] active:bg-[#2d4474] active:border-[#2d4474] text-white"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
          </el-button>
        </div>

        <div>
          <el-button
            circle
            class="w-9.85 h-9.85 bg-[#ea4c89] border-[#ea4c89] active:bg-[#ec5d94] active:border-[#ec5d94] text-white"
          >
            <font-awesome-icon :icon="['fab', 'dribbble']" size="lg" />
          </el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Location } from '@element-plus/icons-vue'
export default defineComponent({
  name: 'TeamMemberCard',
  components: {
    Location,
  },
  props: {
    imgSrc: {
      type: String,
    },
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {}
  },
})
</script>
