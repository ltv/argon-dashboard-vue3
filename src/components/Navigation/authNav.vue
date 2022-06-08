<template>
  <div class="absolute w-full z-100 p-4 bg-transparent border-0">
    <div
      class="w-full md:w-[720px] lg:w-[1138px] h-[56px] flex flex-nowrap basis-auto justify-between items-center mx-auto px-3.375"
    >
      <div class="mr-9 pt-1.5">
        <a class="inline-block py-2.5 whitespace-nowrap w-[101.45px]" href="#" alt="...">
          <img
            class="h-7.5"
            src="https://argon-dashboard-pro-laravel.creative-tim.com/argon/img/brand/white.png"
          />
        </a>
      </div>
      <div class="flex basis-auto items-center w-full">
        <div class="flex flex-row mr-auto items-center gap-11">
          <div>
            <el-link :underline="false" class="text-white font-normal"> Dashboard </el-link>
          </div>
          <div>
            <el-link :underline="false" class="text-white font-normal"> Login </el-link>
          </div>
          <div>
            <el-link :underline="false" class="text-white font-normal"> Register </el-link>
          </div>
        </div>
        <div class="flex flex-row items-center ml-auto">
          <div class="mr-2"><el-link :underline="false"> Dashboard </el-link></div>
          <div class="mr-2"><el-link :underline="false"> Login </el-link></div>
          <div class="mr-2"><el-link :underline="false"> Register </el-link></div>
          <div class="mr-2">
            <el-button class="el-button--secondary"> Purchase Now </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AuthNav',
  setup() {
    return {}
  },
})
</script>
