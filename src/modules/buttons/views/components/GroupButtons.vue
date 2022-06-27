<template>
  <div class="w-full">
    <div>
      <div class="flex flex-wrap gap-3 pb-7 border-b border-slate-200/90">
        <el-button-group>
          <el-button class="el-button--secondary shadow-none">Left</el-button>
          <el-button class="el-button--secondary active shadow-none">Middle</el-button>
          <el-button class="el-button--secondary shadow-none">Right</el-button>
        </el-button-group>
      </div>
    </div>
    <div class="pt-9">
      <div class="flex flex-wrap gap-2">
        <el-button-group>
          <el-button type="info" class="active shadow-none w-[50.36px]">1</el-button>
          <el-button type="info" class="shadow-none w-[50.36px]">2</el-button>
          <el-button type="info" class="shadow-none w-[50.36px]">3</el-button>
          <el-button type="info" class="shadow-none w-[50.36px]">4</el-button>
        </el-button-group>

        <el-button-group>
          <el-button class="btn-default shadow-none w-[50.36px]">5</el-button>
          <el-button class="btn-default shadow-none w-[50.36px]">6</el-button>
          <el-button class="btn-default shadow-none w-[50.36px]">7</el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GroupButtons',
})
</script>

<style lang="scss" scoped>
.el-button-group {
  .el-button--info {
    @apply border-info	#{!important};
  }
}
</style>
