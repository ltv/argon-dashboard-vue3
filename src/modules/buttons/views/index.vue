<template>
  <div class="w-full block sm:w-2/3 md:w-2/3 mx-auto h-auto">
    <div class="flex flex-wrap flex-col bg-white shadow mb-7 mx-auto rounded-lg">
      <div class="p-5 border-b border-primary-white">
        <h3 class="text-lg">Styles</h3>
      </div>
      <div class="px-5 py-6">
        <div class="flex flex-wrap gap-2">
          <div>
            <el-button type="primary">Primary</el-button>
          </div>
          <div>
            <el-button type="primary" :icon="Box">With icon</el-button>
          </div>
          <div>
            <el-button type="primary" :icon="Setting" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap flex-col bg-white shadow mb-7 mx-auto rounded-lg">
      <div class="p-5 border-b border-primary-white">
        <h3 class="text-lg">Colors</h3>
      </div>
      <div class="px-5 py-6">
        <div class="flex flex-wrap gap-2">
          <div>
            <el-button class="btn-default">Default</el-button>
          </div>
          <div>
            <el-button type="primary">Primary</el-button>
          </div>
          <div>
            <el-button class="el-button--secondary">Secondary</el-button>
          </div>
          <div>
            <el-button type="success">Success</el-button>
          </div>
          <div>
            <el-button type="info">Info</el-button>
          </div>
          <div>
            <el-button type="danger">Danger</el-button>
          </div>
          <div>
            <el-button type="warning">Warning</el-button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-auto flex flex-wrap border border-slate-50 bg-white shadow mt-5 mx-auto rounded-lg"
    >
      <div>
        <div class="font-semibold text-lg text-indigo-900 px-6 pt-4">
          <span class="font-bold block">Outline</span>
        </div>
      </div>
      <el-divider />
      <div class="mb-5">
        <div class="ml-4 px-2 py-2 flex flex-wrap gap-2">
          <div>
            <el-button plain>Default</el-button>
          </div>
          <div>
            <el-button type="primary" plain>Primary</el-button>
          </div>
          <div>
            <el-button class="el-button--secondary" plain>Secondary</el-button>
          </div>
          <div>
            <el-button type="success" plain>Success</el-button>
          </div>
          <div>
            <el-button type="info" plain>Info</el-button>
          </div>
          <div>
            <el-button type="danger" plain>Danger</el-button>
          </div>
          <div>
            <el-button type="warning" plain>Warning</el-button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-auto flex flex-wrap border border-slate-50 bg-white shadow mt-5 mx-auto rounded-lg"
    >
      <div>
        <div class="font-semibold text-lg text-indigo-900 px-6 pt-4">
          <span class="font-bold block">Size</span>
        </div>
      </div>
      <el-divider />
      <div>
        <div class="ml-4 px-2 py-2 flex flex-wrap gap-2">
          <div>
            <el-button type="primary" size="large" round>Large button</el-button>
          </div>
          <div>
            <el-button size="large" round>Large button</el-button>
          </div>
        </div>
      </div>
      <el-divider />
      <div>
        <div class="ml-4 px-2 py-2 flex flex-wrap gap-2">
          <div>
            <el-button type="primary" size="small" round>Small button</el-button>
          </div>
          <div>
            <el-button size="small" round>Small button</el-button>
          </div>
        </div>
      </div>
      <el-divider />
      <div class="w-full mb-6">
        <div class="py-1 px-2">
          <el-button class="w-full" type="primary" size="large" round>Block level button</el-button>
        </div>
        <div class="py-1 px-2">
          <el-button class="w-full" size="large" round>Block level button</el-button>
        </div>
      </div>
    </div>

    <div
      class="h-auto flex flex-wrap border border-slate-50 bg-white shadow mt-5 mx-auto rounded-lg"
    >
      <div>
        <div class="font-semibold text-lg text-indigo-900 px-6 pt-4">
          <span class="font-bold block">Group</span>
        </div>
      </div>
      <el-divider />
      <div class="mb-5">
        <div class="px-2 py-2 flex flex-wrap gap-2">
          <el-button-group class="ml-4">
            <el-button type="primary">Left</el-button>
            <el-button type="primary" class="active">Middle</el-button>
            <el-button type="primary">Right</el-button>
          </el-button-group>
        </div>
      </div>
      <el-divider />
      <div class="mb-5">
        <div class="px-2 py-2 flex flex-wrap gap-2">
          <el-button-group class="ml-4">
            <el-button type="primary" class="active">1</el-button>
            <el-button type="primary">2</el-button>
            <el-button type="primary">3</el-button>
            <el-button type="primary">4</el-button>
          </el-button-group>

          <el-button-group class="ml-4">
            <el-button>5</el-button>
            <el-button>6</el-button>
            <el-button>7</el-button>
          </el-button-group>
        </div>
      </div>
    </div>
    <div
      class="h-auto flex flex-wrap border border-slate-50 bg-white shadow mt-5 mx-auto rounded-lg"
    >
      <div>
        <div class="font-semibold text-lg text-indigo-900 px-6 pt-4">
          <span class="font-bold block">Social</span>
        </div>
      </div>
      <el-divider />
      <div class="mb-5">
        <div class="ml-4 px-2 py-2 flex flex-wrap gap-2">
          <div>
            <el-button type="primary">
              <font-awesome-icon :icon="['fab', 'facebook']" class="pr-2" />
              Facebook
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#1da1f2] border-[#1da1f2] active:bg-[#33aaf3] active:border-[#33aaf3] text-white"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" class="pr-2" />
              Twitter
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#dd4b39] border-[#dd4b39] active:bg-[#e05d4c] active:border-[#e05d4c] text-white"
            >
              <font-awesome-icon :icon="['fab', 'google-plus-g']" class="pr-2" />
              Google +
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#e4405f] border-[#e4405f] active:bg-[#e6536f] active:border-[#e6536f] text-white"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" class="pr-2" />
              Instagram
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#bd081c] border-[#bd081c] active:bg-[#db0920] active:border-[#db0920] text-white"
            >
              <font-awesome-icon :icon="['fab', 'pinterest']" class="pr-2" />
              Pinterest
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#cd201f] border-[#cd201f] active:bg-[#de2928] active:border-[#de2928] text-white"
            >
              <font-awesome-icon :icon="['fab', 'youtube']" class="pr-2" />
              Youtube
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#04a0f0] border-[#04a0f0] active:bg-[#13acfb] active:border-[#13acfb] text-white"
            >
              <font-awesome-icon :icon="['fab', 'vimeo']" class="pr-2" />
              Vimeo
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#3aaf85] border-[#3aaf85] active:bg-[#43c094] active:border-[#43c094] text-white"
            >
              <font-awesome-icon :icon="['fab', 'slack']" class="pr-2" />
              Slack
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#ea4c89] border-[#ea4c89] active:bg-[#ec5d94] active:border-[#ec5d94] text-white"
            >
              <font-awesome-icon :icon="['fab', 'dribbble']" class="pr-2" />
              Dribbble
            </el-button>
          </div>
        </div>
      </div>
      <el-divider />
      <div class="mb-5">
        <div class="ml-4 px-2 py-2 flex flex-wrap gap-2">
          <div>
            <el-button type="primary">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#1da1f2] border-[#1da1f2] active:bg-[#33aaf3] active:border-[#33aaf3] text-white"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#dd4b39] border-[#dd4b39] active:bg-[#e05d4c] active:border-[#e05d4c] text-white"
            >
              <font-awesome-icon :icon="['fab', 'google-plus-g']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#e4405f] border-[#e4405f] active:bg-[#e6536f] active:border-[#e6536f] text-white"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#bd081c] border-[#bd081c] active:bg-[#db0920] active:border-[#db0920] text-white"
            >
              <font-awesome-icon :icon="['fab', 'pinterest']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#cd201f] border-[#cd201f] active:bg-[#de2928] active:border-[#de2928] text-white"
            >
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#04a0f0] border-[#04a0f0] active:bg-[#13acfb] active:border-[#13acfb] text-white"
            >
              <font-awesome-icon :icon="['fab', 'vimeo']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#3aaf85] border-[#3aaf85] active:bg-[#43c094] active:border-[#43c094] text-white"
            >
              <font-awesome-icon :icon="['fab', 'slack']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#ea4c89] border-[#ea4c89] active:bg-[#ec5d94] active:border-[#ec5d94] text-white"
            >
              <font-awesome-icon :icon="['fab', 'dribbble']" />
            </el-button>
          </div>
        </div>
      </div>
      <el-divider />
      <div class="mb-5">
        <div class="ml-4 px-2 py-2 flex flex-wrap gap-2">
          <div>
            <el-button type="primary" circle class="px-3.5 py-5">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="px-3.5 py-5 bg-[#1da1f2] border-[#1da1f2] active:bg-[#33aaf3] active:border-[#33aaf3] text-white"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="p-3 py-5 bg-[#dd4b39] border-[#dd4b39] active:bg-[#e05d4c] active:border-[#e05d4c] text-white"
            >
              <font-awesome-icon :icon="['fab', 'google-plus-g']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="px-3.5 py-5 bg-[#e4405f] border-[#e4405f] active:bg-[#e6536f] active:border-[#e6536f] text-white"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="px-3.5 py-5 bg-[#bd081c] border-[#bd081c] active:bg-[#db0920] active:border-[#db0920] text-white"
            >
              <font-awesome-icon :icon="['fab', 'pinterest']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="p-3 py-5 bg-[#cd201f] border-[#cd201f] active:bg-[#de2928] active:border-[#de2928] text-white"
            >
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="px-3.5 py-5 bg-[#04a0f0] border-[#04a0f0] active:bg-[#13acfb] active:border-[#13acfb] text-white"
            >
              <font-awesome-icon :icon="['fab', 'vimeo']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="px-3.5 py-5 bg-[#3aaf85] border-[#3aaf85] active:bg-[#43c094] active:border-[#43c094] text-white"
            >
              <font-awesome-icon :icon="['fab', 'slack']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="px-3.5 py-5 bg-[#ea4c89] border-[#ea4c89] active:bg-[#ec5d94] active:border-[#ec5d94] text-white"
            >
              <font-awesome-icon :icon="['fab', 'dribbble']" />
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Box, Setting } from '@element-plus/icons-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return { Box, Setting }
  },
})
</script>

<style lang="scss" scoped>
.el-button {
  @apply font-semibold h-10 #{!important};
}
</style>
