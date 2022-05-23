<template>
  <div class="h-screen overflow-hidden flex bg-slate-100">
    <sidebar />
    <div
      class="main-content flex flex-col flex-1 w-full"
      :class="`${!isExpanded ? 'ml-14' : 'ml-64'}`"
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
    const isExpanded = computed(() => store.isPin)

    return { isExpanded }
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
