<template>
  <el-config-provider :zIndex="9999">
    <component :is="isAuthLayout ? 'AuthLayout' : 'DefaultLayout'" v-if="isAppReady" />
  </el-config-provider>
</template>

<script lang="ts">
import { ElConfigProvider } from 'element-plus'
import AuthLayout from 'layouts/auth-layout.vue'
import { computed, defineComponent, inject, nextTick, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DefaultLayout from './layouts/default-layout.vue'

export default defineComponent({
  components: {
    DefaultLayout,
    ElConfigProvider,
    AuthLayout,
  },
  inheritAttrs: false,

  setup() {
    const $message = inject<IMessage>('$message')
    const route = useRoute()
    const router = useRouter()

    const isAppReady = ref(false)

    const isAuthLayout = computed(() => !route.meta?.requiresAuth)

    onMounted(async () => {
      try {
        await router.isReady()

        await nextTick()
        setTimeout(() => {
          isAppReady.value = true
        }, 200)
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
        $message?.error(`Couldn't initialize the system with error: ${errorMessage}`)
      }
    })

    return {
      zIndex: 3000,
      size: 'small',
      isAuthLayout,
      isAppReady,
    }
  },
})
</script>
