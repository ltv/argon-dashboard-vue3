<template>
  <div v-if="!isAuthenticated">
    <div
      class="relative w-full bg-gradient-to-r from-indigo-410 to-indigo-450 py-24 lg:py-32 lg:pt-40"
    >
      <div
        class="container xl:max-w-5.75xl lg:max-w-4.5xl md:max-w-2.625xl sm:max-w-0.25xl w-full mx-auto px-3.75"
      >
        <div class="text-center mb-12">
          <div class="flex flex-wrap -mx-3.75 justify-center px-3.75">
            <div class="md:flex-9 md:max-w-9/12 lg:flex-8 lg:max-w-2/3">
              <WelcomeLabel />
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

      <SplitBackground />
    </div>
    <div
      class="container relative xl:max-w-5.75xl lg:max-w-4.5xl md:max-w-2.625xl sm:max-w-0.25xl w-full mx-auto px-3.75 pb-12"
    >
      <div class="relative lg:max-w-5/12 md:max-w-7/12 w-full mx-auto md:px-2 -mt-32">
        <LoginForm :email="'admin@gmail.com'" />
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
import { defineComponent, computed } from 'vue'
import useStore from 'store'
import SplitBackground from './components/SplitBackground.vue'
import LoginForm from './components/LoginForm.vue'
import WelcomeLabel from './components/WelcomeLabel.vue'

export default defineComponent({
  components: {
    SplitBackground,
    LoginForm,
    WelcomeLabel,
  },
  setup() {
    const store = useStore()
    const isAuthenticated = computed<boolean>(() => store.auth.getAuthenticationState)
    const accounts: string[] = ['admin@argon.com', 'creator@argon.com', 'member@argon.com']
    return {
      isAuthenticated,
      accounts,
    }
  },
})
</script>
