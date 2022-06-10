<template>
  <div v-if="!isAuthenticated">
    <div class="relative w-full">
      <el-card class="bg-secondary text-center pb-8">
        <template #header>
          <div class="text-muted text-center mt-2 mb-4"><small>Sign in with</small></div>
          <div class="text-center pb-6">
            <el-button class="el-button--secondary" href="#">
              <img src="@/assets/images/github.png" alt="" class="h-4 w-4" />
              <span class="pl-4 text-primary-blue">Github</span>
            </el-button>
            <el-button class="el-button--secondary" href="#">
              <img src="@/assets/images/google.png" alt="" class="h-4 w-4" />
              <span class="pl-4 text-primary-blue">Google</span>
            </el-button>
          </div>
        </template>
        <div class="content-center items-center w-full p-6">
          <el-form ref="form" :model="formData" :rules="rules" class="authentication-form">
            <el-form-item class="mb-4 rounded-md" prop="username">
              <div
                class="z-10 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <MailIcon class="w-4 h-3.5 text-mess-box-text" />
              </div>
              <el-input placeholder="Email" v-model="formData.username" />
            </el-form-item>
            <el-form-item class="mb-6 rounded-md" prop="password">
              <div
                class="z-10 absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <LockOpenIcon class="w-4 h-3.5 text-mess-box-text" />
              </div>
              <el-input type="password" placeholder="Password" v-model="formData.password" />
            </el-form-item>
            <el-form-item class="mb-4">
              <el-checkbox class="text-mess-box-text">Remember me</el-checkbox>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="handleLoginClick"> Sign in </el-button>
        </div>
      </el-card>
      <div class="flex pt-8">
        <div class="text-sm text-left">
          <router-link to="/forgot-password" class="text-[#ced4da] text-80 hover:text-[#b1bbc4]">
            Forgot password?
          </router-link>
        </div>
        <div class="text-sm ml-auto">
          <router-link to="/forgot-password" class="text-[#ced4da] text-80 hover:text-[#b1bbc4]">
            Create new account
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import useStore from 'store'
import { MailIcon, LockOpenIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: {
    MailIcon,
    LockOpenIcon,
  },
  setup() {
    const form = ref<ElementForm>()
    const store = useStore()

    const isAuthenticated = computed<boolean>(() => store.auth.getAuthenticationState)
    const formData = ref({ username: 'admin@gmail.com', password: '' })
    const rules = ref({
      username: [
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

<style lang="scss">
.authentication-form {
  .el-form-item:first-child .el-input__inner {
    @apply placeholder:text-red-500;
  }
  .el-form-item__error {
    @apply font-bold;
  }
  .el-input {
    .el-input__inner {
      @apply rounded-md shadow-md border-none h-[46px] pl-12 text-mess-box-text text-sm #{!important};
      &:focus {
        @apply border-none shadow-lg ring-0 #{!important};
      }
    }
  }
  .el-checkbox {
    .el-checkbox__input {
      @apply shadow-lg;
    }
    .el-checkbox__inner::after {
      @apply border-[2px];
    }
    .el-checkbox__inner {
      @apply rounded h-4 w-4 border-0 shadow #{!important};
    }
    .el-checkbox__inner::after {
      @apply border-2 w-0.5	h-[5px] mt-0.5 ml-0.5  #{!important};
    }
  }
  .el-checkbox.is-checked {
    .el-checkbox__input {
      .el-checkbox__inner {
        @apply bg-primary-blue border-primary-blue;
      }
    }
    .el-checkbox__label {
      @apply text-mess-box-text focus:border-transparent;
    }
  }
}
</style>
