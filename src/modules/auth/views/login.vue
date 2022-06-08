<template>
  <div v-if="!isAuthenticated">
    <div class="container mt-8 pb-5">
      <div class="flex flex-wrap -mx-3.75 content-center">
        <div class="relative w-full px-3.75">
          <el-card class="bg-secondary">
            <template #header>
              <h3 class="cursor-auto mb-0 text-card-title">Sign in with</h3>
            </template>
            <div class="content-center">
              <el-form ref="form" :model="formData" :rules="rules">
                <el-form-item class="border border-gray-900 rounded-full" prop="identifier">
                  <el-input placeholder="UserName / Email" v-model="formData.identifier" />
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
            </div>
            <div class="text-sm text-left px-2 pt-2">
              <router-link to="/forgot-password" class="text-secondary hover:text-primary">
                Forgot password?
              </router-link>
            </div>
            <div class="flex">
              <div class="empty flex-grow"></div>
              <div>
                <el-button class="px-12" type="primary" @click="handleLoginClick">
                  Login
                </el-button>
              </div>
            </div>
          </el-card>
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
    const formData = ref({ identifier: 'admin@gmail.com', password: '*******' })
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
        store.auth.setAuthentication(true)
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
