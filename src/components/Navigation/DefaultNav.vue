<template>
  <div
    class="flex items-center bg-default border mx-0 py-2 px-3.25 pl-2.75 md:px-7.25 shadow-sm h-18.5 md:h-19.75"
    :class="{
      'bg-indigo-410 border-indigo-410 border-b-slate-50/10': !route.meta.isDarkBackground,
      'border-default border-b-cyan-30': route.meta.isDarkBackground,
    }"
  >
    <div class="w-full items-center justify-between">
      <div class="w-full flex basis-auto items-center">
        <div
          class="transition-all duration-300 mr-auto sm:mr-4 sm:transform-none sm:block overflow-hidden"
          :class="{ 'w-0 sm:w-full': isSearchOpen, 'w-full': !isSearchOpen }"
        >
          <SearchBar @close-search="setSearchOpen(true)" />
        </div>
        <div
          class="transition-all duration-300 flex flex-1 flex-row ml-0 md:ml-auto items-center mt-0 text-slate-50 gap-7.25 md:gap-7.5"
          :class="[!isSearchOpen ? 'w-0 overflow-hidden sm:flex' : 'w-full']"
        >
          <div class="relative inline-block lg:hidden text-white">
            <div class="flex items-center">
              <MenuIcon v-if="!isSBOpen" class="cursor-pointer h-6 w-6" @click="handleMenuClick" />
              <MenuAlt1Icon v-else class="cursor-pointer h-6 w-6" @click="handleMenuClick" />
            </div>
          </div>
          <div class="relative inline-block sm:hidden">
            <div class="flex items-center">
              <SearchCircleIcon
                v-if="!isSBPin && isSearchOpen"
                class="cursor-pointer w-4.5 h-4.5 text-slate-50 hover:text-slate-300"
                :class="{
                  'text-dark-lighter hover:text-indigo-410': route.meta.isDarkBackground,
                }"
                @click="setSearchOpen(false)"
              />
            </div>
          </div>
          <div class="relative inline-block pt-1">
            <el-dropdown
              placement="bottom-end"
              trigger="click"
              popper-class="notification-popper"
              @visible-change="clickIconBell = !clickIconBell"
            >
              <div>
                <el-icon
                  :size="20"
                  class="cursor-pointer w-4.5 h-4.5 indigo-410 text-slate-50 hover:text-slate-300"
                  :class="{
                    'text-slate-300': clickIconBell,
                    'text-dark-lighter hover:text-indigo-410': route.meta.isDarkBackground,
                  }"
                >
                  <BellFilled />
                </el-icon>
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item class="m-0 hover:bg-white">
                    <div class="flex items-center w-full py-2.5 cursor-default">
                      <span class="text-sm text-slate-400 font-semibold m-0">
                        You have <strong class="text-primary">13</strong> notifications.
                      </span>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item divided v-for="index in 5" :key="index">
                    <div class="flex flex-row items-center w-full py-2.75">
                      <div class="flex w-auto">
                        <el-avatar :size="48" :src="John_Snow_Url" />
                      </div>
                      <div class="basis-0 grow w-full ml-4">
                        <div class="flex justify-between items-center">
                          <div>
                            <h4 class="mb-0">John Snow</h4>
                          </div>
                          <div class="text-right">
                            <span class="text-90 font-normal text-gray-400">2 hrs ago</span>
                          </div>
                        </div>
                        <p class="mb-0 text-sm leading-relaxed">
                          Let's meet at Starbucks at 11:30. Wdyt?
                        </p>
                      </div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item divided class="m-0">
                    <div class="flex items-center w-full py-2">
                      <a
                        href="#!"
                        class="mx-auto text-center text-primary font-semibold text-medium"
                        >View all</a
                      >
                    </div>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div class="relative inline-block pt-1">
            <el-popover
              placement="bottom-end"
              trigger="click"
              popper-class="menu-popper"
              :show-arrow="false"
              @show="clickIconMenu = !clickIconMenu"
              @hide="clickIconMenu = !clickIconMenu"
            >
              <template #reference>
                <el-icon
                  :size="20"
                  class="cursor-pointer w-4.5 h-4.5 text-slate-50 hover:text-slate-300"
                  :class="{
                    'text-slate-300': clickIconMenu,
                    'text-dark-lighter hover:text-indigo-410': route.meta.isDarkBackground,
                  }"
                >
                  <Menu />
                </el-icon>
              </template>
              <div class="w-full m-0">
                <div class="flex flex-wrap w-full m-0">
                  <a
                    href="#!"
                    class="flex flex-col w-2/6 py-3 text-center items-center content-center"
                  >
                    <div class="flex h-13 w-14 content-center items-center text-center">
                      <div class="mx-auto">
                        <font-awesome-icon
                          class="transition-all p-3.4 hover:px-4.5 hover:py-4.4 duration-150 text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#f5365c] to-[#f56036]"
                          :icon="['fas', 'calendar-days']"
                          size="lg"
                        />
                      </div>
                    </div>
                    <span class="text-0.8125 text-white font-semibold mt-2.5">Calendar</span>
                  </a>

                  <a
                    href="#!"
                    class="flex flex-col w-2/6 py-3 text-center items-center content-center"
                  >
                    <div class="flex h-13 w-14 content-center items-center text-center">
                      <div class="mx-auto">
                        <font-awesome-icon
                          class="transition-all p-3.4 hover:p-4.4 duration-150 text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#fb6340] to-[#fbb140]"
                          :icon="['fas', 'envelope']"
                          size="lg"
                        />
                      </div>
                    </div>
                    <span class="text-0.8125 text-white font-semibold mt-2.5">Email</span>
                  </a>

                  <a
                    href="#!"
                    class="flex flex-col w-2/6 py-3 text-center items-center content-center"
                  >
                    <div class="flex h-13 w-14 content-center items-center text-center">
                      <div class="mx-auto">
                        <font-awesome-icon
                          class="transition-all duration-150 px-4 py-3.4 hover:p-4.4 text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#11cdef] to-[#1171ef]"
                          :icon="['fas', 'credit-card']"
                          size="lg"
                        />
                      </div>
                    </div>
                    <span class="text-0.8125 text-white font-semibold mt-2.5">Payments</span>
                  </a>

                  <a
                    href="#!"
                    class="flex flex-col w-2/6 py-3 text-center items-center content-center"
                  >
                    <div class="flex text-center items-center content-center h-13 w-13">
                      <div
                        class="transition-all duration-150 hover:h-13 hover:w-13 h-12 w-12 mx-auto text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#2dce89] to-[#2dcecc]"
                      >
                        <el-icon :size="22" class="cursor-pointer w-8 h-6">
                          <List />
                        </el-icon>
                      </div>
                    </div>
                    <span class="text-0.8125 text-white font-semibold mt-2.5">Reports</span>
                  </a>

                  <a
                    href="#!"
                    class="flex flex-col w-2/6 py-3 text-center items-center content-center"
                  >
                    <div class="flex text-center items-center content-center h-13 w-13">
                      <div
                        class="transition-all duration-150 hover:h-13 hover:w-13 h-12 w-12 mx-auto text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#8965e0] to-[#bc65e0]"
                      >
                        <el-icon :size="22" class="cursor-pointer w-8 h-6">
                          <LocationFilled />
                        </el-icon>
                      </div>
                    </div>
                    <span class="text-0.8125 text-white font-semibold mt-3">Maps</span>
                  </a>

                  <a
                    href="#!"
                    class="flex flex-col w-2/6 py-3 text-center items-center content-center"
                  >
                    <div class="flex text-center items-center content-center h-13 w-13">
                      <div
                        class="transition-all duration-150 hover:h-13 hover:w-13 h-12 w-12 mx-auto text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#ffd600] to-[#beff00]"
                      >
                        <el-icon :size="22" class="cursor-pointer w-8 h-6">
                          <GoodsFilled />
                        </el-icon>
                      </div>
                    </div>
                    <span class="text-0.8125 text-white font-semibold mt-3">Shop</span>
                  </a>
                </div>
              </div>
            </el-popover>
          </div>
        </div>
        <div
          class="flex flex-none flex-row ml-auto md:ml-0 pl-7.5"
          :class="[!isSearchOpen ? 'hidden sm:flex md:flex lg:flex' : '']"
        >
          <el-dropdown placement="bottom-end" trigger="click" popper-class="profile-popper">
            <div class="flex flex-row items-center gap-1 md:gap-2 mb-1">
              <div class="pt-1">
                <el-link :underline="false">
                  <el-avatar :size="37" class="cursor-pointer" :src="Logo_Url" />
                </el-link>
              </div>
              <div class="hidden lg:block">
                <h4>
                  <el-link
                    :underline="false"
                    href="#index"
                    class="text-sm font-semibold text-slate-50 hover:text-slate-300 pt-1"
                    >Admin</el-link
                  >
                </h4>
              </div>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item class="m-0 hover:bg-white">
                  <div class="flex items-center w-full pt-1 cursor-default">
                    <h6 class="truncate m-0 text-primary-dark">WELCOME!</h6>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item class="mx-0 my-2 hover:bg-slate-100 text-zinc-800">
                  <router-link to="/profile" class="flex flex-row items-center w-full h-6 mr-auto">
                    <div class="flex w-auto">
                      <el-icon :size="22" class="cursor-pointer w-5 h-6">
                        <UserFilled />
                      </el-icon>
                    </div>
                    <div class="basis-0 grow w-full ml-4">
                      <span class="mb-0 text-sm font-normal">My profile</span>
                    </div>
                  </router-link>
                </el-dropdown-item>

                <el-dropdown-item
                  divided
                  class="mx-0 mt-2 hover:bg-slate-100 text-zinc-800"
                  @click="handleLogoutClick"
                >
                  <div class="flex flex-row items-center w-full h-6">
                    <div class="flex w-auto">
                      <el-icon :size="20" class="cursor-pointer w-5 h-6">
                        <CircleClose />
                      </el-icon>
                    </div>
                    <div class="basis-0 grow w-full ml-4">
                      <span class="mb-0 text-sm font-normal">Logout</span>
                    </div>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
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
} from '@element-plus/icons-vue'
import { MenuIcon, MenuAlt1Icon, SearchIcon, SearchCircleIcon } from '@heroicons/vue/outline'
import useStore from 'store'
import { useRoute } from 'vue-router'
import Logo_Url from '@/assets/images/ltv_logo.png'
import John_Snow_Url from '@/assets/images/John_Snow.png'
export default defineComponent({
  name: 'DefaultNav',
  components: {
    Search,
    BellFilled,
    Menu,
    LocationFilled,
    List,
    GoodsFilled,
    UserFilled,
    CircleClose,
    SearchIcon,
    MenuIcon,
    MenuAlt1Icon,
    SearchCircleIcon,
  },
  setup() {
    const route: any = useRoute()
    const store = useStore()
    const isPagesMenuOpen = ref(false)
    const isSideMenuOpen = ref(false)
    const isSearchOpen = ref(true)
    const clickIconBell = ref(false)
    const clickIconMenu = ref(false)
    const togglePagesMenu = () => {
      isSideMenuOpen.value = !isSideMenuOpen.value
    }
    const closeSideMenu = () => {
      isSideMenuOpen.value = false
    }

    const isSBPin = computed(() => store.dashboard.isSBPin)
    const isSBOpen = computed(() => store.dashboard.isSBOpen)

    const handleMenuClick = () => {
      store.dashboard.toggleMenu()
    }

    const handleLogoutClick = () => {
      store.auth.actLogout()
    }

    const setSearchOpen = (v: boolean) => (isSearchOpen.value = v)

    return {
      isPagesMenuOpen,
      isSideMenuOpen,
      isSearchOpen,
      isSBPin,
      isSBOpen,
      clickIconBell,
      clickIconMenu,
      route,
      handleLogoutClick,
      handleMenuClick,
      setSearchOpen,
      togglePagesMenu,
      closeSideMenu,
      Logo_Url,
      John_Snow_Url,
    }
  },
})
</script>
