<template>
  <div class="flex items-center px-4 py-2 shadow-sm bg-slate-100">
    <div class="mr-auto"><strong>Fancy Dashboard,</strong> Have a nice day!</div>
    <div class="ml-auto">
      <div class="lg:col-span-10 xl:col-span-10 flex">
        <div class="lg:hidden flex-grow">
          <div class="flex items-center space-x-2 2xl:space-x-4 text-black px-5">
            <MenuIcon v-if="!isPin" class="cursor-pointer h-6 w-6" @click="setIsPin(true)" />
            <MenuAlt1Icon v-if="isPin" class="cursor-pointer h-6 w-6" @click="setIsPin(false)" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex">
      <el-button type="primary" class="rounded-full px-2 ml-2">
        <el-icon class="mr-1"><BellFilled /></el-icon>15
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Search, BellFilled } from '@element-plus/icons-vue'
import { MenuIcon, MenuAlt1Icon } from '@heroicons/vue/outline'
import { useDashboardStore } from '../../modules/dashboard/store'

export default defineComponent({
  name: 'Sidebar',
  components: {
    Search,
    BellFilled,
    MenuIcon,
    MenuAlt1Icon,
  },
  setup() {
    const store = useDashboardStore()
    const isPagesMenuOpen = ref(false)
    const isSideMenuOpen = ref(false)
    const togglePagesMenu = () => {
      isSideMenuOpen.value = !isSideMenuOpen.value
    }
    const closeSideMenu = () => {
      isSideMenuOpen.value = false
    }
    const isPin = computed(() => store.isPin)

    const setIsPin = (v: boolean) => {
      store.setSideBar(v)
    }

    return {
      isPagesMenuOpen,
      isSideMenuOpen,
      isPin,
      setIsPin,
      Search,
      BellFilled,
      togglePagesMenu,
      closeSideMenu,
    }
  },
})
</script>
