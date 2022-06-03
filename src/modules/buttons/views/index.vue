<template>
  <div class="w-full block mx-auto h-auto lg:max-w-2/3">
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Styles</h3>
      </template>
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
    </el-card>

    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Colors</h3>
      </template>
      <div class="flex flex-wrap gap-3.25">
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
          <el-button type="info" class="">Info</el-button>
        </div>
        <div>
          <el-button type="success" class="">Success</el-button>
        </div>

        <div>
          <el-button type="danger" class="">Danger</el-button>
        </div>
        <div>
          <el-button type="warning" class="">Warning</el-button>
        </div>
      </div>
    </el-card>

    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Outline</h3>
      </template>
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
          <el-button type="info" plain class="">Info</el-button>
        </div>
        <div>
          <el-button type="success" plain class="">Success</el-button>
        </div>
        <div>
          <el-button type="danger" plain class="">Danger</el-button>
        </div>
        <div>
          <el-button type="warning" plain class="">Warning</el-button>
        </div>
      </div>
    </el-card>

    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Sizes</h3>
      </template>

      <div>
        <div class="flex flex-wrap gap-3 pb-7 border-b border-slate-200/90">
          <div>
            <el-button type="primary" size="large">Large button</el-button>
          </div>
          <div>
            <el-button size="large" class="el-button--secondary">Large button</el-button>
          </div>
        </div>
        <div class="flex flex-wrap gap-3 py-9 border-b border-slate-200/90">
          <div>
            <el-button type="primary" size="small">Small button</el-button>
          </div>
          <div>
            <el-button size="small" class="el-button--secondary">Small button</el-button>
          </div>
        </div>
        <div class="grid grid-flow-row gap-2 pt-6">
          <div>
            <el-button class="w-full" type="primary" size="large">Block level button</el-button>
          </div>
          <div>
            <el-button class="el-button--secondary w-full" size="large"
              >Block level button</el-button
            >
          </div>
        </div>
      </div>
    </el-card>

    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Group</h3>
      </template>

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
    </el-card>
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Social</h3>
      </template>
      <div>
        <div class="flex flex-wrap gap-3 pb-6 border-b border-slate-200/90">
          <div>
            <el-button
              class="bg-[#3b5999] border-[#3b5999] active:bg-[#2d4474] active:border-[#2d4474] text-white px-[15.5px]"
            >
              <font-awesome-icon :icon="['fab', 'facebook']" class="pr-3" />
              Facebook
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#1da1f2] border-[#1da1f2] active:bg-[#33aaf3] active:border-[#33aaf3] text-white px-[16.5px]"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" class="pr-3" />
              Twitter
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#dd4b39] border-[#dd4b39] active:bg-[#e05d4c] active:border-[#e05d4c] text-white"
            >
              <font-awesome-icon :icon="['fab', 'google-plus-g']" class="pr-3" />
              Google +
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#e4405f] border-[#e4405f] active:bg-[#e6536f] active:border-[#e6536f] text-white px-3.5"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" class="pr-3" />
              Instagram
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#bd081c] border-[#bd081c] active:bg-[#db0920] active:border-[#db0920] text-white px-3.5"
            >
              <font-awesome-icon :icon="['fab', 'pinterest']" class="pr-3" />
              Pinterest
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#cd201f] border-[#cd201f] active:bg-[#de2928] active:border-[#de2928] text-white px-3.5"
            >
              <font-awesome-icon :icon="['fab', 'youtube']" class="pr-3" />
              Youtube
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#04a0f0] border-[#04a0f0] active:bg-[#13acfb] active:border-[#13acfb] text-white px-3.5"
            >
              <font-awesome-icon :icon="['fab', 'vimeo']" class="pr-3" />
              Vimeo
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#3aaf85] border-[#3aaf85] active:bg-[#43c094] active:border-[#43c094] text-white px-3.5"
            >
              <font-awesome-icon :icon="['fab', 'slack']" class="pr-3" />
              Slack
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#ea4c89] border-[#ea4c89] active:bg-[#ec5d94] active:border-[#ec5d94] text-white px-3.5"
            >
              <font-awesome-icon :icon="['fab', 'dribbble']" class="pr-3" />
              Dribbble
            </el-button>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-wrap gap-3 py-8 border-b border-slate-200/90">
          <div>
            <el-button
              class="bg-[#3b5999] border-[#3b5999] active:bg-[#2d4474] active:border-[#2d4474] text-white w-[38px] h-[38px]"
            >
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#1da1f2] border-[#1da1f2] active:bg-[#33aaf3] active:border-[#33aaf3] text-white w-[38px] h-[38px]"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#dd4b39] border-[#dd4b39] active:bg-[#e05d4c] active:border-[#e05d4c] text-white w-[38px] h-[38px]"
            >
              <font-awesome-icon :icon="['fab', 'google-plus-g']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#e4405f] border-[#e4405f] active:bg-[#e6536f] active:border-[#e6536f] text-white w-[38px] h-[38px]"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#bd081c] border-[#bd081c] active:bg-[#db0920] active:border-[#db0920] text-white w-[38px] h-[38px]"
            >
              <font-awesome-icon :icon="['fab', 'pinterest']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#cd201f] border-[#cd201f] active:bg-[#de2928] active:border-[#de2928] text-white w-[38px] h-[38px]"
            >
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#04a0f0] border-[#04a0f0] active:bg-[#13acfb] active:border-[#13acfb] text-white w-[38px] h-[38px]"
            >
              <font-awesome-icon :icon="['fab', 'vimeo']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#3aaf85] border-[#3aaf85] active:bg-[#43c094] active:border-[#43c094] text-white w-[38px] h-[38px]"
            >
              <font-awesome-icon :icon="['fab', 'slack']" />
            </el-button>
          </div>
          <div>
            <el-button
              class="bg-[#ea4c89] border-[#ea4c89] active:bg-[#ec5d94] active:border-[#ec5d94] text-white w-[38px] h-[38px]"
            >
              <font-awesome-icon :icon="['fab', 'dribbble']" />
            </el-button>
          </div>
        </div>
      </div>
      <div class="pt-8">
        <div class="flex flex-wrap gap-3">
          <div>
            <el-button
              circle
              class="w-[38px] h-[38px] bg-[#3b5999] border-[#3b5999] active:bg-[#2d4474] active:border-[#2d4474] text-white"
            >
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="w-[38px] h-[38px] bg-[#1da1f2] border-[#1da1f2] active:bg-[#33aaf3] active:border-[#33aaf3] text-white"
            >
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="w-[38px] h-[38px] bg-[#dd4b39] border-[#dd4b39] active:bg-[#e05d4c] active:border-[#e05d4c] text-white"
            >
              <font-awesome-icon :icon="['fab', 'google-plus-g']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="w-[38px] h-[38px] bg-[#e4405f] border-[#e4405f] active:bg-[#e6536f] active:border-[#e6536f] text-white"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="w-[38px] h-[38px] bg-[#bd081c] border-[#bd081c] active:bg-[#db0920] active:border-[#db0920] text-white"
            >
              <font-awesome-icon :icon="['fab', 'pinterest']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="w-[38px] h-[38px] bg-[#cd201f] border-[#cd201f] active:bg-[#de2928] active:border-[#de2928] text-white"
            >
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="w-[38px] h-[38px] bg-[#04a0f0] border-[#04a0f0] active:bg-[#13acfb] active:border-[#13acfb] text-white"
            >
              <font-awesome-icon :icon="['fab', 'vimeo']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="w-[38px] h-[38px] bg-[#3aaf85] border-[#3aaf85] active:bg-[#43c094] active:border-[#43c094] text-white"
            >
              <font-awesome-icon :icon="['fab', 'slack']" />
            </el-button>
          </div>
          <div>
            <el-button
              circle
              class="w-[38px] h-[38px] bg-[#ea4c89] border-[#ea4c89] active:bg-[#ec5d94] active:border-[#ec5d94] text-white"
            >
              <font-awesome-icon :icon="['fab', 'dribbble']" />
            </el-button>
          </div>
        </div>
      </div>
    </el-card>
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
.el-button.el-button--secondary.active {
  @apply bg-secondary-active border-secondary-active #{!important};
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
