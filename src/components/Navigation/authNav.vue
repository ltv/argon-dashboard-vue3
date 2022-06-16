<template>
  <div
    class="container xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full lg:h-14 h-10 flex flex-nowrap basis-auto justify-between items-center mx-auto lg:px-3.75"
  >
    <div class="mr-9 pt-1.5">
      <a class="inline-block py-2.5 whitespace-nowrap w-[101.45px]" href="#">
        <img
          class="h-7.5"
          alt="..."
          src="https://argon-dashboard-pro-laravel.creative-tim.com/argon/img/brand/white.png"
        />
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
                  <img
                    class="h-9"
                    alt="..."
                    src="https://argon-dashboard-pro-laravel.creative-tim.com/argon/img/brand/blue.png"
                  />
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
                    content="Like us on Facebook"
                    effect="dark"
                    popper-class="icon-popper"
                  >
                    <template #reference>
                      <el-link
                        :underline="false"
                        class="py-px text-default font-medium w-full justify-start"
                      >
                        <font-awesome-icon
                          class="w-3.5 h-3.5 pr-0.5"
                          :icon="['fab', 'facebook-square']"
                        />
                        Facebook
                      </el-link>
                    </template>
                  </el-popover>
                  <el-popover
                    placement="top"
                    :width="10"
                    trigger="hover"
                    content="Like us on Instagram"
                    effect="dark"
                    popper-class="icon-popper"
                  >
                    <template #reference>
                      <el-link
                        :underline="false"
                        class="py-px text-default font-medium w-full justify-start"
                      >
                        <font-awesome-icon
                          class="w-3.5 h-3.5 pr-0.5"
                          :icon="['fab', 'instagram']"
                        />
                        Instagram
                      </el-link>
                    </template>
                  </el-popover>
                  <el-popover
                    placement="top"
                    :width="10"
                    trigger="hover"
                    content="Like us on Twitter"
                    effect="dark"
                    popper-class="icon-popper"
                  >
                    <template #reference>
                      <el-link
                        :underline="false"
                        class="py-px text-default font-medium w-full justify-start"
                      >
                        <font-awesome-icon
                          class="w-3.5 h-3.5 pr-0.5"
                          :icon="['fab', 'twitter-square']"
                        />
                        Twitter
                      </el-link>
                    </template>
                  </el-popover>
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
    <div class="hidden basis-auto lg:flex items-center w-full pb-0.5">
      <div class="flex flex-row mr-auto items-center gap-11 md:h-[40px] lg:h-[56px]">
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
      <div class="flex flex-row items-center ml-auto gap-x-[21px] md:h-[40px] lg:h-[56px]">
        <div class="pt-1">
          <el-popover
            placement="bottom"
            :width="10"
            trigger="hover"
            content="Like us on Facebook"
            effect="dark"
            popper-class="icon-popper"
          >
            <template #reference>
              <el-link :underline="false" class="text-secondary hover:text-secondary-active">
                <font-awesome-icon class="w-[17px] h-[17px]" :icon="['fab', 'facebook-square']" />
              </el-link>
            </template>
          </el-popover>
        </div>
        <div class="pt-1">
          <el-popover
            placement="bottom"
            :width="10"
            trigger="hover"
            content="Like us on Instagram"
            effect="dark"
            popper-class="icon-popper"
          >
            <template #reference>
              <el-link :underline="false" class="text-secondary hover:text-secondary-active">
                <font-awesome-icon class="w-[17px] h-[17px]" :icon="['fab', 'instagram']" />
              </el-link>
            </template>
          </el-popover>
        </div>
        <div class="pt-1">
          <el-popover
            placement="bottom"
            :width="10"
            trigger="hover"
            content="Like us on Twitter"
            effect="dark"
            popper-class="icon-popper"
          >
            <template #reference>
              <el-link :underline="false" class="text-secondary hover:text-secondary-active">
                <font-awesome-icon class="w-[17px] h-[17px]" :icon="['fab', 'twitter-square']" />
              </el-link>
            </template>
          </el-popover>
        </div>
        <div class="pt-1">
          <el-popover
            placement="bottom"
            :width="10"
            trigger="hover"
            content="Like us on Github"
            effect="dark"
            popper-class="icon-popper"
          >
            <template #reference>
              <el-link :underline="false" class="text-secondary hover:text-secondary-active">
                <font-awesome-icon class="w-[17px] h-[17px]" :icon="['fab', 'github']" />
              </el-link>
            </template>
          </el-popover>
        </div>
        <div class="ml-4.75 mr-2 pt-0.5">
          <el-button class="el-button--secondary w-[169.72px] h-[43.5px]">
            <el-icon :size="16" class="text-primary-blue ml-1.5"> <Shop /> </el-icon>
            <span class="text-primary-blue">Purchase now</span>
          </el-button>
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
  name: 'AuthNav',
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

<style lang="scss">
.icon-popper.el-popover.el-popper {
  @apply transition-all duration-300 p-1 min-w-fit min-h-fit rounded-md #{!important};
}
.auth-menu-popper.el-popper {
  @apply border shadow-card w-[94%] md:w-[95.5%] lg:hidden rounded-md p-6;
  @apply top-2.5 mx-2 inset-x-1 #{!important};
  .el-dropdown-menu.el-dropdown-menu--default {
    @apply p-0;
  }
  .el-dropdown-menu__item--divided {
    @apply border-[#e4e4e5];
  }
  .el-dropdown-menu__item {
    @apply p-0 m-0;
    &:hover {
      @apply bg-white;
    }
  }
  .el-popper__arrow {
    @apply hidden;
  }
}
</style>
