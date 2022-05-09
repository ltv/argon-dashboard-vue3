<template>
  <el-config-provider :zIndex="9999">
    <!-- <AuthLayout /> -->
    <DefaultLayout />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent, inject, watch, onMounted } from 'vue'
import { ElConfigProvider } from 'element-plus'
import DefaultLayout from './layouts/default-layout.vue'
import AuthLayout from 'layouts/auth-layout.vue'

export default defineComponent({
  components: {
    DefaultLayout,
    ElConfigProvider,
    AuthLayout,
  },
  inheritAttrs: false,

  setup() {
    const $message = inject<IMessage>('$message')
    const initialize = () => {
      return Promise.resolve()
    }

    initialize()
      .then(() => {})
      .catch((error: Error) => {
        $message?.error(
          `Couldn't initialize the system with error: ${error.message}`,
        )
      })

    return { zIndex: 3000, size: 'small' }
  },
})
</script>
<style>
#global-loading {
  z-index: 120000;
}
</style>
