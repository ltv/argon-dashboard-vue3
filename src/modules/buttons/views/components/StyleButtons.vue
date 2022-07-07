<template>
  <div class="w-full">
    <div class="flex flex-wrap gap-3">
      <div>
        <el-button type="primary">Button</el-button>
      </div>
      <div>
        <el-button type="primary" class="pr-3.75">
          <el-icon :size="17" class="mr-3"> <Shop /> </el-icon>With icon</el-button
        >
      </div>
      <div>
        <el-button type="primary" class="px-3.375 group">
          <el-icon :size="17" class="group-focus:motion-reduce:animate-spin">
            <Tools />
          </el-icon>
        </el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Shop, Tools } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'StyleButtons',
  components: {
    Shop,
    Tools,
  },
})
</script>
