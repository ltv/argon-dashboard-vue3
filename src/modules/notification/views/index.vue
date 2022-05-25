<template>
  <div class="w-full sm:w-3/4 md:w-3/4 mx-auto">
    <!-- Alerts -->
    <div class="card-typography">
      <div class="card-header">
        <h3 class="text-lg">Alerts</h3>
      </div>
      <div class="p-5">
        <div class="">
          <div class="flex flex-wrap gap-2">
            <div class="w-full mb-4">
              <el-alert title="success alert" type="success" show-icon />
            </div>
            <div class="w-full mb-4">
              <el-alert title="success alert" type="success" show-icon />
            </div>
            <div class="w-full mb-4">
              <el-alert title="success alert" type="success" show-icon />
            </div>
            <div class="w-full mb-4">
              <el-alert title="success alert" type="success" show-icon />
            </div>
            <div class="w-full mb-4">
              <el-alert title="success alert" type="success" show-icon />
            </div>
            <div class="w-full mb-4">
              <el-alert title="success alert" type="success" show-icon />
            </div>
            <div class="w-full mb-4">
              <el-alert title="success alert" type="success" show-icon />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modals -->
    <div class="card-typography">
      <div class="card-header">
        <h3 class="text-lg">Modals</h3>
      </div>
      <div class="p-5">
        <div class="">
          <div class="grid grid-cols-3 gap-2">
            <div>
              <el-button
                @click="openNotifDefault"
                class="w-full bg-slate-800 border-slate-800 text-white font-bold"
                >Default</el-button
              >
            </div>
            <div>
              <el-button
                @click="openNotifDefault"
                class="w-full bg-slate-800 border-slate-800 text-white font-bold"
                >Default</el-button
              >
            </div>
            <div>
              <el-button
                @click="openNotifDefault"
                class="w-full bg-slate-800 border-slate-800 text-white font-bold"
                >Default</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Notifications -->
    <div class="card-typography">
      <div class="card-header">
        <h3 class="text-lg">Notifications</h3>
      </div>
      <div class="p-5">
        <div class="">
          <div class="flex flex-wrap gap-2">
            <div>
              <el-button
                @click="openNotifInfo"
                class="bg-slate-800 border-slate-800 text-white font-bold"
                >Default</el-button
              >
            </div>
            <div>
              <el-button
                @click="openNotifInfo"
                class="bg-cyan-400 border-cyan-400 text-white font-bold"
                >Info</el-button
              >
            </div>
            <div>
              <el-button
                @click="openNotifSuccess"
                class="bg-emerald-400 border-emerald-400 text-white font-bold"
                >Success</el-button
              >
            </div>
            <div>
              <el-button
                @click="openNotifWarning"
                class="bg-orange-500 border-orange-500 text-white font-bold"
                >Warning</el-button
              >
            </div>
            <div>
              <el-button
                @click="openNotifDanger"
                class="bg-rose-500 border-rose-500 text-white font-bold"
                >Danger</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Sweet alerts -->
    <div class="card-typography">
      <div class="card-header">
        <h3 class="text-lg">Sweet alerts</h3>
      </div>
      <div class="p-5">
        <div class="">
          <div class="flex flex-wrap gap-2">
            <div>
              <el-button
                @click="openNotifDefault"
                class="bg-slate-800 border-slate-800 text-white font-bold"
                >Default</el-button
              >
            </div>
            <div>
              <el-button
                @click="openNotifDefault"
                class="bg-cyan-400 border-cyan-400 text-white font-bold"
                >Info</el-button
              >
            </div>
            <div>
              <el-button
                @click="openNotifDefault"
                class="bg-emerald-400 border-emerald-400 text-white font-bold"
                >Success</el-button
              >
            </div>
            <div>
              <el-button
                @click="openNotifDefault"
                class="bg-orange-500 border-orange-500 text-white font-bold"
                >Warning</el-button
              >
            </div>
            <div>
              <el-button
                @click="openNotifDefault"
                class="bg-rose-500 border-rose-500 text-white font-bold"
                >Danger</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { IElMessageBox, Message } from 'element-plus'

// Icon
import { ThumbUpIcon, BellIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'Notification',
  components: {
    //Icon
    ThumbUpIcon,
    BellIcon,
  },
  setup(_) {
    const $swal = inject<any>('$swal')
    const $message = inject<Message>('$message')
    const $messageBox = inject<IElMessageBox>('$messageBox')

    const openNotifDefault = () => {
      $message?.success({
        message: 'this is a message.',
        grouping: true,
        center: true,
      })
      // messageBox
      $messageBox?.alert('Message', 'Title', {
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
      })
    }

    const openNotifSuccess = () => {
      $message?.success(`Couldn't initialize the system with error: `)
    }

    const openNotifInfo = () => {
      $message?.info(`Couldn't initialize the system with error: `)
    }

    const openNotifWarning = () => {
      $message?.warning(`Couldn't initialize the system with error: `)
    }

    const openNotifDanger = () => {
      $message?.error(`Couldn't initialize the system with error: `)
    }

    const openAlertDefault = () => {
      $swal({
        title: "Here's a message!",
        text: 'A few words about this sweet alert ...',
        customClass: {
          confirmButton: 'bg-indigo-600 border-indigo-600',
        },
      })
    }

    const openAlertSuccess = () => {
      $swal({
        title: 'Success!',
        text: 'A few words about this sweet alert ...',
        icon: 'success',
        customClass: {
          confirmButton: 'bg-emerald-400 border-emerald-400 ',
        },
      })
    }

    const openAlertInfo = () => {
      $swal({
        title: 'Info!',
        text: 'A few words about this sweet alert ...',
        icon: 'info',
        customClass: {
          confirmButton: 'bg-cyan-400 border-cyan-400',
        },
      })
    }

    const openAlertDanger = () => {
      $swal({
        title: 'Danger!',
        text: 'A few words about this sweet alert ...',
        icon: 'error',
        customClass: {
          confirmButton: 'bg-rose-500 border-rose-500 ',
        },
      })
    }

    const openAlertWarning = () => {
      $swal({
        title: 'Warning!',
        text: 'A few words about this sweet alert ...',
        icon: 'warning',
        customClass: {
          confirmButton: 'bg-orange-400 border-orange-400 ',
        },
      })
    }

    const openAlertQuestion = () => {
      $swal({
        title: 'Question!',
        text: 'A few words about this sweet alert ...',
        icon: 'question',
        customClass: {
          confirmButton: 'bg-slate-800 border-slate-800 ',
        },
      })
    }

    return {
      // popup window
      openNotifDefault,
      openNotifWarning,
      openNotifSuccess,
      openNotifInfo,
      openNotifDanger,
      openAlertDefault,
      openAlertWarning,
      openAlertSuccess,
      openAlertInfo,
      openAlertDanger,
      openAlertQuestion,
    }
  },
})
</script>

<style lang="scss" scoped>
.card-typography {
  @apply bg-white break-words mt-5 mb-7 shadow rounded-lg flex flex-col;
}
.card-header {
  @apply p-5 border-b border-primary-white;
}
.row {
  @apply my-8 w-full h-auto;
}
.title {
  @apply uppercase text-80 font-semibold text-muted;
}
.medium {
  @apply flex flex-col md:flex-row md:justify-center md:items-center;
}

.el-alert--success.is-light {
  // @apply bg-blue-200;
}
</style>
