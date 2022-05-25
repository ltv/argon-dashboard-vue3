<template>
  <div class="flex items-center mx-0 p-4 shadow-sm bg-indigo-500 h-24">
    <div class="w-full items-center justify-between px-3">
      <div class="w-full flex basis-auto md:grow items-center">
        <div
          class="transition-all duration-200 mr-auto w-full sm:transform-none sm:block"
          :class="{ '-translate-x-3/2 hidden': isSearchOpen }"
        >
          <div class="relative flex-grow h-13 w-full">
            <div class="z-10 absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon class="h-5 w-4 text-gray-800" aria-hidden="true" />
            </div>
            <div>
              <el-input
                v-model="textInput"
                type="text"
                placeholder="Search"
                input-style="color: black;"
              />
              <div
                class="flex z-10 absolute inset-y-0 right-0 pr-4 items-center lg:hidden md:hidden sm:hidden"
                :class="{ hidden: isPin }"
              >
                <el-icon
                  :size="20"
                  class="cursor-pointer w-4 h-4 text-black hover:text-slate-300"
                  @click="setSearchOpen(true)"
                >
                  <Close />
                </el-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import {
  Search,
  BellFilled,
  Menu,
  LocationFilled,
  List,
  GoodsFilled,
  UserFilled,
  CircleClose,
  Close,
} from '@element-plus/icons-vue'
import { MenuIcon, MenuAlt1Icon, SearchIcon, SearchCircleIcon } from '@heroicons/vue/outline'
import { useDashboardStore } from '../../modules/dashboard/store'

export default defineComponent({
  name: 'Sidebar',
  components: {
    Search,
    BellFilled,
    Menu,
    LocationFilled,
    List,
    GoodsFilled,
    UserFilled,
    CircleClose,
    Close,
    SearchIcon,
    MenuIcon,
    MenuAlt1Icon,
    SearchCircleIcon,
  },
  setup() {
    const store = useDashboardStore()
    const isPagesMenuOpen = ref(false)
    const isSideMenuOpen = ref(false)
    const isSearchOpen = ref(true)

    const textInput = ref('')
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

    const setSearchOpen = (v: boolean) => (isSearchOpen.value = v)

    return {
      isPagesMenuOpen,
      isSideMenuOpen,
      isSearchOpen,
      isPin,
      textInput,
      setIsPin,
      setSearchOpen,
      togglePagesMenu,
      closeSideMenu,
    }
  },
})
</script>
<style>
.MenuPopperClass {
  @apply lg:w-96 md:w-96 sm:w-96 w-97/100 border-none bg-[#182c4e] !important;
}
.notificationClass {
  @apply lg:w-108 md:w-108 sm:w-108 w-97/100 !important;
}
.profilePopperClass {
  @apply lg:w-48 md:w-48 sm:w-48 w-97/100 !important;
}
.profilePopperClass .el-dropdown-menu {
  @apply py-2 rounded-lg !important;
}
</style>
