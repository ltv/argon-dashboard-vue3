<template>
  <div class="relative w-full bg-default overflow-y-auto h-screen">
    <div class="absolute w-full z-100 p-4 bg-transparent border-0">
      <AuthNavigation />
    </div>
    <div
      class="relative w-full bg-gradient-to-r from-left-bar-indigo to-[#825ee4] py-24 lg:py-32 lg:pt-40"
    >
      <div
        class="container xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-3.375"
      >
        <div class="text-center mb-12">
          <div class="flex flex-wrap -mx-3.75 justify-center">
            <div class="md:flex-9 md:max-w-9/12 lg:flex-8 lg:max-w-2/3 px-3.375">
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
                <span class="font-bold">You can log in with 3 user types:</span>
              </h3>
              <ul class="text-light mt-4 mb-0 pl-7.5">
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
      <div class="absolute z-100 mx-auto inset-x-0 px-4 pb-20 w-max">
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
