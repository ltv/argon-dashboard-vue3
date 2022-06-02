<template>
  <div class="h-screen overflow-hidden flex bg-background-page w-full">
    <sidebar />
    <div
      class="main-content flex flex-col flex-1 w-full overflow-auto"
      :class="`${!isSBPin ? 'ml-15.5' : 'ml-62.5 cursor-pointer lg:cursor-default'}`"
    >
      <navigation />
      <div class="w-full h-17 relative bg-primary-blue">
        <div class="flex items-center py-5 mb-0 px-4 md:px-[29px] md:pl-[30px] pt-6">
          <div class="w-full flex flex-wrap flex-row">
            <div class="flex w-1/2">
              <div class="text-white text-xl font-semibold inline-block pt-px">
                {{ route.meta.title }}
              </div>
              <div class="inline-block md:ml-7 hidden md:block pt-1.5">
                <el-breadcrumb separator="-" class="flex items-center justify-center">
                  <el-breadcrumb-item :to="{ path: '/' }">
                    <div class="inline-block items-center">
                      <el-icon
                        :size="16"
                        class="cursor-pointer w-4 h-4 text-slate-50 hover:text-slate-300"
                      >
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
                          {{ route.meta.parentPath }}
                        </el-link>
                      </div>
                    </div>
                  </el-breadcrumb-item>
                  <el-breadcrumb-item>
                    <div class="inline-block items-center">
                      <div class="text-sm text-slate-200 font-semibold">
                        {{ route.meta.title }}
                      </div>
                    </div>
                  </el-breadcrumb-item>
                </el-breadcrumb>
              </div>
            </div>
            <div class="w-1/2 text-right pt-px">
              <el-button
                size="small"
                class="w-[45px] h-7 rounded font-semibold text-primary-blue bg-white border-white hover:text-black hover:bg-white active:bg-slate-100 tracking-wide"
                >New</el-button
              >
              <el-button
                size="small"
                class="w-14 h-7 rounded font-semibold text-primary-blue bg-white border-white hover:text-black hover:bg-white active:bg-slate-100 tracking-wide"
                >Filters</el-button
              >
            </div>
          </div>
        </div>
      </div>
      <router-view v-slot="{ Component }">
        <div class="h-20.5 bg-primary-blue px-4 sm:px-7.5 md:px-[29px]">
          <component :is="Component" class="py-2.5 px-px lg:px-1.5" />
        </div>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useDashboardStore } from '../modules/dashboard/store'
import { HomeFilled } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Layout',
  components: {
    HomeFilled,
  },

  setup() {
    const route: any = useRoute()
    const store = useDashboardStore()
    const isSBPin = computed<boolean>(() => store.isSBPin)
    const setIsSBPin = (b: boolean) => store.setIsSBPin(b)
    return { isSBPin, setIsSBPin, route }
  },
})
</script>

<style scoped>
.main-content {
  @apply transition-all duration-300;
}
@media screen and (max-width: 1024px) {
  .main-content {
    margin-left: 0 !important;
  }
}
</style>
