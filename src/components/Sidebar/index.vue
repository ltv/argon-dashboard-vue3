<template>
  <aside
    aria-labelledby="primary-heading"
    class="z-20 bg-white flex-shrink-0 w-64 overflow-y-auto h-full hidden md:block pt-4 px-6 items-center"
  >
    <div class="container flex flex-col mx-auto items-stretch">
        <a class="flex pb-4 justify-center text-center" href="https://argon-dashboard-laravel.creative-tim.com/home">
          <img src="https://argon-dashboard-laravel.creative-tim.com/argon/img/brand/blue.png" class="max-h-10 max-w-full" alt="...">
        </a>
        <!-- <div class="h-14 flex items-center">
          <a v-if="isHide"
          class="flex justify-center text-center" href="https://argon-dashboard-pro-laravel.creative-tim.com/dashboard">
            <img src="https://argon-dashboard-pro-laravel.creative-tim.com/argon/img/brand/blue.png" class="max-h-8 max-w-full" alt="...">
          </a>
          <div class="ml-auto pr-2">
            <div class="lg:col-span-10 xl:col-span-10 flex">
              <div class="hidden md:block flex-grow">
                <div
                  class="flex items-center space-x-2 2xl:space-x-4 text-black"
                >
                  <MenuIcon
                    v-if="!isHide"
                    class="cursor-pointer h-5 w-5"
                    @click="isHide = !isHide"
                  />
                  <MenuAlt1Icon
                    v-if="isHide"
                    class="cursor-pointer h-5 w-5"
                    @click="isHide = !isHide"
                  />
                </div>
              </div> 
            </div>
          </div>
        </div> -->
       <div class="flex flex-col text-gray-400 px-6 -mx-6 before:block before:mt-8 before:-mr-4">
        <ul class="flex flex-col -mx-6">
          <li class="relative px-6 py-3 h-11" v-for="(item, index) in menuItems" :key="index">
            <span
              v-if="route.name === item.name"
              class="absolute flex inset-y-1 left-0 w-0.5 h-5/6 bg-indigo-500 rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            ></span>
            <router-link
              
              class="inline-flex items-center w-full text-sm my-0.5 transition-colors duration-150 hover:text-gray-800"
              :to="{ name: item.name }"
              :title="item.title"
            >
              <component :is="item.icon" :class="'h-5 w-5 ' + item.color" aria-hidden="true" />
              <span class="ml-4">{{ item.title }}</span> 
            </router-link>
          </li>
        </ul>
        <!-- <ul class="flex flex-col items-center" v-if="!isHide" @mouseover="isHide = true" @mouseleave="isHide = false">
          <li class="relative py-3 h-11" v-for="(item, index) in menuItems.sort((a, b) => a.name - b.name )" :key="index">
            <router-link
              class="inline-flex items-center w-full text-sm my-0.5 transition-colors duration-150 hover:text-gray-800"
              :to="{ name: item.name }"
              :title="item.title"
            >
              <component :is="item.icon" :class="'h-5 w-5 ' + item.color" aria-hidden="true" />
            </router-link>
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
    const routeItems = ref<MenuItem[]>(navigation)
    const menuItems = routeItems.value.sort((a, b) => a.title.localeCompare(b.title))
    const isPagesMenuOpen = ref(false)
    const isSideMenuOpen = ref(false)
    const isHide = ref(true)

    const togglePagesMenu = () => {
      isSideMenuOpen.value = !isSideMenuOpen.value
    }
    const closeSideMenu = () => {
      isSideMenuOpen.value = false
    }
    watch(route, () => {
      console.log(menuItems)
      console.log(route.name)
    })


    return {
      isPagesMenuOpen,
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
