<template>
  <div class="w-full">
    <el-breadcrumb separator="-" class="flex items-center justify-center">
      <el-breadcrumb-item :to="{ path: '/' }">
        <div class="inline-block items-center">
          <el-icon :size="16" class="cursor-pointer w-4 h-4 text-slate-50 hover:text-slate-300">
            <HomeFilled />
          </el-icon>
        </div>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <div class="inline-block items-center">
          <div>
            <el-link
              :underline="false"
              href="#!"
              class="text-sm text-slate-50 hover:text-white font-semibold"
            >
              {{ parentPath }}
            </el-link>
          </div>
        </div>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <div class="inline-block items-center">
          <div class="text-sm text-slate-200/95 font-semibold">
            {{ title }}
          </div>
        </div>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { HomeFilled } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'BreadCrumb',
  components: {
    HomeFilled,
  },
  props: {
    parentPath: {
      type: String,
      default: '/',
    },
    title: {
      type: String,
      default: 'Default',
    },
  },
})
</script>
