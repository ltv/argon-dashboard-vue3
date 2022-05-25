<template>
  <div class="h-screen overflow-hidden flex bg-slate-100 w-full">
    <sidebar />
    <div
      class="main-content flex flex-col flex-1 w-full"
      :class="`${!isPin ? 'ml-14' : 'ml-64 cursor-pointer lg:cursor-default'}`"
    >
      <navigation />
      <router-view v-slot="{ Component }">
        <div class="overflow-auto p-4">
          <component :is="Component" />
        </div>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useDashboardStore } from '../modules/dashboard/store'

export default defineComponent({
  name: 'Layout',
  components: {},

  setup() {
    const store = useDashboardStore()
    const isPin = computed<boolean>(() => store.isPin)
    const setIsPin = (b: boolean) => store.setSideBar(b)
    return { isPin, setIsPin }
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
