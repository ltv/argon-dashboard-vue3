<template>
  <div v-if="!isAuthenticated">
    <div class="relative w-full">
      <el-card class="bg-secondary text-center">
        <template #header class="pb-12">
          <div class="text-muted text-center mt-2 mb-4"><small>Sign in with</small></div>
          <div class="text-center">
            <el-button class="el-button--secondary" href="#">
              <img src="@/assets/images/github.png" alt="" />
              <span class="text-primary-blue">Github</span>
            </el-button>
            <el-button class="el-button--secondary" href="#">
              <img src="@/assets/images/google.png" alt="" />
              <span class="text-primary-blue">Google</span>
            </el-button>
          </div>
        </template>
        <div class="content-center">
          <el-form ref="form" :model="formData" :rules="rules">
            <el-form-item class="border border-gray-900 rounded-full" prop="username">
              <el-input placeholder="UserName / Email" v-model="formData.username" />
            </el-form-item>
            <el-form-item class="border border-gray-900 rounded-full mb-2" prop="password">
              <el-input
                type="password"
                placeholder="Password"
                v-model="formData.password"
                @keydown.enter="handleKeyDown"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="px-12" type="primary" @click="handleLoginClick">
                Sign in
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
      <div class="flex px-2 pt-2">
        <div class="text-sm text-left">
          <router-link to="/forgot-password" class="text-secondary hover:text-primary">
            Forgot password?
          </router-link>
        </div>
        <div class="text-sm ml-auto">
          <router-link to="/forgot-password" class="text-secondary hover:text-primary">
            Create Account
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import useStore from 'store'

export default defineComponent({
  setup() {
    const form = ref<ElementForm>()
    const store = useStore()

    const isAuthenticated = computed<boolean>(() => store.auth.getAuthenticationState)
    const formData = ref({ username: 'admin@gmail.com', password: '' })
    const rules = ref({
      username: [
        {
          required: true,
          message: 'Wrong Username',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: 'Wrong Password',
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

    return {
      isAuthenticated,
      form,
      formData,
      rules,
      handleLoginClick,
      handleKeyDown,
    }
  },
})
</script>
