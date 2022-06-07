<template>
  <div v-if="!isAuthenticated">
    <div class="card py-5">
      <div class="flex flex-wrap justify-center text-center mb-18">
        <div class="w-full px-4">
          <h1 class="display-1 mb-4 font-semibold">Welcome to LOGIN PAGE</h1>
        </div>
      </div>
    </div>

    <div class="py-6">
      <el-form ref="form" :model="formData" :rules="rules">
        <el-form-item class="border border-gray-900 rounded-full" prop="identifier">
          <el-input placeholder="UserName / Email" v-model="formData.identifier"></el-input>
        </el-form-item>
        <el-form-item class="border border-gray-900 rounded-full mb-2" prop="password">
          <el-input
            type="password"
            placeholder="Password"
            v-model="formData.password"
            @keydown.enter="handleKeyDown"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="text-sm text-left px-2 pt-2">
        <router-link to="/forgot-password" class="text-secondary hover:text-primary">
          Forgot password?
        </router-link>
      </div>
      <div class="flex">
        <div class="empty flex-grow"></div>
        <div>
          <el-button class="px-12" type="primary" @click="handleLoginClick"> Login </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useAuthStore } from '../store'

export default defineComponent({
  setup() {
    const form = ref<ElementForm>()
    const store = useAuthStore()

    const isAuthenticated = computed<boolean>(() => store.getAuthenticationState)
    const formData = ref({ identifier: '', password: '' })
    const rules = ref({
      identifier: [
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
        await form.value?.validate()
        store.setAuthentication(true)
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

<style scoped></style>
