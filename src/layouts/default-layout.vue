<template>
  <div class="h-screen overflow-hidden flex bg-slate-100 w-full">
    <sidebar />
    <div
      class="main-content flex flex-col flex-1 w-full overflow-auto"
      :class="`${!isPin ? 'ml-14' : 'ml-64 cursor-pointer lg:cursor-default'}`"
    >
      <navigation />
      <div class="w-full h-20 relative bg-indigo-500">
        <div class="flex items-center py-5 mb-0 px-2.5 md:px-8 pt-6">
          <div class="w-full flex flex-wrap flex-row">
            <div class="flex w-1/2">
              <div class="text-white text-xl font-semibold inline-block mb-0">
                {{ route.meta.title }}
              </div>
              <div class="inline-block md:ml-6 hidden md:block pt-1.5">
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
                          :href="route.path"
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
            <div class="w-1/2 text-right">
              <el-button
                size="small"
                class="w-11 h-7 shadow-lg font-semibold text-indigo-500 border-white hover:text-black hover:bg-white active:bg-slate-100"
                >New</el-button
              >
              <el-button
                size="small"
                class="w-14 h-7 shadow-lg font-semibold text-indigo-500 border-white hover:text-black hover:bg-white active:bg-slate-100"
                >Filters</el-button
              >
            </div>
          </div>
        </div>
      </div>
      <router-view v-slot="{ Component }">
        <div class="h-17 bg-indigo-500 px-2.5">
          <component :is="Component" />
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
    const route = useRoute()
    const store = useDashboardStore()
    const isPin = computed<boolean>(() => store.isPin)
    const setIsPin = (b: boolean) => store.setSideBar(b)
    return { isPin, setIsPin, route }
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
