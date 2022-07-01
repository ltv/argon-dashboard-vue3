<template>
  <div class="w-full">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-6">
      <!-- Modals - Default -->
      <div class="w-full">
        <el-button type="primary" class="w-full" @click="openDefault = true">Default</el-button>
        <el-dialog v-model="openDefault" title="Type your modal title">
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <br />
          <p>
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <template #footer>
            <span class="dialog-footer">
              <el-button class="btn-open" type="primary" @click="openDefault = false"
                >Save changes</el-button
              >
              <el-button class="el-button--secondary" plain @click="openDefault = false"
                >Close</el-button
              >
            </span>
          </template>
        </el-dialog>
      </div>

      <!-- Modal - Danger -->
      <div class="w-full">
        <el-button type="warning" class="w-full" @click="openNotification = true"
          >Notification</el-button
        >
        <el-dialog
          v-model="openNotification"
          title="Your attention is required"
          custom-class="danger"
        >
          <div class="text-center py-4 text-white break-normal">
            <el-icon><BellIcon /></el-icon>
            <h4 class="text-white mt-6 mb-2 uppercase break-normal">You should read this!</h4>
            <p class="text-white break-normal">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia.
            </p>
          </div>
          <template #footer>
            <span class="dialog-footer">
              <el-button class="el-button--secondary" @click="openNotification = false"
                >Ok, got it</el-button
              >
              <el-button class="btn1-close" type="danger" @click="openNotification = false"
                >Close</el-button
              >
            </span>
          </template>
        </el-dialog>
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

import { MailIcon, LockClosedIcon, BellIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'Modals',
  components: {
    BellIcon,
    LoginForm,
  },
  setup() {
    // Modals - Default
    const openDefault = ref(false)

    // Modals - Notifications
    const openNotification = ref(false)

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
      openDefault,
      openNotification,
      dialogFormVisible,
      formLabelWidth,
      form,
      onSubmit,
    }
  },
})
</script>
