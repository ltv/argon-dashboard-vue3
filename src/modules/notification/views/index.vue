<template>
  <div class="p-2">
    <div class="block rounded h-auto mx-auto">
      <div class="flex">
        <div
          class="container h-auto mx-auto border border-slate-50 bg-white shadow-lg mt-5 rounded"
        >
          <div class="font-semibold text-lg text-indigo-900 px-6 pt-4">Notifications</div>
          <el-divider />
          <div class="flex flex-wrap gap-2 px-6 my-6">
            <div>
              <el-button
                @click="openNotifDefault"
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
