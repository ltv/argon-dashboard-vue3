<template>
  <div class="w-full grid grid-cols-3 gap-7">
    <!-- Left side -->
    <div class="col-span-2 col-left">
      <!-- Indicator section -->
      <div class="grid grid-cols-6 gap-7">
        <div class="col-span-3">
          <el-card
            class="border-white"
            :body-style="{ 'padding-top': '16px', 'padding-bottom': '16px' }"
          >
            <div class="flex flex-wrap">
              <div class="basis-0 grow">
                <div class="card-header">
                  <h5 class="font-semibold text-0.8125 text-muted mb-0">TOTAL TRAFFIC</h5>
                </div>
                <h2 class="text-xl text-[#32325d] font-semibold mb-0 leading-7.5">350,897</h2>
              </div>
              <div
                class="w-12 h-12 text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#f5365c] to-[#f56036]"
              >
                <font-awesome-icon :icon="['fas', 'hand-point-up']" size="lg" />
              </div>
            </div>
            <p class="mt-4 mb-0 text-sm">
              <span class="text-success mr-2 inline">
                <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
                3.48%
              </span>
              <span class="whitespace-nowrap text-normal">Since last month</span>
            </p>
          </el-card>
        </div>
        <div class="col-span-3">
          <el-card
            class="border-white"
            :body-style="{ 'padding-top': '16px', 'padding-bottom': '16px' }"
          >
            <div class="flex flex-wrap">
              <div class="basis-0 grow">
                <div class="card-header">
                  <h5 class="font-semibold text-0.8125 text-muted mb-0">PERFORMANCE</h5>
                </div>
                <h2 class="text-xl text-[#32325d] font-semibold mb-0 leading-7.5">49,65%</h2>
              </div>
              <div
                class="w-12 h-12 text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#11cdef] to-[#1171ef]"
              >
                <font-awesome-icon :icon="['fas', 'chart-simple']" size="lg" />
              </div>
            </div>
            <p class="mt-4 mb-0 text-sm">
              <span class="text-success mr-2 inline">
                <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
                3.48%
              </span>
              <span class="whitespace-nowrap text-normal">Since last month</span>
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
              <el-button class="el-button--secondary text-sky-700" size="small">Settings</el-button>
            </div>
          </template>
          <!-- USER INFORMATION -->
          <div class="user-info">
            <h6>USER INFORMATION</h6>
            <div class="user-form">
              <el-form :model="userForm" label-position="top">
                <el-form-item label="Name">
                  <el-input v-model="userForm.name" placeholder="Admin" />
                </el-form-item>
                <el-form-item label="Email">
                  <el-input v-model="userForm.mail" placeholder="admin@argon.com" />
                </el-form-item>
                <el-form-item label="Profile photo">
                  <el-input placeholder="demo.png">
                    <template #append>Browse</template>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="success">Save</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <!-- Password -->
          <div class="pass-info">
            <h6>PASSWORD</h6>
            <div class="pass-form">
              <el-form :model="passForm" label-position="top" show-password>
                <el-form-item label="Current Password">
                  <el-input
                    v-model="passForm.oldPass"
                    type="password"
                    placeholder="Current Password"
                  />
                </el-form-item>
                <el-form-item label="New Password">
                  <el-input v-model="passForm.newPass" type="password" placeholder="New Password" />
                </el-form-item>
                <el-form-item label="Confirm New Password">
                  <el-input
                    v-model="passForm.confirmPass"
                    type="password"
                    placeholder="Confirm New Password"
                  />
                </el-form-item>
                <el-form-item>
                  <el-button type="success">Change Password</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-card>
      </div>
    </div>
    <!-- End edit profile -->

    <!-- Right side -->
    <div class="col-right">
      <div class="grid grid-flow-row grid-cols-6 gap-7">
        <!-- Admin card -->
        <div class="col-span-6">
          <el-card
            class="text-center border-slate-100"
            :body-style="{ padding: '0px', position: 'relative' }"
          >
            <img alt="..." src="@/assets/images/throne.jpg" />
            <div class="justify-center">
              <el-link :underline="false" class="card-avatar-profile">
                <el-avatar
                  :size="!isHover ? 140 : 146"
                  @mouseover="hoverCheck(true)"
                  @mouseleave="hoverCheck(false)"
                  src="@/assets/images/tywin_lannister.jpg"
                  class="transition-all border-white border-4"
                />
              </el-link>
            </div>
            <div class="text-center border-0 pb-6 card-header">
              <div class="flex justify-between">
                <div class="ml-4 z-0">
                  <el-button class="shadow-lg w-16" size="small" type="info">Connect</el-button>
                </div>
                <div class="mr-4 z-0">
                  <el-button class="shadow-lg w-16" size="small" type="default">Message</el-button>
                </div>
              </div>
            </div>
            <div class="mt-8">
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
                <h3 class="font-semibold pb-2">Admin<span class="font-thin">, 27</span></h3>
                <h5 class="font-light">Bucharest, Romania</h5>
              </div>
              <div class="text-center text-card-title">
                <h3 class="font-semibold pb-2">
                  Solution Manager - Creative Tim Officer<span class="font-thin">, 27</span>
                </h3>
                <h5 class="font-light">University of Computer Science</h5>
              </div>
            </div>
          </el-card>
        </div>
        <!-- End admin -->

        <!-- Progress track -->
        <div class="col-span-6">
          <el-card class="mb-7.5 border-none">
            <template #header>
              <h3 class="cursor-auto mb-0 text-card-title">Progress track</h3>
            </template>
            <div class="demo-progress">
              <div class="flex flex-col gap-3">
                <div class="flex gap-5 items-center">
                  <div>
                    <el-link :underline="false" class="card-avatar-profile">
                      <el-avatar
                        :size="!isHover ? 48 : 48"
                        @mouseover="hoverCheck(true)"
                        @mouseleave="hoverCheck(false)"
                        src="@/assets/images/tywin_lannister.jpg"
                        class="transition-all border-white border-4"
                      />
                    </el-link>
                  </div>
                  <el-progress :percentage="20" :show-text="false" :color="customColors" />
                </div>
                <div class="flex gap-5 items-center">
                  <div>
                    <el-link :underline="false" class="card-avatar-profile">
                      <el-avatar
                        :size="!isHover ? 48 : 48"
                        @mouseover="hoverCheck(true)"
                        @mouseleave="hoverCheck(false)"
                        src="@/assets/images/tywin_lannister.jpg"
                        class="transition-all border-white border-4"
                      />
                    </el-link>
                  </div>
                  <el-progress :percentage="20" :show-text="false" :color="customColors" />
                </div>
                <div class="flex gap-5 items-center">
                  <div>
                    <el-link :underline="false" class="card-avatar-profile">
                      <el-avatar
                        :size="!isHover ? 48 : 48"
                        @mouseover="hoverCheck(true)"
                        @mouseleave="hoverCheck(false)"
                        src="@/assets/images/tywin_lannister.jpg"
                        class="transition-all border-white border-4"
                      />
                    </el-link>
                  </div>
                  <el-progress :percentage="20" :show-text="false" :color="customColors" />
                </div>
                <div class="flex gap-5 items-center">
                  <div>
                    <el-link :underline="false" class="card-avatar-profile">
                      <el-avatar
                        :size="!isHover ? 48 : 48"
                        @mouseover="hoverCheck(true)"
                        @mouseleave="hoverCheck(false)"
                        src="@/assets/images/tywin_lannister.jpg"
                        class="transition-all border-white border-4"
                      />
                    </el-link>
                  </div>
                  <el-progress :percentage="20" :show-text="false" :color="customColors" />
                </div>
                <div class="flex gap-5 items-center">
                  <div>
                    <el-link :underline="false" class="card-avatar-profile">
                      <el-avatar
                        :size="!isHover ? 48 : 48"
                        @mouseover="hoverCheck(true)"
                        @mouseleave="hoverCheck(false)"
                        src="@/assets/images/tywin_lannister.jpg"
                        class="transition-all border-white border-4"
                      />
                    </el-link>
                  </div>
                  <el-progress :percentage="20" :show-text="false" :color="customColors" />
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
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  name: 'Profile',
  components: {},
  setup(_) {
    const customColors = [
      { color: '#f56c6c', percentage: 20 },
      { color: '#e6a23c', percentage: 40 },
      { color: '#5cb87a', percentage: 60 },
      { color: '#1989fa', percentage: 80 },
      { color: '#6f7ad3', percentage: 100 },
    ]

    const userForm = reactive({
      name: '',
      email: '',
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
    }
  },
})
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 100%;
}
</style>
