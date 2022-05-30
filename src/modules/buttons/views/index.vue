<template>
  <div class="w-full block w-full mx-auto h-auto w-full lg:max-w-2/3 py-2.5">
    <div class="flex flex-wrap flex-col bg-white shadow mb-7 mx-auto rounded-lg">
      <div class="p-5 border-b border-primary-white">
        <h3 class="cursor-auto">Styles</h3>
      </div>
      <div class="px-5 py-6">
        <div class="flex flex-wrap gap-3">
          <div>
            <el-button type="primary" class="">Primary</el-button>
          </div>
          <div>
            <el-button type="primary" class="">
              <el-icon :size="17" class="mr-2"> <Shop /> </el-icon>With icon</el-button
            >
          </div>
          <div>
            <el-button type="primary" class="">
              <el-icon :size="17">
                <Tools />
              </el-icon>
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap flex-col bg-white shadow mb-7 mx-auto rounded-lg">
      <div class="p-5 border-b border-primary-white">
        <h3 class="cursor-auto">Colors</h3>
      </div>
      <div class="px-5 py-6">
        <div class="flex flex-wrap gap-3">
          <div>
            <el-button class="btn-default">Default</el-button>
          </div>
          <div>
            <el-button type="primary" class="">Primary</el-button>
          </div>
          <div>
            <el-button class="el-button--secondary">Secondary</el-button>
          </div>
          <div>
            <el-button type="success" class="">Success</el-button>
          </div>
          <div>
            <el-button type="info" class="">Info</el-button>
          </div>
          <div>
            <el-button type="danger" class="">Danger</el-button>
          </div>
          <div>
            <el-button type="warning" class="">Warning</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap flex-col bg-white shadow mb-7 mx-auto rounded-lg">
      <div>
        <div class="p-5 border-b border-primary-white">
          <h3 class="cursor-auto">Outline</h3>
        </div>
      </div>
      <div class="px-5 py-6">
        <div class="flex flex-wrap gap-3">
          <div>
            <el-button plain class="">Default</el-button>
          </div>
          <div>
            <el-button type="primary" plain class="">Primary</el-button>
          </div>
          <div>
            <el-button class="el-button--secondary" plain>Secondary</el-button>
          </div>
          <div>
            <el-button type="success" plain class="">Success</el-button>
          </div>
          <div>
            <el-button type="info" plain class="">Info</el-button>
          </div>
          <div>
            <el-button type="danger" plain class="">Danger</el-button>
          </div>
          <div>
            <el-button type="warning" plain class="">Warning</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap flex-col bg-white shadow mb-7 mx-auto rounded-lg">
      <div>
        <div class="p-5 border-b border-primary-white">
          <h3 class="cursor-auto">Sizes</h3>
        </div>
      </div>
      <div class="px-5">
        <div class="flex flex-wrap gap-3 py-6 border-b border-primary-white">
          <div>
            <el-button type="primary" size="large">Large button</el-button>
          </div>
          <div>
            <el-button size="large" class="el-button--secondary">Large button</el-button>
          </div>
        </div>
      </div>
      <div class="px-5">
        <div class="flex flex-wrap gap-3 py-6 border-b border-primary-white">
          <div>
            <el-button type="primary" size="small">Small button</el-button>
          </div>
          <div>
            <el-button size="small" class="el-button--secondary">Small button</el-button>
          </div>
        </div>
      </div>
      <div class="px-5 py-6 w-full">
        <div class="py-1">
          <el-button class="w-full" type="primary" size="large">Block level button</el-button>
        </div>
        <div class="py-1">
          <el-button class="el-button--secondary w-full" size="large">Block level button</el-button>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap flex-col bg-white shadow mb-7 mx-auto rounded-lg">
      <div>
        <div class="p-5 border-b border-primary-white">
          <h3 class="cursor-auto">Group</h3>
        </div>
      </div>
      <div class="px-5">
        <div class="flex flex-wrap gap-3 py-6 border-b border-primary-white">
          <el-button-group>
            <el-button class="el-button--secondary shadow-none drop-shadow-none">Left</el-button>
            <el-button class="el-button--secondary active shadow-none drop-shadow-none"
              >Middle</el-button
            >
            <el-button class="el-button--secondary shadow-none drop-shadow-none">Right</el-button>
          </el-button-group>
        </div>
      </div>
      <div class="px-5 py-6">
        <div class="flex flex-wrap gap-3">
          <el-button-group>
            <el-button type="info" class="active shadow-none drop-shadow-none w-12">1</el-button>
            <el-button type="info" class="shadow-none drop-shadow-none w-12">2</el-button>
            <el-button type="info" class="shadow-none drop-shadow-none w-12">3</el-button>
            <el-button type="info" class="shadow-none drop-shadow-none w-12">4</el-button>
          </el-button-group>

          <el-button-group>
            <el-button class="btn-default shadow-none drop-shadow-none w-12">5</el-button>
            <el-button class="btn-default shadow-none drop-shadow-none w-12">6</el-button>
            <el-button class="btn-default shadow-none drop-shadow-none w-12">7</el-button>
          </el-button-group>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap flex-col bg-white shadow mb-7 mx-auto rounded-lg">
      <div>
        <div class="p-5 border-b border-primary-white">
          <h3 class="cursor-auto">Social</h3>
        </div>
      </div>
      <div class="px-5">
        <div class="flex flex-wrap gap-3 py-6 border-b border-primary-white">
          <div>
            <el-button
              class="bg-[#3b5999] border-[#3b5999] active:bg-[#2d4474] active:border-[#2d4474] text-white"
            >
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
      <div class="px-5">
        <div class="flex flex-wrap gap-3 py-6 border-b border-primary-white">
          <div>
            <el-button
              class="bg-[#3b5999] border-[#3b5999] active:bg-[#2d4474] active:border-[#2d4474] text-white w-9 h-9"
            >
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#1da1f2] border-[#1da1f2] active:bg-[#33aaf3] active:border-[#33aaf3] text-white w-9 h-9"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#dd4b39] border-[#dd4b39] active:bg-[#e05d4c] active:border-[#e05d4c] text-white w-9 h-9"
            >
              <font-awesome-icon :icon="['fab', 'google-plus-g']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#e4405f] border-[#e4405f] active:bg-[#e6536f] active:border-[#e6536f] text-white w-9 h-9"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#bd081c] border-[#bd081c] active:bg-[#db0920] active:border-[#db0920] text-white w-9 h-9"
            >
              <font-awesome-icon :icon="['fab', 'pinterest']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#cd201f] border-[#cd201f] active:bg-[#de2928] active:border-[#de2928] text-white w-9 h-9"
            >
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#04a0f0] border-[#04a0f0] active:bg-[#13acfb] active:border-[#13acfb] text-white w-9 h-9"
            >
              <font-awesome-icon :icon="['fab', 'vimeo']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#3aaf85] border-[#3aaf85] active:bg-[#43c094] active:border-[#43c094] text-white w-9 h-9"
            >
              <font-awesome-icon :icon="['fab', 'slack']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#ea4c89] border-[#ea4c89] active:bg-[#ec5d94] active:border-[#ec5d94] text-white w-9 h-9"
            >
              <font-awesome-icon :icon="['fab', 'dribbble']" />
            </el-button>
          </div>
        </div>
      </div>
      <div class="px-5 py-6">
        <div class="flex flex-wrap gap-3">
          <div>
            <el-button
              circle
              class="px-2.5 py-4 h-9 bg-[#3b5999] border-[#3b5999] active:bg-[#2d4474] active:border-[#2d4474] text-white"
            >
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="px-2.5 py-4 h-9 bg-[#1da1f2] border-[#1da1f2] active:bg-[#33aaf3] active:border-[#33aaf3] text-white"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="p-2 py-4 h-9 bg-[#dd4b39] border-[#dd4b39] active:bg-[#e05d4c] active:border-[#e05d4c] text-white"
            >
              <font-awesome-icon :icon="['fab', 'google-plus-g']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="px-2.5 py-4 h-9 bg-[#e4405f] border-[#e4405f] active:bg-[#e6536f] active:border-[#e6536f] text-white"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="px-2.5 py-4 h-9 bg-[#bd081c] border-[#bd081c] active:bg-[#db0920] active:border-[#db0920] text-white"
            >
              <font-awesome-icon :icon="['fab', 'pinterest']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="2.75 py-4 h-9 bg-[#cd201f] border-[#cd201f] active:bg-[#de2928] active:border-[#de2928] text-white"
            >
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="px-2.75 py-4 h-9 bg-[#04a0f0] border-[#04a0f0] active:bg-[#13acfb] active:border-[#13acfb] text-white"
            >
              <font-awesome-icon :icon="['fab', 'vimeo']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="px-2.75 py-4 h-9 bg-[#3aaf85] border-[#3aaf85] active:bg-[#43c094] active:border-[#43c094] text-white"
            >
              <font-awesome-icon :icon="['fab', 'slack']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="px-2.5 py-4 h-9 bg-[#ea4c89] border-[#ea4c89] active:bg-[#ec5d94] active:border-[#ec5d94] text-white"
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
import { Shop, Tools } from '@element-plus/icons-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Tools,
    Shop,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.el-button.el-button--default {
  @apply font-semibold h-10.5;
}
.el-button.el-button--large {
  @apply h-13 rounded-lg #{!important};
}
.el-button.el-button--small {
  @apply rounded #{!important};
}
.el-button.el-button--secondary.active {
  @apply bg-slate-300 #{!important};
}
.el-button.el-button--info.active {
  @apply bg-info-active #{!important};
}
.el-button-group {
  .el-button--info {
    @apply border-info	#{!important};
  }
}
</style>
