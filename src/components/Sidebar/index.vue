<template>
  <aside
    ref="target"
    @mouseover="hoverLeftBar(true)"
    @mouseleave="hoverLeftBar(false)"
    aria-labelledby="primary-heading"
    class="transition-all duration-300 fixed z-20 w-62.5 bg-white flex-shrink-0 overflow-hidden h-full items-center shadow-card"
    :class="{ ' hidden-aside w-17 ': !isSBOpen && !isSBPin }"
  >
    <div class="flex flex-col mx-auto items-stretch h-full">
      <small class="absolute pl-2 left-0 bottom-0 italic text-cyan-800">v{{ version }}</small>
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
        </router-link>
        <div class="ml-auto">
          <div class="lg:col-span-10 xl:col-span-10 flex">
            <div class="hidden lg:block flex-grow">
              <div class="flex items-center space-x-2 2xl:space-x-4 text-black px-6">
                <MenuIcon v-if="!isSBPin" class="cursor-pointer h-6 w-5" @click="handleMenuClick" />
                <MenuAlt1Icon v-else class="cursor-pointer h-6 w-5" @click="handleMenuClick" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <el-scrollbar>
          <el-menu ref="target" class="text-[#00000099] before:block before:md:mt-4 mt-0">
            <template v-for="(item, index) in menuItems" :key="index">
              <el-sub-menu
                class="rounded-lg mx-2"
                :class="{
                  ' hidden-arrow ': !item.children,
                  ' bg-slate-100/50 ': route.name === item.name,
                  ' arrow-left ': !isSBOpen && !isSBPin,
                }"
                :index="index.toString()"
                v-if="item.requiresAuth"
              >
                <template #title>
                  <span
                    class="inline-flex px-1.5 items-center w-full text-sm my-0.5 font-normal transition-colors duration-150 hover:text-gray-500/100 focus:text-gray-800"
                    v-if="item.children"
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
                  </span>
                  <router-link
                    class="inline-flex px-1.5 items-center w-full text-sm my-0.5 font-normal transition-colors duration-150 hover:text-gray-500/100 focus:text-gray-800"
                    :class="{ ' text-gray-800 ': route.name === item.name }"
                    :to="{ name: item.name }"
                    :title="item.title"
                    v-else
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
                </template>
                <el-menu-item-group class="flex flex-col">
                  <el-menu-item
                    class="flex flex-row h-[45px] rounded-lg mb-px mt-0.5"
                    :class="{
                      ' bg-slate-100/50': route.name === subItem.name,
                    }"
                    v-for="(subItem, index) in item.children"
                    :key="index"
                    :index="index.toString()"
                  >
                    <router-link
                      class="inline-flex pl-1.5 items-center w-full text-sm my-0.5 font-normal transition-all duration-200 hover:text-gray-500/100 focus:text-gray-800"
                      :class="{
                        ' text-gray-800 ': route.name === subItem.name,
                        ' pl-4.5 ': isSBOpen || isSBPin,
                      }"
                      :to="{ name: subItem.name }"
                      :title="subItem.meta.title"
                    >
                      <div>
                        <em class="h-5 w-6 block">
                          <component
                            :is="subItem.meta.icon"
                            :class="' w-5 mx-auto ' + subItem.meta.color"
                            aria-hidden="true"
                          />
                        </em>
                      </div>
                      <span
                        class="transition-opacity duration-300 opacity-1 ml-3 text-sm font-normal"
                        :class="{ 'opacity-0': !isSBOpen && !isSBPin }"
                        >{{ subItem.meta.title }}</span
                      >
                    </router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
            </template>
          </el-menu>
        </el-scrollbar>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch, onUnmounted, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import navigation from './SidebarNav'
import { BellIcon, MenuIcon, MenuAlt1Icon, ColorSwatchIcon } from '@heroicons/vue/outline'
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
    ColorSwatchIcon,
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
