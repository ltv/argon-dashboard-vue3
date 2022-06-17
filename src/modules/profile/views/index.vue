<template>
  <div
    class="background-url bg-top bg-cover pt-[100px] pb-[330px] md:pb-[250px] lg:pt-[155px] lg:pb-[272px] relative"
  >
    <span
      class="absolute block w-full inset-0 opacity-90 bg-gradient-to-r from-indigo-850 to-indigo-950"
    ></span>
    <div class="w-full px-4 lg:px-[30px] lg:max-w-[42%] absolute top-[15%] lg:top-1/3 break-normal">
      <h1 class="text-white text-[2.75rem] mb-2">Hello Admin</h1>
      <p class="text-white text-base mb-12 leading-[1.7]">
        This is your profile page. You can see the progress you've made with your work and manage
        your projects or assigned tasks
      </p>
    </div>
  </div>

  <div
    class="w-[93%] mx-auto grid grid-cols-1 gap-y-7 xl:w-[96%] xl:grid xl:grid-cols-3 xl:gap-7 mt-[-20%] md:mt-[-10%] lg:mt-[-5%]"
  >
    <!-- Left side -->
    <div class="col-span-2 col-left order-2 xl:order-none">
      <!-- Indicator section -->
      <div class="grid grid-cols-1 lg:grid-cols-6 gap-7">
        <div class="col-span-3">
          <!-- Left indicator -->
          <el-card
            class="border-white indicator bg-gradient-to-r from-indicator-cyan to-indicator-blue border-0"
          >
            <div class="flex flex-wrap">
              <div class="basis-0 grow">
                <div class="card-header">
                  <h5 class="font-semibold text-0.8125 text-white mb-0">TOTAL TRAFFIC</h5>
                </div>
                <h2 class="text-xl text-white font-semibold mb-0 leading-7.5">350,897</h2>
              </div>
              <div
                class="w-12 h-12 text-center inline-flex items-center justify-center rounded-full text-black bg-white"
              >
                <font-awesome-icon :icon="['fas', 'hand-point-up']" size="lg" />
              </div>
            </div>
            <p class="mt-4 mb-0 text-sm">
              <span class="text-white mr-2 inline">
                <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
                3.48%
              </span>
              <span class="whitespace-nowrap text-indicator-slate">Since last month</span>
            </p>
          </el-card>
        </div>
        <div class="col-span-3">
          <!-- Right indicator -->
          <el-card
            class="border-white indicator bg-gradient-to-r from-left-bar-red to-left-bar-red-light border-0"
          >
            <div class="flex flex-wrap">
              <div class="basis-0 grow">
                <div class="card-header">
                  <h5 class="font-semibold text-0.8125 text-white mb-0">PERFORMANCE</h5>
                </div>
                <h2 class="text-xl text-white font-semibold mb-0 leading-7.5">49,65%</h2>
              </div>
              <div
                class="w-12 h-12 text-center inline-flex items-center justify-center rounded-full text-black bg-white"
              >
                <font-awesome-icon :icon="['fas', 'chart-simple']" size="lg" />
              </div>
            </div>
            <p class="mt-4 mb-0 text-sm">
              <span class="text-white mr-2 inline">
                <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
                3.48%
              </span>
              <span class="whitespace-nowrap text-indicator-slate">Since last month</span>
            </p>
          </el-card>
        </div>
      </div>
      <!-- End Indicator -->

      <!-- Edit profile section -->
      <div class="mt-7">
        <el-card class="items-center border-white">
          <template #header>
            <div class="flex justify-between py-2">
              <h3>Edit Profile</h3>
              <el-button class="text-sky-700" size="small" type="primary">Settings</el-button>
            </div>
          </template>
          <!-- USER INFORMATION -->
          <div class="user-info">
            <div class="user-form">
              <!-- form title -->
              <h6 class="text-xs text-muted py-1 -tracking-tighter uppercase mb-6 leading-6">
                USER INFORMATION
              </h6>
              <div class="lg:pl-6">
                <el-form :model="userForm" label-position="top">
                  <el-form-item label="Name">
                    <el-input v-model="userForm.name" placeholder="Admin" />
                  </el-form-item>
                  <el-form-item label="Email">
                    <el-input v-model="userForm.mail" placeholder="admin@argon.com" />
                  </el-form-item>

                  <el-form-item label="Profile photo">
                    <el-upload class="w-full">
                      <el-input placeholder="demo.png" class="input-upload">
                        <template #append>Browse</template>
                      </el-input>
                    </el-upload>
                  </el-form-item>
                </el-form>
                <div class="flex justify-center mt-4.5">
                  <el-button type="success">Save</el-button>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <!-- Password -->
          <div class="pass-info">
            <div class="pass-form">
              <!-- Form title -->
              <h6 class="text-xs text-muted py-1 -tracking-tighter uppercase mb-6 leading-6">
                PASSWORD
              </h6>
              <div class="lg:pl-6">
                <el-form :model="passForm" label-position="top" show-password>
                  <el-form-item label="Current Password">
                    <el-input
                      v-model="passForm.oldPass"
                      type="password"
                      placeholder="Current Password"
                    />
                  </el-form-item>
                  <el-form-item label="New Password">
                    <el-input
                      v-model="passForm.newPass"
                      type="password"
                      placeholder="New Password"
                    />
                  </el-form-item>
                  <el-form-item label="Confirm New Password">
                    <el-input
                      v-model="passForm.confirmPass"
                      type="password"
                      placeholder="Confirm New Password"
                    />
                  </el-form-item>
                </el-form>
                <div class="flex justify-center mt-4.5">
                  <el-button type="success">Change password</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </div>
    <!-- End edit profile -->

    <!-- Right side -->
    <div class="order-1 xl:order-none">
      <div class="grid grid-flow-row grid-cols-6 gap-7">
        <!-- Admin card -->
        <div class="col-span-6">
          <el-card
            class="border-0 text-center border-slate-100"
            :body-style="{ padding: '0px', position: 'relative' }"
          >
            <img alt="..." src="@/assets/images/window-purple-image.jpg" />
            <div class="justify-center p-1">
              <el-link :underline="false" class="card-avatar-profile hover:scale-105">
                <!-- Avatar -->
                <el-avatar
                  :size="!isHover ? 134 : 134"
                  @mouseover="hoverCheck(true)"
                  @mouseleave="hoverCheck(false)"
                  :src="imageUrl"
                  class="transition-all"
                />
              </el-link>
            </div>
            <div class="text-center border-0 pb-6 card-header mt-[100px] md:mt-0 lg:mt-0">
              <div class="flex justify-between">
                <div class="ml-4 z-0">
                  <el-button class="shadow-lg w-16" size="small" type="info">Connect</el-button>
                </div>
                <div class="mr-4 z-0">
                  <el-button class="shadow-lg w-16" size="small" type="default">Message</el-button>
                </div>
              </div>
            </div>
            <div class="md:mt-8 lg:mt-8">
              <div class="flex justify-center gap-x-11">
                <div class="block">
                  <div>
                    <span class="text-[1.1rem] text-normal font-bold">22</span>
                  </div>
                  <div>
                    <span class="text-sm text-[#adb5bd] mb-0">Friends</span>
                  </div>
                </div>
                <div class="block">
                  <div>
                    <span class="text-[1.1rem] text-normal font-bold">10</span>
                  </div>
                  <div>
                    <span class="text-sm text-[#adb5bd] mb-0">Photos</span>
                  </div>
                </div>
                <div class="block">
                  <div>
                    <span class="text-[1.1rem] text-normal font-bold">89</span>
                  </div>
                  <div>
                    <span class="text-sm text-[#adb5bd] mb-0">Comments</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-8">
              <div class="text-center text-card-title">
                <h3 class="text-[17px] mt-6 font-semibold pb-2">
                  Admin<span class="font-thin">, 27</span>
                </h3>
                <h5 class="font-light">Bucharest, Romania</h5>
              </div>
              <div class="text-center text-card-title">
                <h3 class="text-[13px] mt-6 font-semibold pb-2">
                  Solution Manager - Creative Tim Officer
                </h3>
                <h5 class="text-base text-dark-lighter font-normal">
                  University of Computer Science
                </h5>
              </div>
            </div>
          </el-card>
        </div>
        <!-- End admin -->

        <!-- Progress track -->
        <div class="col-span-6">
          <el-card class="border-none">
            <template #header>
              <h3 class="cursor-auto mb-0 text-card-title">Progress track</h3>
            </template>
            <div class="flex flex-col my-[-16px]">
              <div class="flex gap-7 progress items-center">
                <el-link
                  :underline="false"
                  class="card-avatar-profile block flex-none h-12 w-12 overflow-hidden border-[0.2px] rounded-full"
                >
                  <el-avatar
                    :size="!isHover ? 48 : 48"
                    @mouseover="hoverCheck(true)"
                    @mouseleave="hoverCheck(false)"
                    :src="bootstrapLogo"
                    class="transition-all border-white border-0"
                  />
                </el-link>

                <div class="flex-auto">
                  <h5 class="mb-2">Argon Design System</h5>
                  <el-progress :percentage="59" :show-text="false" :color="customColors" />
                </div>
              </div>
              <div class="flex gap-7 progress items-center">
                <el-link
                  :underline="false"
                  class="card-avatar-profile block flex-none h-12 w-12 overflow-hidden border-[0.2px] rounded-full"
                >
                  <el-avatar
                    :size="!isHover ? 48 : 48"
                    @mouseover="hoverCheck(true)"
                    @mouseleave="hoverCheck(false)"
                    :src="angularLogo"
                    class="transition-all border-white border-0"
                  />
                </el-link>

                <div class="flex-auto">
                  <h5 class="mb-2">Angular Now UI Kit PRO</h5>
                  <el-progress :percentage="100" :show-text="false" :color="customColors" />
                </div>
              </div>
              <div class="flex gap-7 progress items-center">
                <el-link
                  :underline="false"
                  class="card-avatar-profile block flex-none h-12 w-12 overflow-hidden border-[0.2px] rounded-full"
                >
                  <el-avatar
                    :size="!isHover ? 48 : 48"
                    @mouseover="hoverCheck(true)"
                    @mouseleave="hoverCheck(false)"
                    :src="sketchLogo"
                    class="transition-all border-white border-0"
                  />
                </el-link>

                <div class="flex-auto">
                  <h5 class="mb-2">Black Dashboard</h5>
                  <el-progress :percentage="70" :show-text="false" :color="customColors" />
                </div>
              </div>
              <div class="flex gap-7 progress items-center">
                <el-link
                  :underline="false"
                  class="card-avatar-profile block flex-none h-12 w-12 overflow-hidden border-[0.2px] rounded-full"
                >
                  <el-avatar
                    :size="!isHover ? 48 : 48"
                    @mouseover="hoverCheck(true)"
                    @mouseleave="hoverCheck(false)"
                    :src="reactLogo"
                    class="transition-all border-white border-0"
                  />
                </el-link>

                <div class="flex-auto">
                  <h5 class="mb-2">React Material Dashboard</h5>
                  <el-progress :percentage="82" :show-text="false" :color="customColors" />
                </div>
              </div>
              <div class="flex gap-7 progress items-center">
                <el-link
                  :underline="false"
                  class="card-avatar-profile block flex-none h-12 w-12 overflow-hidden border-[0.2px] rounded-full"
                >
                  <el-avatar
                    :size="!isHover ? 48 : 48"
                    @mouseover="hoverCheck(true)"
                    @mouseleave="hoverCheck(false)"
                    :src="vueLogo"
                    class="transition-all border-white border-0"
                  />
                </el-link>

                <div class="flex-auto">
                  <h5 class="mb-2">Vue Paper UI Kit PRO</h5>
                  <el-progress :percentage="100" :show-text="false" :color="customColors" />
                </div>
              </div>
            </div>
          </el-card>
        </div>
        <!-- End progress track -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ArrowUpIcon } from '@heroicons/vue/solid'

import imageUrl from '@/assets/images/team-3.jpg'
import reactLogo from '@/assets/images/react.jpg'
import sketchLogo from '@/assets/images/sketch.jpg'
import bootstrapLogo from '@/assets/images/bootstrap.jpg'
import vueLogo from '@/assets/images/vue.jpg'
import angularLogo from '@/assets/images/angular.jpg'
import backGround from '@/assets/images/profile-cover.jpg'

export default defineComponent({
  name: 'Profile',
  components: {
    //Icon
    ArrowUpIcon,
  },
  setup(_) {
    const isHover = ref(false)
    const hoverCheck = (b: boolean) => {
      isHover.value = b
    }

    const customColors = [
      { color: '#fb6340', percentage: 60 },
      { color: '#f5365c', percentage: 80 },
      { color: '#11cdef', percentage: 85 },
      { color: '#2dce89', percentage: 100 },
    ]

    const userForm = reactive({
      name: '',
      mail: '',
    })

    const passForm = reactive({
      oldPass: '',
      newPass: '',
      confirmPass: '',
    })

    return {
      customColors,
      userForm,
      passForm,
      imageUrl,
      bootstrapLogo,
      reactLogo,
      sketchLogo,
      vueLogo,
      angularLogo,
      isHover,
      hoverCheck,
      backGround,
      ArrowUpIcon,
    }
  },
})
</script>

<style lang="scss" scoped>
// Right side
// Cards
:deep(.card-avatar-profile.el-link) .el-link--inner {
  @apply absolute border-[3px] border-[#fff] rounded-full;
}
:deep(.progress) .el-link--inner {
  @apply border-0 #{!important};
}
.background-url {
  @apply bg-[url('@/assets/images/profile-cover.jpg')] #{!important};
}

// Progress
.el-card__body .progress {
  @apply border-b py-5 border-b-[#e9ecef] #{!important};
}
.el-card__body .progress:last-child {
  @apply border-0 border-b-[#e9ecef] #{!important};
}

.el-form-item.el-form-item--default:last-child {
  @apply mb-0;
}

:deep(.el-form-item__label) {
  @apply text-dark-lighter;
}

:deep(.el-input-group__append) {
  @apply px-3 #{!important};
}

:deep(.el-input__inner):focus {
  .el-input-group__append {
    @apply focus:outline-1 focus:outline-blue-400;
  }
}

:deep(.el-input.el-input--default.el-input-group.el-input-group--append):focus-within {
  @apply border border-blue-500 rounded #{!important};
  &.input-upload .el-input__inner {
    @apply focus:border-t-0 focus:border-l-0 focus:border-b-0;
  }
  &.input-upload .el-input-group__append {
    @apply border-0 #{!important};
  }
}
</style>
