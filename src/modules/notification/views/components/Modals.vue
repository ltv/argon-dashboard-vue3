<template>
  <div class="w-full">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-6">
      <!-- Modals - Default -->
      <div class="w-full">
        <el-button type="primary" class="w-full" @click="openDefaultModal = !openDefaultModal"
          >Default</el-button
        >
        <DefaultModal :triggerModal="openDefaultModal" @close-modal="openDefaultModal = false" />
      </div>

      <!-- Modal - Danger -->
      <div class="w-full">
        <el-button type="warning" class="w-full" @click="openWarningModal = !openWarningModal"
          >Notification</el-button
        >
        <WarningModal
          :triggerWarningModal="openWarningModal"
          @close-warning-modal="openWarningModal = false"
        />
      </div>

      <!-- Modals - Form -->
      <div class="w-full">
        <el-button type="default" class="w-full" @click="dialogFormVisible = true">Form</el-button>
      </div>
      <el-dialog v-model="dialogFormVisible" custom-class="sign-in">
        <LoginForm :description="'Or sign in with credentials'" />
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import LoginForm from 'modules/auth/views/components/LoginForm.vue'
import DefaultModal from './DefaultModal.vue'
import WarningModal from './WarningModal.vue'

import { MailIcon, LockClosedIcon, BellIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'Modals',
  components: {
    BellIcon,
    LoginForm,
    DefaultModal,
    WarningModal,
  },
  setup() {
    // Modals - Default
    const openDefaultModal = ref(false)

    // Modals - Notifications
    const openWarningModal = ref(false)

    // Modals - Form
    const dialogFormVisible = ref(false)
    const formLabelWidth = '140px'
    const form = reactive({
      email: '',
      password: '',
      type: [],
      MailIcon: MailIcon,
      LockClosedIcon: LockClosedIcon,
    })

    const onSubmit = () => {
      console.log(dialogFormVisible)
    }

    return {
      openWarningModal,
      dialogFormVisible,
      formLabelWidth,
      form,
      onSubmit,
      openDefaultModal,
    }
  },
})
</script>
