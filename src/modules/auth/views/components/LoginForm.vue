<template>
  <div class="w-full">
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
            <div class="z-10 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <div class="w-3.5 h-[13.76px]">
                <MailIcon class="w-4 h-4 text-[#adb5bd]" />
              </div>
            </div>
            <el-input placeholder="Email" v-model="formData.email" />
          </el-form-item>
          <el-form-item class="mb-6 rounded-md" prop="password">
            <div class="z-10 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import useStore from 'store'
import { MailIcon, LockOpenIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'LoginForm',
  components: {
    MailIcon,
    LockOpenIcon,
  },
  setup() {
    const store = useStore()
    const form = ref<ElementForm>()
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
        store.global.actLoading(true)
        store.auth.actLogin(formData.value).catch(() => {
          store.global.actLoading(false)
        })
      } catch (e) {
        console.log('err::: ', e)
      }
    }
    return {
      form,
      formData,
      rules,
      handleLoginClick,
      handleKeyDown,
    }
  },
})
</script>
