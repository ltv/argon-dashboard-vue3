<template>
  <div
    class="background-url bg-top bg-cover pt-[100px] pb-[330px] md:pb-[250px] lg:pt-[155px] lg:pb-[272px] relative"
  >
    <span
      class="absolute block w-full inset-0 opacity-90 bg-gradient-to-r from-dark to-dark-100"
    ></span>
    <div class="w-full px-4 lg:px-7.5 lg:max-w-[42%] absolute top-[15%] lg:top-1/3 break-normal">
      <h1 class="text-white text-2.75 mb-2">Hello Admin</h1>
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
          <PrimaryIndicator />
        </div>
        <div class="col-span-3">
          <!-- Right indicator -->
          <WarningIndicator />
        </div>
      </div>
      <!-- End Indicator -->

      <!-- Edit profile section -->
      <div class="mt-7">
        <EditProfileForm />
      </div>
    </div>
    <!-- End edit profile -->

    <!-- Right side -->
    <div class="order-1 xl:order-none">
      <div class="grid grid-flow-row grid-cols-6 gap-7">
        <!-- Admin card -->
        <div class="col-span-6">
          <ProfileCard
            :avatarImg="avatarUrl"
            :backgroundImg="avatarBackgroundUrl"
            name="Admin"
            :age="67"
            location="The Castle of Trujillo, Spain"
            :friends="22"
            :photos="10"
            :comments="89"
            job="Solution Manager - Creative Tim Officer"
            degree="University of Computer Science"
          />
        </div>
        <!-- End admin -->

        <!-- Progress track -->
        <div class="col-span-6">
          <ProgressTrack />
        </div>
        <!-- End progress track -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// Components
import PrimaryIndicator from './components/PrimaryIndicator.vue'
import WarningIndicator from './components/WarningIndicator.vue'
import EditProfileForm from './components/EditProfileForm.vue'
import ProgressTrack from './components/ProgressTrack.vue'
import ProfileCard from '../../cards/views/components/ProfileCard.vue'

import backGround from '@/assets/images/profile-cover.jpg'
import avatarUrl from '@/assets/images/team-3.jpg'
import avatarBackgroundUrl from '@/assets/images/window-purple-image.jpg'

export default defineComponent({
  name: 'Profile',
  components: {
    PrimaryIndicator,
    WarningIndicator,
    EditProfileForm,
    ProgressTrack,
    ProfileCard,
  },
  setup(_) {
    return {
      backGround,
      avatarUrl,
      avatarBackgroundUrl,
    }
  },
})
</script>

<style lang="scss" scoped>
.background-url {
  @apply bg-[url('@/assets/images/profile-cover.jpg')] #{!important};
}
::v-deep(.card-avatar-profile.el-link) .el-link--inner {
  @apply absolute;
}
</style>
