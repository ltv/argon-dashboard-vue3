<template>
  <div v-if="!isAuthenticated">
    <div
      class="relative w-full bg-gradient-to-r from-left-bar-indigo to-[#825ee4] py-24 lg:py-32 lg:pt-40"
    >
      <div
        class="container xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-3.75"
      >
        <div class="text-center mb-12">
          <div class="flex flex-wrap -mx-3.75 justify-center px-3.75">
            <div class="md:flex-9 md:max-w-9/12 lg:flex-8 lg:max-w-2/3">
              <h1 class="text-white font-semibold">
                Welcome to Fancy Dashboard Pro Laravel Live Preview.
              </h1>
              <p class="text-light mt-4 mb-0">
                Log in and see how you can save more than 150 hours of work with CRUDs for managing:
                #users, #roles, #items, #categories, #tags and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute pointer-events-none overflow-hidden w-full top-auto bottom-0 inset-x-0">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <div
      class="container relative xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-4"
    >
      <div class="relative lg:max-w-1/2 md:max-w-2/3 w-full mx-auto md:px-1.5 -mt-32 mb-20">
        <el-card class="bg-secondary text-center">
          <template #header>
            <div class="text-muted text-center mt-1.5 mb-6"><small>Sign up with</small></div>
            <div class="flex flex-nowrap text-center justify-center pb-7.5">
              <el-button class="bg-white border-white" href="#">
                <img src="@/assets/images/github.png" alt="" class="h-4 w-4" />
                <span class="pl-4 text-primary-blue">Github</span>
              </el-button>
              <el-button class="bg-white border-white ml-7" href="#">
                <img src="@/assets/images/google.png" alt="" class="h-4 w-4" />
                <span class="pl-4 text-primary-blue">Google</span>
              </el-button>
            </div>
          </template>
          <div class="content-center items-center w-full lg:p-6">
            <div class="text-muted text-center mb-5">
              <small>Or sign up with credentials </small>
            </div>
            <el-form ref="form" :model="formData" class="authentication-form pb-6">
              <el-form-item class="mb-6 rounded-md" prop="username">
                <div
                  class="authentication-form-icon z-10 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                >
                  <div class="w-3.5 h-[13.76px]">
                    <AcademicCapIcon class="w-4 h-4 text-[#adb5bd]" />
                  </div>
                </div>
                <el-input placeholder="Name" v-model="formData.username" />
              </el-form-item>
              <el-form-item class="mb-6 rounded-md" prop="email">
                <div
                  class="authentication-form-icon z-10 absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none"
                >
                  <div class="w-3.5 h-[13.76px]">
                    <MailIcon class="w-4 h-4 text-[#adb5bd]" />
                  </div>
                </div>
                <el-input type="email" placeholder="Email" v-model="formData.email" />
              </el-form-item>
              <el-form-item class="mb-6 rounded-md" prop="type">
                <div
                  class="authentication-form-icon z-10 absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none"
                >
                  <div class="w-3.5 h-[13.76px]">
                    <IdentificationIcon class="w-4 h-4 text-[#adb5bd]" />
                  </div>
                </div>
                <el-select
                  v-model="formData.usrType"
                  placeholder="User Type"
                  class="w-full"
                  popper-class="item-input-popper"
                >
                  <el-option
                    v-for="item in userType"
                    :key="item.id"
                    :label="item.nameType"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item class="mb-6 rounded-md" prop="password">
                <div
                  class="authentication-form-icon z-10 absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none"
                >
                  <div class="w-3.5 h-[13.76px]">
                    <LockOpenIcon class="w-4 h-4 text-[#adb5bd]" />
                  </div>
                </div>
                <el-input type="password" placeholder="Password" v-model="formData.password" />
              </el-form-item>
              <el-form-item class="mb-6 rounded-md" prop="password">
                <div
                  class="authentication-form-icon z-10 absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none"
                >
                  <div class="w-3.5 h-[13.76px]">
                    <LockOpenIcon class="w-4 h-4 text-[#adb5bd]" />
                  </div>
                </div>
                <el-input
                  type="password"
                  placeholder="Confirm Password"
                  v-model="formData.password"
                />
              </el-form-item>
              <el-form-item class="mb-6 rounded-md">
                <div class="italic">
                  <span class="text-0.8125 text-muted font-normal">
                    password strength: <strong class="text-success">strong</strong>
                  </span>
                </div>
              </el-form-item>
              <el-form-item class="mb-6">
                <el-checkbox class="w-4 h-4 text-muted font-normal"
                  >I agree with the
                  <a href="#!" class="text-primary-blue hover:text-primary-blue-active"
                    >Privacy Policy</a
                  >
                </el-checkbox>
              </el-form-item>
            </el-form>
            <el-button type="primary"> Create account </el-button>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import useStore from 'store'
import { MailIcon, AcademicCapIcon, IdentificationIcon, LockOpenIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: {
    MailIcon,
    AcademicCapIcon,
    IdentificationIcon,
    LockOpenIcon,
  },
  setup() {
    const form = ref<ElementForm>()
    const store = useStore()

    const isAuthenticated = computed<boolean>(() => store.auth.getAuthenticationState)
    const formData = ref({
      username: '',
      email: '',
      usrType: '',
      password: '',
    })

    const userType = [
      {
        id: 1,
        nameType: 'Admin',
      },
      {
        id: 2,
        nameType: 'Creator',
      },
      {
        id: 3,
        nameType: 'Member',
      },
    ]

    return {
      isAuthenticated,
      userType,
      form,
      formData,
    }
  },
})
</script>

<style lang="scss">
.item-input-popper {
  .el-select-dropdown__item.selected {
    @apply text-primary-blue;
  }
}
</style>
