<template>
  <aside
    ref="target"
    @mouseover="hoverLeftBar(true)"
    @mouseleave="hoverLeftBar(false)"
    aria-labelledby="primary-heading"
    class="transition-all duration-300 fixed z-20 w-62.5 bg-white flex-shrink-0 overflow-hidden overflow-y-auto h-full items-center shadow-card"
    :class="{ 'hidden-aside w-15.5': !isSBOpen && !isSBPin }"
  >
    <div class="container flex flex-col mx-auto items-stretch">
      <div class="h-19.5 flex items-center relative">
        <router-link
          v-if="(isSBOpen && !isSBPin) || isSBPin"
          :class="{ 'opacity-0': !isSBOpen && !isSBPin }"
          class="transition-opacity duration-300 opacity-1 p-6 block"
          :to="{ name: 'Dashboard' }"
        >
          <img
            src="https://argon-dashboard-pro-laravel.creative-tim.com/argon/img/brand/blue.png"
            class="max-h-8 max-w-full align-middle"
            alt="..."
          />
          <small class="absolute pl-2 left-32 top-10 italic text-cyan-800">v{{ version }}</small>
        </router-link>
        <div class="ml-auto">
          <div class="lg:col-span-10 xl:col-span-10 flex">
            <div class="hidden lg:block flex-grow">
              <div class="flex items-center space-x-2 2xl:space-x-4 text-black px-5">
                <MenuIcon v-if="!isSBPin" class="cursor-pointer h-6 w-5" @click="handleMenuClick" />
                <MenuAlt1Icon v-else class="cursor-pointer h-6 w-5" @click="handleMenuClick" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref="target"
        class="flex flex-col text-[#00000099] px-6 before:block before:md:mt-4 mt-0"
      >
        <ul class="flex flex-col -mx-6">
          <li
            class="relative flex flex-row mx-2 h-[45px] rounded-lg mb-px mt-0.5"
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
              class="inline-flex px-3 items-center w-full text-sm my-0.5 font-normal transition-colors duration-150 hover:text-gray-500/100 focus:text-gray-800"
              :class="{ ' text-gray-800 ': route.name === item.name }"
              :to="{ name: item.name }"
              :title="item.title"
            >
              <div>
                <em class="h-5 w-6 block">
                  <component
                    :is="item.icon"
                    :class="' w-5 mx-auto ' + item.color"
                    aria-hidden="true"
                  />
                </em>
              </div>
              <span
                class="transition-opacity duration-300 opacity-1 ml-3 text-sm font-normal"
                :class="{ 'opacity-0': !isSBOpen && !isSBPin }"
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
import { defineComponent, ref, computed, onMounted, watch, onUnmounted, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import navigation from './SidebarNav'
import { BellIcon, MenuIcon, MenuAlt1Icon } from '@heroicons/vue/outline'
import useStore from 'store'
import { onClickOutside } from '@vueuse/core'
import env from 'core/env'
import { checkIsMobile } from 'utils/index'

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
    const store = useStore()
    const menuItems = ref<MenuItem[]>(navigation)
    const isPagesMenuOpen = ref(false)
    const isSideMenuOpen = ref(false)
    const target = ref(null)
    const version = ref(env('VITE_APP_VERSION'))
    const isMobile = checkIsMobile()

    onClickOutside(target, (_) => {
      if (window.innerWidth < 1024) store.dashboard.setIsSBOpen(false)
    })
    onBeforeMount(() => {
      if (isMobile || window.innerWidth < 1024) {
        store.dashboard.setIsSBOpen(false)
        store.dashboard.setIsSBPin(false)
      }
    })
    onMounted(() => {
      window.addEventListener('resize', () => {
        if (window.innerWidth < 1024) {
          store.dashboard.setIsSBOpen(false)
          store.dashboard.setIsSBPin(false)
        }
      })
    })

    onUnmounted(() => {
      window.removeEventListener('resize', () => {})
    })

    const isSBPin = computed<boolean>(() => store.dashboard.isSBPin)
    const isSBOpen = computed<boolean>(() => store.dashboard.isSBOpen)

    const hoverLeftBar = (v: boolean) => {
      if (!isMobile && window.innerWidth > 1023) store.dashboard.setIsSBOpen(v)
    }

    const handleMenuClick = () => {
      store.dashboard.toggleMenu()
    }

    watch(route, () => {
      store.dashboard.setIsSBOpen(false)
    })

    return {
      isPagesMenuOpen,
      isSideMenuOpen,
      menuItems,
      route,
      isSBPin,
      isSBOpen,
      target,
      version,
      hoverLeftBar,
      handleMenuClick,
    }
  },
})
</script>
<style scoped>
.hidden-aside {
  @apply -translate-x-3/2 lg:translate-x-0 lg:block;
}
</style>
