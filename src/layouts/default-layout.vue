<template>
  <div class="h-screen overflow-hidden flex bg-white">
    <sidebar />
    <div class="flex flex-col flex-1 w-full">
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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout',
  components: {},

  setup() {
    return {}
  },
})
</script>
