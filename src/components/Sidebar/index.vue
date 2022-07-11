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
          <img src="@/assets/images/blue.png" class="max-h-8 max-w-full align-middle" alt="..." />
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
      <div class="flex-1 overflow-y-hidden">
        <el-scrollbar>
          <el-menu
            ref="target"
            class="text-dark-20 before:block before:md:mt-4 mt-0"
            default-active="0"
            :default-openeds="!leftSideBarItems.includes(route.name) ? ['1'] : ['0']"
          >
            <template v-for="(item, index) in menuItems" :key="index">
              <el-sub-menu
                class="relative rounded-lg mx-2"
                :class="{
                  ' bg-slate-100/50 ': route.name === item.name,
                  ' arrow-left ': !isSBOpen && !isSBPin,
                }"
                :index="`${index}`"
                v-if="item.children"
              >
                <template #title>
                  <span
                    v-if="route.name === item.name"
                    class="absolute inset-y-1 -left-2 w-0.5 h-5/6 rounded-tr-lg rounded-br-lg bg-indigo-410"
                    aria-hidden="true"
                  />
                  <span
                    class="inline-flex pl-1.5 items-center w-full text-sm my-0.5 font-normal transition-colors duration-150 hover:text-gray-500/100 focus:text-gray-800"
                  >
                    <div>
                      <em class="h-5 w-6 block">
                        <component
                          :is="item.icon"
                          :class="` w-5 mx-auto ${item.color}`"
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
                </template>
                <el-menu-item-group class="flex flex-col">
                  <el-menu-item
                    class="relative flex flex-row h-11.25 rounded-lg mb-px mt-0.5"
                    :class="{
                      ' bg-slate-100/50': route.name === subItem.name,
                    }"
                    v-for="(subItem, subIndex) in item.children"
                    :key="subIndex"
                    :index="`${index}-${subIndex}`"
                  >
                    <span
                      v-if="route.name === subItem.name"
                      class="absolute inset-y-1 -left-2 w-0.5 h-5/6 rounded-tr-lg rounded-br-lg bg-indigo-410"
                      aria-hidden="true"
                    />
                    <router-link
                      class="inline-flex ml-2 items-center w-full h-full text-sm my-0.5 font-normal transition-all duration-200 hover:text-gray-500/100 focus:text-gray-800"
                      :class="{
                        ' text-gray-800 ': route.name === subItem.name,
                        ' ml-4.5 ': isSBOpen || isSBPin,
                      }"
                      :to="{ name: subItem.name }"
                      :title="subItem.meta.title"
                    >
                      <div>
                        <em class="h-5 w-6 block">
                          <component
                            :is="subItem.meta.icon"
                            :class="` w-5 mx-auto ${subItem.meta.color}`"
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
              <el-menu-item
                class="relative rounded-lg mx-2"
                :class="{
                  ' bg-slate-100/50 ': route.name === item.name,
                }"
                :index="`${index}`"
                v-else
              >
                <template #title>
                  <span
                    v-if="route.name === item.name"
                    class="absolute inset-y-1 -left-2 w-0.5 h-5/6 rounded-tr-lg rounded-br-lg bg-indigo-410"
                    aria-hidden="true"
                  />
                  <router-link
                    class="inline-flex pl-1.5 items-center w-full h-full text-sm my-0.5 font-normal transition-colors duration-150 hover:text-gray-500/100 focus:text-gray-800"
                    :class="{ ' text-gray-800 ': route.name === item.name }"
                    :to="{ name: item.name }"
                    :title="item.title"
                  >
                    <div>
                      <em class="h-5 w-6 block">
                        <component
                          :is="item.icon"
                          :class="` w-5 mx-auto ${item.color}`"
                          aria-hidden="true"
                        />
                      </em>
                    </div>
                    <span
                      class="transition-opacity duration-300 opacity-1 ml-3 text-sm font-normal"
                      :class="{ 'opacity-0': !isSBOpen && !isSBPin }"
                      >{{ item.title }}
                    </span>
                  </router-link>
                </template>
              </el-menu-item>
            </template>
          </el-menu>
          <el-divider />
          <div
            class="pl-6.5 text-muted text-12.8 font-bold"
            :class="{ hidden: !isSBOpen && !isSBPin }"
          >
            DOCUMENTATION
          </div>
          <div class="relative mt-0 rounded-lg mx-2">
            <el-link class="px-2 h-11.25" :underline="false" :href="documentHref" target="_blank">
              <div
                class="inline-flex pl-1.5 items-center w-full text-sm my-0.5 font-normal transition-colors"
              >
                <div class="h-5 w-6 block">
                  <el-icon class="w-6 mx-auto text-dark-20"><Promotion /></el-icon>
                </div>
                <span
                  class="transition-opacity opacity-1 ml-3 text-sm font-normal text-dark-20"
                  :class="{ 'opacity-0': !isSBOpen && !isSBPin }"
                  >Getting started</span
                >
              </div>
            </el-link>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import navigation from './SidebarNav'
import { BellIcon, MenuIcon, MenuAlt1Icon, ColorSwatchIcon } from '@heroicons/vue/outline'
import useStore from 'store'
import { onClickOutside } from '@vueuse/core'
import env from 'core/env'
import { checkIsMobile } from 'utils/index'
import { Promotion } from '@element-plus/icons-vue'

interface MenuItem {
  title: string
  icon: any
  path: string
  name: string
  color: string
  children: any
  requiresAuth: boolean
}

export default defineComponent({
  name: 'Sidebar',
  components: {
    BellIcon,
    MenuIcon,
    MenuAlt1Icon,
    ColorSwatchIcon,
    Promotion,
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    const menuItems = ref<MenuItem[]>(navigation)
    const isPagesMenuOpen = ref(false)
    const isSideMenuOpen = ref(false)
    const target = ref(null)
    const version = ref(env('VITE_APP_VERSION'))
    const documentHref = ref(env('VITE_DOCUMENT_ENDPOINT'))
    const isMobile = checkIsMobile()
    const leftSideBarItems = ref<any[]>(['Dashboard', 'Profile', 'Map'])

    const handleOnResize = () => {
      if (window.innerWidth < 1024) {
        store.dashboard.setIsSBOpen(false)
        store.dashboard.setIsSBPin(false)
      }
    }

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
      window.addEventListener('resize', handleOnResize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleOnResize)
    })

    const isSBPin = computed<boolean>(() => store.dashboard.isSBPin)
    const isSBOpen = computed<boolean>(() => store.dashboard.isSBOpen)

    const hoverLeftBar = (v: boolean) => {
      if (!isMobile && window.innerWidth > 1023) store.dashboard.setIsSBOpen(v)
    }

    const handleMenuClick = () => {
      store.dashboard.toggleMenu()
    }

    return {
      leftSideBarItems,
      isPagesMenuOpen,
      isSideMenuOpen,
      menuItems,
      route,
      isSBPin,
      isSBOpen,
      target,
      version,
      documentHref,
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
