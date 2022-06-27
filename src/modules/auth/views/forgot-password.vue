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
      <div class="relative lg:max-w-5/12 md:max-w-7/12 mx-auto px-4 -mt-32 mb-20">
        <FortgotPasswordForm />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import useStore from 'store'
import SplitBackground from './components/SplitBackground.vue'
import FortgotPasswordForm from './components/ForgotPasswordForm.vue'
import WelcomeLabel from './components/WelcomeLabel.vue'

export default defineComponent({
  components: {
    SplitBackground,
    FortgotPasswordForm,
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
