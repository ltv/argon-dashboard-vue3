<template>
  <div class="w-full">
    <el-card class="border-white">
      <div class="flex flex-wrap">
        <div class="pt-1">
          <el-link :underline="false">
            <el-avatar :size="70" :src="imgSrc" />
          </el-link>
        </div>
        <div class="py-2 ml-4 flex-grow">
          <h4 class="mb-0">
            <el-link
              :underline="false"
              href="#index"
              class="text-15 text-primary-dark font-semibold hover:text-primary"
              >{{ name }}</el-link
            >
          </h4>
          <p class="text-sm text-muted mb-0">{{ description }}</p>
          <span class="text-success mr-1">●</span>
          <small class="text-dark-lighter">{{ status }}</small>
        </div>
        <div class="py-6 w-11">
          <el-button type="primary" size="small" class="w-[41.78px]">Add</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Location } from '@element-plus/icons-vue'
export default defineComponent({
  name: 'ContactCard',
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
    status: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {}
  },
})
</script>
