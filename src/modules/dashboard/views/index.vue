<template>
  <div class="font text-5xl p-4 text-center">{{ value }}</div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useDashboardStore } from '../store'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    const store = useDashboardStore()
    const value = computed(() => store.welcomeText)
    onMounted(() => {
      store.showWelcomeText()
      setTimeout(() => {
        store.setWelcomeText('Hello world!')
        store.showWelcomeText()
      }, 2000)
    })
    return { value }
  },
})
</script>
