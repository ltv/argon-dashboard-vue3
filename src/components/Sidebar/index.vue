<template>
  <aside
    aria-labelledby="primary-heading"
    class="z-20 bg-slate-100 flex-shrink-0 w-64 overflow-y-auto h-full rounded-tr-3xl rounded-br-3xl hidden md:block"
  >
    <div class="py-4 text-gray-500">
      <ul class="mt-2">
        <li class="relative px-6 py-3" v-for="(item, index) in menuItems" :key="index">
          <span
            v-if="route.name === item.name"
            class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
            aria-hidden="true"
          ></span>
          <router-link
            :class="{ 'text-gray-800': route.name === item.name }"
            class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
            :to="{ name: item.name }"
            :title="item.title"
          >
            <component :is="item.icon" class="h-5 w-5" aria-hidden="true" />
            <span class="ml-4">{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import navigation from './SidebarNav'

interface MenuItem {
  title: string
  icon: any
  path: string
  name: string
}

export default defineComponent({
  name: 'Sidebar',
  setup() {
    const route = useRoute()
    const menuItems = ref<MenuItem[]>(navigation)
    const isPagesMenuOpen = ref(false)
    const isSideMenuOpen = ref(false)
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
      isSideMenuOpen,
      menuItems,
      route,
      togglePagesMenu,
      closeSideMenu,
    }
  },
})
</script>
