<template>
  <aside 
    @mouseover="isHide == true ? isHover = true : ''" @mouseleave="isHide == true ? isHover = false : ''"
    aria-labelledby="primary-heading"
    class="transition-all duration-300 fixed z-20 bg-white flex-shrink-0 w-14 overflow-y-auto h-full hidden md:block items-center"
    :class="{ 'w-64': isHover }"
  >
    <div class="container flex flex-col mx-auto items-stretch">
      <div class="h-20 flex items-center">
        <a v-if="isHover"
        class="flex p-6 block" href="https://argon-dashboard-pro-laravel.creative-tim.com/dashboard">
          <img src="https://argon-dashboard-pro-laravel.creative-tim.com/argon/img/brand/blue.png" class="max-h-8 max-w-full align-middle" alt="...">
        </a>
        <div class="ml-auto">
          <div class="lg:col-span-10 xl:col-span-10 flex">
            <div class="hidden md:block flex-grow">
              <div
                class="flex items-center space-x-2 2xl:space-x-4 text-black px-6"
              >
                <MenuIcon
                  v-if="isHide"
                  class="cursor-pointer h-5 w-5"
                  @click="isHide = !isHide"
                />
                <MenuAlt1Icon
                  v-if="isHover && !isHide"
                  class="cursor-pointer h-5 w-5"
                  @click="isHide = !isHide"
                />
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div class="flex flex-col text-gray-400 px-6 before:block before:mt-4">
        <ul class="flex flex-col -mx-6">
          <li class="relative flex flex-row px-6 py-3 h-11" v-for="(item, index) in menuItems" :key="index">
            <span
              v-if="route.name === item.name"
              class="absolute flex inset-y-1 left-0 w-0.5 h-5/6 bg-indigo-500 rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            ></span>
            <router-link
              
              class="inline-flex items-center w-full text-sm my-0.5 transition-colors duration-150 hover:text-gray-800"
              :class="{ 'text-gray-800': route.name === item.name }"
              :to="{ name: item.name }"
              :title="item.title"
            >
              <component :is="item.icon" :class="'h-5 w-5 block ' + item.color" aria-hidden="true" />
              <span class="transition-opacity opacity-1 duration-300 ml-4" :class="{ 'opacity-0': !isHover }">{{ item.title }}</span> 
            </router-link>
          </li>
        </ul>
        <!-- <ul class="flex flex-col" v-if="isHide && !isHover">
          <li class="relative flex flex-row py-3 h-11" v-for="(item, index) in menuItems" :key="index">
            <component :is="item.icon" :class="'h-5 w-5 ' + item.color" aria-hidden="true" />
          </li>
        </ul> -->
      </div>

    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import navigation from './SidebarNav'
import { BellIcon, MenuIcon, MenuAlt1Icon } from '@heroicons/vue/outline'
import { useDashboardStore } from "../../modules/dashboard/store";

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
    const routeItems = ref<MenuItem[]>(navigation)
    const menuItems = routeItems.value.sort((a, b) => a.title.localeCompare(b.title))
    const isPagesMenuOpen = ref(false)
    const isSideMenuOpen = ref(false)
    const isHover = ref<boolean>(true)
    const isHide = ref<boolean>(false)
    watch(isHide, () => {
      store.setSideBar(isHide.value)
    })

    const togglePagesMenu = () => {
      isSideMenuOpen.value = !isSideMenuOpen.value
    }
    const closeSideMenu = () => {
      isSideMenuOpen.value = false
    }
    watch(route, () => {
      console.log(route.name)
    })


    return {
      isPagesMenuOpen,
      isHover,
      isSideMenuOpen,
      menuItems,
      route,
      isHide,
      togglePagesMenu,
      closeSideMenu,
    }
  },
})
</script>
