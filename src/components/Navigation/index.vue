<template>
  <div class="flex items-center px-4 py-2 shadow-sm">
    <div class="mr-auto"><strong>Hi Bieber,</strong> Have a nice day!</div>
    <div class="flex">
      <el-button type="primary" class="rounded-full px-2 ml-2">
        <el-icon class="mr-1"><BellFilled /></el-icon>15
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Search, BellFilled } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'Sidebar',
  components: { Search, BellFilled },
  setup() {
    const isPagesMenuOpen = ref(false)
    const isSideMenuOpen = ref(false)
    const togglePagesMenu = () => {
      isSideMenuOpen.value = !isSideMenuOpen.value
    }
    const closeSideMenu = () => {
      isSideMenuOpen.value = false
    }
    return {
      isPagesMenuOpen,
      isSideMenuOpen,
      Search,
      BellFilled,
      togglePagesMenu,
      closeSideMenu,
    }
  },
})
</script>
