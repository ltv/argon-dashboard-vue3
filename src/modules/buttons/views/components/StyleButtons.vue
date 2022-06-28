<template>
  <div class="w-full">
    <div class="flex flex-wrap gap-3">
      <div>
        <el-button type="primary">Button</el-button>
      </div>
      <div>
        <el-button type="primary" class="pr-[15px]">
          <el-icon :size="17" class="mr-3"> <Shop /> </el-icon>With icon</el-button
        >
      </div>
      <div>
        <el-button type="primary" class="px-[13.5px]">
          <el-icon :size="17">
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
