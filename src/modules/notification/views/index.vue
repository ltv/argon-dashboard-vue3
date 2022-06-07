<template>
  <div class="w-full block mx-auto h-auto lg:max-w-2/3">
    <!-- Alerts -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Alerts</h3>
      </template>
      <div class="flex flex-col gap-4">
        <el-alert class="success" title="success alert" type="success" show-icon />
        <el-alert class="info" title="info alert" type="info" show-icon />
        <el-alert class="warning" title="warning alert" type="warning" show-icon />
        <el-alert class="danger" title="error alert" type="error" show-icon />
      </div>
    </el-card>

    <!-- Modals -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Modals</h3>
      </template>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-6">
        <!-- Modals - Default -->
        <div class="w-full">
          <el-button type="primary" class="w-full" @click="openDefault = true">Default</el-button>
          <el-dialog v-model="openDefault" title="Type your modal title">
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <br />
            <p>
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <template #footer>
              <span class="dialog-footer">
                <el-button class="btn-open" type="primary" @click="openDefault = false"
                  >Save changes</el-button
                >
                <el-button class="btn-close" type="primary" @click="openDefault = false"
                  >Close</el-button
                >
              </span>
            </template>
          </el-dialog>
        </div>

        <!-- Modal - Notifications -->
        <div class="w-full">
          <el-button type="warning" class="w-full" @click="openNotification = true"
            >Notification</el-button
          >
          <el-dialog
            v-model="openNotification"
            title="Your attention is required"
            custom-class="open-notification"
          >
            <div class="modal-body">
              <el-icon><BellIcon /></el-icon>
              <h4 class="modal-heading">You should read this!</h4>
              <p class="modal-desc">
                A small river named Duden flows by their place and supplies it with the necessary
                regelialia.
              </p>
            </div>
            <template #footer>
              <span class="dialog-footer">
                <el-button class="btn-open" type="danger" @click="openNotification = false"
                  >Ok, got it</el-button
                >
                <el-button class="btn1-close" type="primary" @click="openNotification = false"
                  >Close</el-button
                >
              </span>
            </template>
          </el-dialog>
        </div>

        <!-- Modals - Form -->
        <div class="w-full">
          <el-button type="default" class="w-full" @click="dialogFormVisible = true"
            >Form</el-button
          >
          <el-dialog v-model="dialogFormVisible" custom-class="open-form">
            <div class="open-form-header">
              <div class="open-form-title">
                <small>Sign in with</small>
              </div>
              <div class="open-form-header-body">
                <el-button type="primary" class="sign-btn" href="#">
                  <span class="sign-img"><img src="@/assets/images/github.png" alt="" /></span>
                  <span class="sign-text">Github</span>
                </el-button>
                <el-button type="primary" class="sign-btn" href="#">
                  <span class="sign-img"><img src="@/assets/images/google.png" alt="" /></span>
                  <span class="sign-text">Google</span>
                </el-button>
              </div>
            </div>
            <div class="open-form-body">
              <div class="open-form-title">
                <small class="block w-full">Or sign in with credentials</small>
              </div>
              <el-form :model="form">
                <!-- Email -->
                <el-form-item class="form-input" prop="MailIcon">
                  <div class="form-icon">
                    <el-icon>
                      <component :is="form.MailIcon" />
                    </el-icon>
                  </div>
                  <el-input v-model="form.email" />
                </el-form-item>
                <!-- Password -->
                <el-form-item class="form-input" prop="LockClosedIcon">
                  <div class="form-icon">
                    <el-icon>
                      <component :is="form.LockClosedIcon" />
                    </el-icon>
                  </div>
                  <el-input v-model="form.password" />
                </el-form-item>

                <!-- Checkbox -->
                <el-form-item class="checkbox">
                  <el-checkbox v-model="form.type" label="Remember me" name="type" />
                </el-form-item>

                <!-- Submit -->
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">Sign in</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-dialog>
        </div>
      </div>
    </el-card>

    <!-- Notifications -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Notifications</h3>
      </template>
      <div class="flex flex-wrap gap-2">
        <div>
          <el-button type="default" @click="openNotifDefault">Default</el-button>
        </div>
        <div>
          <el-button type="info" @click="openNotifInfo">Info</el-button>
        </div>
        <div>
          <el-button type="success" @click="openNotifSuccess">Success</el-button>
        </div>
        <div>
          <el-button type="warning" @click="openNotifWarning">Warning</el-button>
        </div>
        <div>
          <el-button type="danger" @click="openNotifDanger">Danger</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, reactive, h } from 'vue'
import { Message } from 'element-plus'

// Icon
import { ThumbUpIcon, BellIcon, MailIcon, LockClosedIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'Notification',
  components: {
    //Icon
    ThumbUpIcon,
    BellIcon,
  },
  setup(_) {
    const $message = inject<Message>('$message')

    // Modals - Default
    const openDefault = ref(false)

    // Modals - Notifications
    const openNotification = ref(false)

    // Modals - Form
    const dialogFormVisible = ref(false)
    const formLabelWidth = '140px'
    const form = reactive({
      email: 'admin@argon.com',
      password: '....',
      type: [],
      MailIcon: MailIcon,
      LockClosedIcon: LockClosedIcon,
    })
    const onSubmit = () => {
      console.log(dialogFormVisible)
    }

    // Notifications
    const openNotifDefault = () => {
      $message?.success({
        message: h('div', null, [
          h('p', { class: 'message-header' }, ' Notify'),
          h(
            'p',
            { class: 'message-footer' },
            'Turning standard  alerts into awesome notifications',
          ),
        ]),
        showClose: true,
        type: 'success',
        icon: ThumbUpIcon,
        customClass: 'default',
      })
    }

    const openNotifSuccess = () => {
      $message?.success({
        message: h('div', null, [
          h('p', { class: 'message-header' }, ' Notify'),
          h(
            'p',
            { class: 'message-footer' },
            'Turning standard  alerts into awesome notifications',
          ),
        ]),
        showClose: true,
        type: 'success',
        icon: ThumbUpIcon,
        customClass: 'success',
      })
    }

    const openNotifInfo = () => {
      $message?.success({
        message: h('div', null, [
          h('p', { class: 'message-header' }, ' Notify'),
          h(
            'p',
            { class: 'message-footer' },
            'Turning standard  alerts into awesome notifications',
          ),
        ]),
        showClose: true,
        type: 'info',
        icon: ThumbUpIcon,
        customClass: 'info',
      })
    }

    const openNotifWarning = () => {
      $message?.success({
        message: h('div', null, [
          h('p', { class: 'message-header' }, ' Notify'),
          h(
            'p',
            { class: 'message-footer' },
            'Turning standard  alerts into awesome notifications',
          ),
        ]),
        showClose: true,
        type: 'warning',
        icon: ThumbUpIcon,
        customClass: 'warning',
      })
    }

    const openNotifDanger = () => {
      $message?.success({
        message: h('div', null, [
          h('p', { class: 'message-header' }, ' Notify'),
          h(
            'p',
            { class: 'message-footer' },
            'Turning standard  alerts into awesome notifications',
          ),
        ]),
        showClose: true,
        type: 'error',
        icon: ThumbUpIcon,
        customClass: 'danger',
      })
    }

    return {
      openNotifWarning,
      openNotifDefault,
      openNotifSuccess,
      openNotifInfo,
      openNotifDanger,
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

<style lang="scss" scoped>
.card-header {
  @apply p-5 border-b border-primary-white;
}
.title {
  @apply uppercase text-80 font-semibold text-muted;
}
.medium {
  @apply flex flex-col md:flex-row md:justify-center md:items-center;
}
</style>
