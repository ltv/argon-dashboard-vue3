<template>
  <div class="w-full">
    <el-card class="bg-secondary text-center">
      <template #header>
        <div class="text-muted text-center mt-1.5 mb-6"><small>Sign up with</small></div>
        <div class="flex flex-nowrap text-center justify-center pb-7.5">
          <el-button class="bg-white border-white" href="#">
            <img src="@/assets/images/github.png" alt="" class="h-4 w-4" />
            <span class="pl-4 text-indigo-410">Github</span>
          </el-button>
          <el-button class="bg-white border-white ml-7" href="#">
            <img src="@/assets/images/google.png" alt="" class="h-4 w-4" />
            <span class="pl-4 text-indigo-410">Google</span>
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
              <div class="w-5 h-5">
                <AcademicCapIcon class="w-5 h-5 text-gray-210" />
              </div>
            </div>
            <el-input placeholder="Name" v-model="formData.username" />
          </el-form-item>
          <el-form-item class="mb-6 rounded-md" prop="email">
            <div
              class="authentication-form-icon z-10 absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none"
            >
              <div class="w-5 h-5">
                <MailIcon class="w-5 h-5 text-gray-210" />
              </div>
            </div>
            <el-input type="email" placeholder="Email" v-model="formData.email" />
          </el-form-item>
          <el-form-item class="mb-6 rounded-md" prop="type">
            <div
              class="authentication-form-icon z-10 absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none"
            >
              <div class="w-5 h-5">
                <IdentificationIcon class="w-5 h-5 text-gray-210" />
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
              <div class="w-5 h-5">
                <LockOpenIcon class="w-5 h-5 text-gray-210" />
              </div>
            </div>
            <el-input type="password" placeholder="Password" v-model="formData.password" />
          </el-form-item>
          <el-form-item class="mb-6 rounded-md" prop="password">
            <div
              class="authentication-form-icon z-10 absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none"
            >
              <div class="w-5 h-5">
                <LockOpenIcon class="w-5 h-5 text-gray-210" />
              </div>
            </div>
            <el-input type="password" placeholder="Confirm Password" v-model="formData.password" />
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
              <a href="#!" class="text-indigo-410 hover:text-indigo-410-active">Privacy Policy</a>
            </el-checkbox>
          </el-form-item>
        </el-form>
        <el-button type="primary"> Create account </el-button>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { MailIcon, AcademicCapIcon, IdentificationIcon, LockOpenIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'RegisterForm',
  components: {
    MailIcon,
    AcademicCapIcon,
    IdentificationIcon,
    LockOpenIcon,
  },
  setup() {
    const form = ref<ElementForm>()
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
      userType,
      form,
      formData,
    }
  },
})
</script>

<style lang="scss" scoped>
.item-input-popper {
  .el-select-dropdown__item.selected {
    @apply text-indigo-410;
  }
}
</style>
