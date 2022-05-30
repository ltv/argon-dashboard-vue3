<template>
  <aside
    @mouseover="hoverLeftBar(true)"
    @mouseleave="hoverLeftBar(false)"
    aria-labelledby="primary-heading"
    class="transition-all duration-300 fixed z-20 w-63 bg-white flex-shrink-0 overflow-hidden overflow-y-auto h-full items-center"
    :class="{ 'w-15 hidden lg:block': !isHover && !isPin }"
  >
    <div class="container flex flex-col mx-auto items-stretch">
      <div class="h-20 flex items-center">
        <a
          v-if="(isHover && !isPin) || isPin"
          :class="{ 'opacity-0': !isHover && !isPin }"
          class="transition-opacity duration-300 flex opacity-1 p-6 block"
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
      <div ref="target" class="flex flex-col text-gray-500 px-6 before:block before:mt-3.5">
        <ul class="flex flex-col -mx-6">
          <li
            class="relative flex flex-row px-5 py-3 h-12"
            v-for="(item, index) in menuItems"
            :key="index"
          >
            <span
              v-if="route.name === item.name"
              class="absolute flex inset-y-1 left-0 w-0.5 h-5/6 bg-primary-blue rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            ></span>
            <router-link
              class="inline-flex items-center w-full text-sm my-0.5 font-normal transition-colors duration-150 hover:text-gray-600 focus:text-gray-800"
              :class="{ 'text-gray-800': route.name === item.name }"
              :to="{ name: item.name }"
              :title="item.title"
            >
              <div>
                <component
                  :is="item.icon"
                  :class="'h-5 w-5 block ' + item.color"
                  aria-hidden="true"
                />
              </div>
              <span
                class="transition-opacity duration-300 opacity-1 ml-4 text-sm font-medium"
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
