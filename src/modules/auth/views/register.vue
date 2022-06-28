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
              <WelcomeLabel />
            </div>
          </div>
        </div>
      </div>

      <SplitBackground />
    </div>
    <div
      class="container relative xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] w-full mx-auto px-4"
    >
      <div class="relative lg:max-w-1/2 md:max-w-2/3 mx-auto md:px-1.5 -mt-32 mb-20">
        <RegisterForm />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import useStore from 'store'
import RegisterForm from './components/RegisterForm.vue'
import SplitBackground from './components/SplitBackground.vue'
import WelcomeLabel from './components/WelcomeLabel.vue'

export default defineComponent({
  components: {
    RegisterForm,
    SplitBackground,
    WelcomeLabel,
  },
  setup() {
    const store = useStore()
    const isAuthenticated = computed<boolean>(() => store.auth.getAuthenticationState)
    return {
      isAuthenticated,
    }
  },
})
</script>
