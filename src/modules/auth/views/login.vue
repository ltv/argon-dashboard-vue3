<template>
  <div v-if="!isAuthenticated">
    <div
      class="relative w-full bg-gradient-to-r from-indigo-410 to-[#825ee4] py-24 lg:py-32 lg:pt-40"
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
            <div class="md:flex-6 md:max-w-1/2 lg:flex-5 lg:max-w-5/12">
              <h3 class="text-white mt-12 mb-0">
                <span class="font-bold">You can log in with 3 user types:</span>
              </h3>
              <ul class="text-light mt-4 mb-0 pl-0 lg:pl-7.5">
                <li v-for="(account, index) in accounts" :key="index" class="flex">
                  <div class="px-2">{{ index }}.</div>
                  <div class="w-full">
                    Username <strong>{{ account }}</strong> Password <strong>secret</strong>
                  </div>
                </li>
              </ul>
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
      class="container relative xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-3.75 pb-12"
    >
      <div class="relative lg:max-w-5/12 md:max-w-7/12 w-full mx-auto md:px-2 -mt-32">
        <el-card class="bg-secondary text-center pb-8">
          <template #header>
            <div class="text-muted text-center mt-2 mb-4"><small>Sign in with</small></div>
            <div class="pb-6 flex flex-nowrap text-center justify-center">
              <el-button class="bg-white border-white" href="#">
                <img src="@/assets/images/github.png" alt="" class="h-4 w-4" />
                <span class="pl-4 text-indigo-410">Github</span>
              </el-button>
              <el-button class="bg-white border-white" href="#">
                <img src="@/assets/images/google.png" alt="" class="h-4 w-4" />
                <span class="pl-4 text-indigo-410">Google</span>
              </el-button>
            </div>
          </template>
          <div class="content-center items-center w-full lg:p-6">
            <el-form ref="form" :model="formData" :rules="rules" class="authentication-form">
              <el-form-item class="warning-input mb-4 rounded-md" prop="email">
                <div
                  class="z-10 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                >
                  <div class="w-3.5 h-[13.76px]">
                    <MailIcon class="w-4 h-4 text-[#adb5bd]" />
                  </div>
                </div>
                <el-input placeholder="Email" v-model="formData.email" />
              </el-form-item>
              <el-form-item class="mb-6 rounded-md" prop="password">
                <div
                  class="z-10 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                >
                  <div class="w-3.5 h-[13.76px]">
                    <LockOpenIcon class="w-4 h-4 text-[#adb5bd]" />
                  </div>
                </div>
                <el-input type="password" placeholder="Password" v-model="formData.password" />
              </el-form-item>
              <el-form-item class="mb-4">
                <el-checkbox class="text-muted font-normal">Remember me</el-checkbox>
              </el-form-item>
            </el-form>
            <el-button type="primary" @click="handleLoginClick"> Sign in </el-button>
          </div>
        </el-card>
        <div class="flex pt-8">
          <div class="text-sm text-left">
            <router-link
              to="/forgot-password"
              class="text-light text-90 font-normal hover:text-[#b1bbc4]"
            >
              Forgot password?
            </router-link>
          </div>
          <div class="text-sm ml-auto">
            <router-link to="/register" class="text-light text-90 font-normal hover:text-[#b1bbc4]">
              Create new account
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import useStore from 'store'
import { MailIcon, LockOpenIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: {
    MailIcon,
    LockOpenIcon,
  },
  setup() {
    const form = ref<ElementForm>()
    const store = useStore()

    const isAuthenticated = computed<boolean>(() => store.auth.getAuthenticationState)
    const formData = ref({ email: 'admin@gmail.com', password: '' })
    const rules = ref({
      email: [
        {
          required: true,
          message: 'These credentials do not match our records.',
          trigger: 'blur',
        },
      ],
    })

    const handleKeyDown = async () => {
      login()
    }

    const handleLoginClick = async () => {
      login()
    }

    const login = async () => {
      try {
        store.auth.actLogin(formData.value)
      } catch (e) {
        console.log('err::: ', e)
      }
    }
    const accounts: string[] = ['admin@fancy.com', 'creator@fancy.com', 'member@fancy.com']
    return {
      isAuthenticated,
      form,
      formData,
      rules,
      accounts,
      handleLoginClick,
      handleKeyDown,
    }
  },
})
</script>
