<template>
  <div class="w-full">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, h } from 'vue'
import { Message } from 'element-plus'

// Icon
import { ThumbUpIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'Notifications',
  components: {
    ThumbUpIcon,
  },
  setup() {
    const $message = inject<Message>('$message')

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
    }
  },
})
</script>
