<template>
  <aside
    @mouseover="hoverLeftBar(true)"
    @mouseleave="hoverLeftBar(false)"
    aria-labelledby="primary-heading"
    class="transition-all duration-300 fixed z-20 w-62.5 bg-white flex-shrink-0 overflow-hidden overflow-y-auto h-full items-center"
    :class="{ 'hidden-aside w-15': !isHover && !isPin }"
  >
    <div class="container flex flex-col mx-auto items-stretch">
      <div class="h-19.5 flex items-center">
        <a
          v-if="(isHover && !isPin) || isPin"
          :class="{ 'opacity-0': !isHover && !isPin }"
          class="transition-opacity duration-300 opacity-1 p-6 block"
          href="#index"
        >
          <img
            src="https://argon-dashboard-pro-laravel.creative-tim.com/argon/img/brand/blue.png"
            class="max-h-8 max-w-full align-middle"
            alt="..."
          />
        </a>
        <div class="ml-auto">
          <div class="lg:col-span-10 xl:col-span-10 flex">
            <div class="hidden lg:block flex-grow">
              <div class="flex items-center space-x-2 2xl:space-x-4 text-black px-5">
                <MenuIcon v-if="!isPin" class="cursor-pointer h-6 w-5" @click="setIsPin(true)" />
                <MenuAlt1Icon
                  v-if="isPin"
                  class="cursor-pointer h-6 w-5"
                  @click="setIsPin(false)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref="target"
        class="flex flex-col text-gray-500/80 px-6 before:block before:md:mt-4 mt-0"
      >
        <ul class="flex flex-col -mx-6">
          <li
            class="relative flex flex-row mx-2 px-4 h-11 rounded-lg mt-0.5"
            :class="{ ' bg-slate-100/50 ': route.name === item.name }"
            v-for="(item, index) in menuItems"
            :key="index"
          >
            <span
              v-if="route.name === item.name"
              class="absolute inset-y-1 -left-2 w-0.5 h-5/6 bg-primary-blue rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            ></span>
            <router-link
              class="inline-flex items-center w-full text-sm my-0.5 font-normal transition-colors duration-150 hover:text-gray-600 focus:text-gray-800"
              :class="{ ' text-gray-800 ': route.name === item.name }"
              :to="{ name: item.name }"
              :title="item.title"
            >
              <div>
                <component
                  :is="item.icon"
                  :class="'h-4 w-4 block ' + item.color"
                  aria-hidden="true"
                />
              </div>
              <span
                class="transition-opacity duration-300 opacity-1 ml-4 text-sm font-normal"
                :class="{ 'opacity-0': !isHover && !isPin }"
                >{{ item.title }}</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import navigation from './SidebarNav'
import { BellIcon, MenuIcon, MenuAlt1Icon } from '@heroicons/vue/outline'
import { useDashboardStore } from '../../modules/dashboard/store'
import { onClickOutside } from '@vueuse/core'

interface MenuItem {
  title: string
  icon: any
  path: string
  name: string
  color: string
}

export default defineComponent({
  name: 'Sidebar',
  components: {
    BellIcon,
    MenuIcon,
    MenuAlt1Icon,
  },
  setup() {
    const route = useRoute()
    const store = useDashboardStore()
    const menuItems = ref<MenuItem[]>(navigation)
    const isPagesMenuOpen = ref(false)
    const isSideMenuOpen = ref(false)
    const isHover = ref<boolean>(false)
    const target = ref(null)

    onClickOutside(target, (_) => {
      const winWidth = ref<number>(window.innerWidth)
      if (winWidth.value < 1024 && isPin) {
        store.setSideBar(false)
      }
    })

    onMounted(() => {
      if (window.innerWidth < 640) store.setSideBar(false)
    })

    const isPin = computed<boolean>(() => store.isPin)

    const setIsPin = (value: boolean) => {
      store.setSideBar(value)
    }

    const togglePagesMenu = () => {
      isSideMenuOpen.value = !isSideMenuOpen.value
    }

    const closeSideMenu = () => {
      isSideMenuOpen.value = false
    }

    const hoverLeftBar = (b: boolean) => {
      isHover.value = b
    }

    return {
      isPagesMenuOpen,
      isHover,
      isSideMenuOpen,
      menuItems,
      route,
      isPin,
      target,
      setIsPin,
      hoverLeftBar,
      togglePagesMenu,
      closeSideMenu,
    }
  },
})
</script>
<style scoped>
.hidden-aside {
  @apply -translate-x-3/2 lg:translate-x-0 lg:block;
}
</style>
