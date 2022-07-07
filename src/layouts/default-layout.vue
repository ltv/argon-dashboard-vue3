<template>
  <div class="h-screen overflow-hidden flex bg-slate-20 w-full" v-loading.fullscreen.lock="loading">
    <sidebar />
    <div
      class="main-content flex flex-col flex-1 w-full overflow-auto"
      :class="`${!isSBPin ? ' ml-17 ' : 'ml-62.5 cursor-pointer lg:cursor-default'}`"
    >
      <navigation />
      <div
        class="w-full h-38 relative bg-transparent border-none"
        :class="{
          'bg-indigo-410': !route.meta.isDarkBackground,
        }"
      >
        <div
          class="flex items-center py-5 mb-0 px-3.75 pr-3.5 md:px-7.25 md:pl-7.5 pt-6"
          v-if="!route.meta.isDarkBackground"
        >
          <div class="w-full flex flex-wrap flex-row">
            <div class="flex w-1/2">
              <div class="text-white text-xl font-semibold inline-block pt-px">
                {{ route.meta.title }}
              </div>
              <div class="md:ml-7 hidden md:inline-block pt-1.5">
                <BreadCrumb :parentPath="route.meta.parentPath" :title="route.meta.title" />
              </div>
            </div>
            <div class="w-1/2 text-right pt-px pr-px">
              <el-button
                size="small"
                class="w-11.25 h-7 rounded font-semibold text-indigo-410 bg-white border-white hover:text-black hover:bg-white active:bg-slate-100 tracking-wide"
                >New</el-button
              >
              <el-button
                size="small"
                class="w-14 h-7 rounded font-semibold text-indigo-410 bg-white border-white hover:text-black hover:bg-white active:bg-slate-100 tracking-wide"
                >Filters</el-button
              >
            </div>
          </div>
        </div>

        <router-view v-slot="{ Component }">
          <component
            :is="Component"
            :class="{ 'py-1.25 px-4 md:px-7.5 lg:px-6.2': !route.meta.isFullWidthLayout }"
          />
        </router-view>

        <div class="w-full py-8 mx-auto px-4 md:px-7.5 lg:px-7.15">
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import useStore from 'store'
import { HomeFilled } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Layout',
  components: {
    HomeFilled,
  },

  setup() {
    const route: any = useRoute()
    const store = useStore()
    const isSBPin = computed<boolean>(() => store.dashboard.isSBPin)
    const loading = computed(() => store.global.loading)

    const setIsSBPin = (b: boolean) => store.dashboard.setIsSBPin(b)
    return {
      isSBPin,
      loading,
      setIsSBPin,
      route,
      store,
    }
  },
})
</script>

<style scoped>
.main-content {
  @apply transition-all duration-300;
}
@media screen and (max-width: 1023px) {
  .main-content {
    margin-left: 0 !important;
  }
}
</style>
