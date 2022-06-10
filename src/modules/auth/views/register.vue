<template>
  <div v-if="!isAuthenticated">
    <div class="relative lg:max-w-1/2 md:max-w-2/3 w-full mx-auto px-4 -mt-32 mb-20">
      <el-card class="bg-secondary text-center">
        <template #header>
          <div class="text-muted text-center mt-1.5 mb-6"><small>Sign up with</small></div>
          <div class="flex flex-nowrap text-center justify-center pb-7.5">
            <el-button class="el-button--secondary" href="#">
              <img src="@/assets/images/github.png" alt="" class="h-4 w-4" />
              <span class="pl-4 text-primary-blue">Github</span>
            </el-button>
            <el-button class="el-button--secondary ml-7" href="#">
              <img src="@/assets/images/google.png" alt="" class="h-4 w-4" />
              <span class="pl-4 text-primary-blue">Google</span>
            </el-button>
          </div>
        </template>
        <div class="content-center items-center w-full md:p-6">
          <div class="text-muted text-center -mt-0.5 mb-4">
            <small>Or sign up with credentials </small>
          </div>
          <el-form ref="form" :model="formData" class="authentication-form pb-6">
            <el-form-item class="mb-4 rounded-md" prop="username">
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
            <el-form-item class="mb-4 rounded-md" prop="password">
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
                <span class="text-0.8125 text-muted font-base">
                  password strength: <strong class="text-success">strong</strong>
                </span>
              </div>
            </el-form-item>
            <el-form-item class="mb-6">
              <el-checkbox class="w-4 h-4 text-muted"
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
