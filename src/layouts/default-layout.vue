<template>
  <div class="h-screen overflow-hidden flex bg-slate-100">
    <sidebar/>
    <div :class="`${ isExpanded ? 'ml-16 flex flex-col flex-1 w-full' : 'ml-64 flex flex-col flex-1 w-full' }`">
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
import { useDashboardStore } from "../modules/dashboard/store";

export default defineComponent({
  name: 'Layout',
  components: {},

  setup() {
    const store = useDashboardStore()
    const isExpanded = computed(() => store.isHide)
    // watch(isExpanded, () => {
    //   console.log("isExpanded:::", isExpanded)
    // })

    // const isExpanded = ref(true);
    return { isExpanded }
  },
})
</script>
