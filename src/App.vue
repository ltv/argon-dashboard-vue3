<template>
  <el-config-provider :zIndex="9999">
    <AuthLayout v-if="!isAuthenticated" />
    <DefaultLayout v-else />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue'
import { ElConfigProvider } from 'element-plus'
import DefaultLayout from './layouts/default-layout.vue'
import AuthLayout from 'layouts/auth-layout.vue'
import useStore from 'store'

export default defineComponent({
  components: {
    DefaultLayout,
    ElConfigProvider,
    AuthLayout,
  },
  inheritAttrs: false,

  setup() {
    const $message = inject<IMessage>('$message')
    const store = useStore()
    const initialize = () => {
      return Promise.resolve()
    }

    const isAuthenticated = computed<boolean>(() => store.auth.getAuthenticationState)
    initialize().catch((error: Error) => {
      $message?.error(`Couldn't initialize the system with error: ${error.message}`)
    })

    return { zIndex: 3000, size: 'small', isAuthenticated }
  },
})
</script>
<style>
#global-loading {
  z-index: 120000;
}
</style>
