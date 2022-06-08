<template>
  <div class="relative w-full bg-default overflow-y-auto h-screen">
    <AuthNavigation />
    <div
      class="relative bg-gradient-to-r from-left-bar-indigo to-[#825ee4] py-24 lg:py-32 lg:pt-40"
    >
      <div class="lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px] mx-auto px-3.375 w-full">
        <div class="text-center mb-12">
          <div class="flex flex-wrap -mx-3.75 justify-center">
            <div class="md:flex-9 md:max-w-9/12 lg:flex-8 lg:max-w-4/6">
              <h1 class="text-white font-semibold">
                Welcome to Argon Dashboard Pro Laravel Live Preview.
              </h1>
              <p class="text-light mt-4 mb-0">
                Log in and see how you can save more than 150 hours of work with CRUDs for managing:
                #users, #roles, #items, #categories, #tags and more.
              </p>
            </div>
            <div class="md:flex-6 md:max-w-1/2 lg:flex-5 lg:max-w-5/12">
              <h3 class="text-white mt-12 mb-0">
                <strong>You can log in with 3 user types:</strong>
              </h3>
              <ul class="text-light mt-4 mb-0">
                <li v-for="(account, index) in accounts" :key="index" class="flex">
                  {{ index }}.
                  <div class="w-full">
                    Username <strong>{{ account }}</strong> Password <strong>secret</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute pointer-events-none overflow-hidden w-full top-auto bottom-0 inset-x-0 z-100"
      >
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
      <div class="absolute z-100 inset-x-0 md:inset-x-1/3 mt-2 pb-20">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const accounts: string[] = ['admin@argon.com', 'creator@argon.com', 'member@argon.com']
    return { accounts }
  },
})
</script>
