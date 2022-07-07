<template>
  <div
    class="container xl:max-w-5.75xl lg:max-w-4.5xl md:max-w-2.625xl sm:max-w-0.25xl w-full lg:h-14 h-10 flex flex-nowrap basis-auto justify-between items-center mx-auto lg:px-3.75"
  >
    <div class="mr-9 pt-1.5">
      <a class="inline-block py-2.5 whitespace-nowrap w-[101.45px]" href="#">
        <img class="h-7.5" alt="..." src="@/assets/images/white.png" />
      </a>
    </div>
    <div class="relative inline-block lg:hidden w-11">
      <div class="flex items-center">
        <el-dropdown placement="bottom-end" trigger="click" popper-class="auth-menu-popper">
          <MenuIcon class="cursor-pointer h-8 w-8 text-secondary" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <a class="inline-block whitespace-nowrap w-[121.75px] pb-2.5" href="#">
                  <img class="h-9" alt="..." src="@/assets/images/blue.png" />
                </a>
                <div class="absolute right-0 top-1.5">
                  <XIcon class="w-6 h-6 text-default hover:text-default active:text-default" />
                </div>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <div class="flex flex-col items-start gap-y-4 pt-4.5 pb-9">
                  <router-link to="/" class="ml-1 py-px text-default text-sm font-medium">
                    Dashboard
                  </router-link>
                  <router-link to="/login" class="ml-1 py-px text-default text-sm font-medium">
                    Login
                  </router-link>
                  <router-link to="/register" class="ml-1 py-px text-default text-sm font-medium">
                    Register
                  </router-link>
                </div>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <div class="flex flex-col items-start gap-y-4 pt-8 w-full">
                  <el-popover
                    placement="top"
                    :width="10"
                    trigger="hover"
                    content="Like us on Github"
                    effect="dark"
                    popper-class="icon-popper"
                  >
                    <template #reference>
                      <el-link
                        href="https://github.com/ltv/fancy-dashboard-vue3"
                        :underline="false"
                        class="py-px text-default font-medium w-full justify-start"
                      >
                        <font-awesome-icon class="w-3.5 h-3.5 pr-0.5" :icon="['fab', 'github']" />
                        Github
                      </el-link>
                    </template>
                  </el-popover>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="hidden basis-auto lg:flex items-center w-full">
      <div class="flex flex-row mr-auto items-center gap-11 md:h-10 lg:h-14">
        <div>
          <router-link
            to="/"
            class="text-secondary text-sm hover:text-secondary-active font-normal"
          >
            Dashboard
          </router-link>
        </div>
        <div>
          <router-link
            to="/login"
            class="text-secondary text-sm hover:text-secondary-active font-normal"
          >
            Login
          </router-link>
        </div>
        <div>
          <router-link
            to="/register"
            class="text-secondary text-sm hover:text-secondary-active font-normal"
          >
            Register
          </router-link>
        </div>
      </div>
      <div class="flex flex-row items-center ml-auto gap-x-5.25 md:h-10 lg:h-14">
        <div>
          <el-popover
            placement="bottom"
            :width="10"
            trigger="hover"
            content="Like us on Github"
            effect="dark"
            popper-class="icon-popper"
          >
            <template #reference>
              <el-link
                href="https://github.com/ltv/fancy-dashboard-vue3"
                :underline="false"
                class="text-secondary hover:text-secondary-active"
              >
                <font-awesome-icon class="w-4.25 h-4.25" :icon="['fab', 'github']" />
              </el-link>
            </template>
          </el-popover>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Shop } from '@element-plus/icons-vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

export default defineComponent({
  name: 'AuthenticationNav',
  components: {
    Shop,
    XIcon,
    MenuIcon,
  },
  setup() {
    return {}
  },
})
</script>
