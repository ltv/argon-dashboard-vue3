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
        <div
          class="flex flex-row md:ml-auto items-center mt-0 text-slate-50 gap-8"
          :class="[!isSearchOpen ? 'hidden sm:flex md:flex lg:flex' : '']"
        >
          <div class="relative inline-block lg:hidden">
            <div class="flex items-center">
              <MenuIcon v-if="!isPin" class="cursor-pointer w-6 h-6" @click="setIsPin(true)" />
              <MenuAlt1Icon v-if="isPin" class="cursor-pointer w-6 h-6" @click="setIsPin(false)" />
            </div>
          </div>
          <div class="relative inline-block sm:hidden">
            <div class="flex items-center">
              <SearchCircleIcon
                v-if="!isPin && isSearchOpen"
                class="cursor-pointer w-5 h-5"
                @click="setSearchOpen(false)"
              />
            </div>
          </div>
          <div class="relative inline-block pt-1">
            <el-dropdown placement="bottom-end" trigger="click" popper-class="notificationClass">
              <div class="el-dropdown-link">
                <el-icon
                  :size="22"
                  class="cursor-pointer w-5 h-5 text-slate-50 hover:text-slate-300"
                >
                  <BellFilled />
                </el-icon>
              </div>
              <!-- <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item class="m-0 hover:bg-white">
                    <div class="flex items-center w-full py-3 cursor-default">
                      <h6 class="text-base text-slate-400 font-semibold m-0">
                        You have <strong class="text-primary">13</strong> notifications.
                      </h6>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item divided class="m-0 hover:bg-slate-50">
                    <div class="flex flex-row items-center w-full py-3">
                      <div class="flex w-auto">
                        <el-avatar :size="48" src="src/assets/images/Jon_Snow.png" />
                      </div>
                      <div class="basis-0 grow w-full ml-4">
                        <div class="flex justify-between items-center">
                          <div>
                            <h4 class="mb-0">John Snow</h4>
                          </div>
                          <div class="text-right">
                            <p class="text-sm">2 hrs ago</p>
                          </div>
                        </div>
                        <p class="mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                      </div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item divided class="m-0 hover:bg-slate-50">
                    <div class="flex flex-row items-center w-full py-3">
                      <div class="flex w-auto">
                        <el-avatar :size="48" src="src/assets/images/Jon_Snow.png" />
                      </div>
                      <div class="basis-0 grow w-full ml-4">
                        <div class="flex justify-between items-center">
                          <div>
                            <h4 class="mb-0">John Snow</h4>
                          </div>
                          <div class="text-right">
                            <p class="text-sm">2 hrs ago</p>
                          </div>
                        </div>
                        <p class="mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                      </div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item divided class="m-0 hover:bg-slate-50">
                    <div class="flex flex-row items-center w-full py-3">
                      <div class="flex w-auto">
                        <el-avatar :size="48" src="src/assets/images/Jon_Snow.png" />
                      </div>
                      <div class="basis-0 grow w-full ml-4">
                        <div class="flex justify-between items-center">
                          <div>
                            <h4 class="mb-0">John Snow</h4>
                          </div>
                          <div class="text-right">
                            <p class="text-sm">2 hrs ago</p>
                          </div>
                        </div>
                        <p class="mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                      </div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item divided class="m-0 hover:bg-slate-50">
                    <div class="flex flex-row items-center w-full py-3">
                      <div class="flex w-auto">
                        <el-avatar :size="48" src="src/assets/images/Jon_Snow.png" />
                      </div>
                      <div class="basis-0 grow w-full ml-4">
                        <div class="flex justify-between items-center">
                          <div>
                            <h4 class="mb-0">John Snow</h4>
                          </div>
                          <div class="text-right">
                            <p class="text-sm">2 hrs ago</p>
                          </div>
                        </div>
                        <p class="mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                      </div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item divided class="m-0 hover:bg-slate-50">
                    <div class="flex flex-row items-center w-full py-3">
                      <div class="flex w-auto">
                        <el-avatar :size="48" src="src/assets/images/Jon_Snow.png" />
                      </div>
                      <div class="basis-0 grow w-full ml-4">
                        <div class="flex justify-between items-center">
                          <div>
                            <h4 class="mb-0">John Snow</h4>
                          </div>
                          <div class="text-right">
                            <p class="text-sm">2 hrs ago</p>
                          </div>
                        </div>
                        <p class="mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                      </div>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item divided class="m-0">
                    <div class="flex items-center w-full py-3">
                      <a href="#!" class="mx-auto text-center text-primary font-bold text-base"
                        >View all</a
                      >
                    </div>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template> -->
            </el-dropdown>
          </div>
          <div class="relative inline-block pt-1">
            <el-popover placement="bottom-end" trigger="click" popper-class="MenuPopperClass">
              <template #reference>
                <el-icon
                  :size="22"
                  class="cursor-pointer w-5 h-5 text-slate-50 hover:text-slate-300"
                >
                  <Menu />
                </el-icon>
              </template>
              <!-- <div class="w-full m-0">
                <div class="flex flex-wrap px-2 w-full m-0">
                  <a
                    href="#!"
                    class="flex flex-col w-2/6 py-4 text-center items-center content-center"
                  >
                    <div class="flex h-16 w-16 content-center items-center text-center">
                      <div class="mx-auto">
                        <font-awesome-icon
                          class="transition-all duration-150 hover:py-5 hover:px-5.5 text-center inline-flex items-center justify-center rounded-full py-4.5 px-5 text-white bg-gradient-to-r from-[#f5365c] to-[#f56036]"
                          :icon="['fas', 'calendar-days']"
                          size="lg"
                        />
                      </div>
                    </div>
                    <span class="font-0.8125 text-white font-semibold mt-3">Calendar</span>
                  </a>

                  <a
                    href="#!"
                    class="flex flex-col w-2/6 py-4 text-center items-center content-center"
                  >
                    <div class="flex h-16 w-16 content-center items-center text-center">
                      <div class="mx-auto">
                        <font-awesome-icon
                          class="transition-all duration-150 hover:p-5 text-center inline-flex items-center justify-center rounded-full p-4.5 text-white bg-gradient-to-r from-[#fb6340] to-[#fbb140]"
                          :icon="['fas', 'envelope']"
                          size="lg"
                        />
                      </div>
                    </div>
                    <span class="font-0.8125 text-white font-semibold mt-3">Email</span>
                  </a>

                  <a
                    href="#!"
                    class="flex flex-col w-2/6 py-4 text-center items-center content-center"
                  >
                    <div class="flex h-16 w-16 content-center items-center text-center">
                      <div class="mx-auto">
                        <font-awesome-icon
                          class="transition-all duration-150 hover:p-5 text-center inline-flex items-center justify-center rounded-full p-4.5 text-white bg-gradient-to-r from-[#11cdef] to-[#1171ef]"
                          :icon="['fas', 'credit-card']"
                          size="lg"
                        />
                      </div>
                    </div>
                    <span class="font-0.8125 text-white font-semibold mt-3">Payments</span>
                  </a>

                  <a
                    href="#!"
                    class="flex flex-col w-2/6 py-4 text-center items-center content-center"
                  >
                    <div class="flex text-center items-center content-center h-16 w-16">
                      <div
                        class="transition-all duration-150 hover:h-15 hover:w-15 h-14 w-14 mx-auto text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#2dce89] to-[#2dcecc]"
                      >
                        <el-icon :size="22" class="cursor-pointer w-8 h-6">
                          <List />
                        </el-icon>
                      </div>
                    </div>
                    <span class="font-0.8125 text-white font-semibold mt-3">Reports</span>
                  </a>

                  <a
                    href="#!"
                    class="flex flex-col w-2/6 py-4 text-center items-center content-center"
                  >
                    <div class="flex text-center items-center content-center h-16 w-16">
                      <div
                        class="transition-all duration-150 hover:h-15 hover:w-15 h-14 w-14 mx-auto text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#8965e0] to-[#bc65e0]"
                      >
                        <el-icon :size="22" class="cursor-pointer w-8 h-6">
                          <LocationFilled />
                        </el-icon>
                      </div>
                    </div>
                    <span class="font-0.8125 text-white font-semibold mt-3">Maps</span>
                  </a>

                  <a
                    href="#!"
                    class="flex flex-col w-2/6 py-4 text-center items-center content-center"
                  >
                    <div class="flex text-center items-center content-center h-16 w-16">
                      <div
                        class="transition-all duration-150 hover:h-15 hover:w-15 h-14 w-14 mx-auto text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#ffd600] to-[#beff00]"
                      >
                        <el-icon :size="22" class="cursor-pointer w-8 h-6">
                          <GoodsFilled />
                        </el-icon>
                      </div>
                    </div>
                    <span class="font-0.8125 text-white font-semibold mt-3">Shop</span>
                  </a>
                </div>
              </div> -->
            </el-popover>
          </div>
        </div>
        <div
          class="flex flex-none flex-row ml-auto md:ml-0 pl-7"
          :class="[!isSearchOpen ? 'hidden sm:flex md:flex lg:flex' : '']"
        >
          <el-dropdown placement="bottom-end" trigger="click" popper-class="profilePopperClass">
            <div class="flex flex-row items-center gap-2">
              <div class="pt-1">
                <el-link :underline="false">
                  <el-avatar
                    :size="40"
                    class="cursor-pointer"
                    src="src/assets/images/Jon_Snow.png"
                  />
                </el-link>
              </div>
              <div class="hidden lg:block">
                <h4>
                  <el-link
                    :underline="false"
                    href="#index"
                    class="text-base font-semibold text-slate-50 hover:text-slate-300"
                    >John Snow</el-link
                  >
                </h4>
              </div>
            </div>
            <!-- <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item class="m-0 hover:bg-white">
                  <div class="flex items-center w-full pt-2 cursor-default">
                    <h6 class="truncate m-0 text-[#32325d]">WELCOME!</h6>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item class="mx-0 my-2 hover:bg-slate-50 text-zinc-800">
                  <div class="flex flex-row items-center w-full h-8">
                    <div class="flex w-auto">
                      <el-icon :size="22" class="cursor-pointer w-5 h-6">
                        <UserFilled />
                      </el-icon>
                    </div>
                    <div class="basis-0 grow w-full ml-4">
                      <div class="">
                        <div>
                          <span class="mb-0 text-sm font-normal">My profile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-dropdown-item>

                <el-dropdown-item divided class="mx-0 mt-2 hover:bg-slate-50 text-zinc-800">
                  <div class="flex flex-row items-center w-full h-8">
                    <div class="flex w-auto">
                      <el-icon :size="22" class="cursor-pointer w-5 h-6">
                        <CircleClose />
                      </el-icon>
                    </div>
                    <div class="basis-0 grow w-full ml-4">
                      <div class="">
                        <div>
                          <span class="mb-0 text-sm font-normal">Logout</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template> -->
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
