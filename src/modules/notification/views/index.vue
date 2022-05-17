<template>
  <div class="p-6 w-full h-full bg-slate-50">
    <div class="block rounded w-4/5 h-auto mx-auto">
      <div class="flex">
        <div class="container h-auto mx-auto border border-slate-50 bg-white shadow-lg mt-5 rounded">
          <div class="font-bold m-5">Alerts</div>
          <el-divider />
          <div class="px-6 my-6">
            <div>
              <div class="relative flex flex-grow mb-2">
                <el-alert class="bg-slate-700">
                  <span class="text-white pl-3"><span class="font-semibold">Default!</span> This is a default alert—check it out!</span>
                  <div class="
                    absolute
                    inset-y-0
                    left-0
                    pl-3
                    py-3.5
                    items-center
                  ">
                    <ThumbUpIcon class="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                </el-alert>
              </div>

              <div class="relative flex flex-grow mb-2">
                <el-alert class="bg-indigo-500">
                  <span class="text-white pl-3"><span class="font-semibold">Primary!</span> This is a primary alert—check it out!</span>
                  <div class="
                    absolute
                    inset-y-0
                    left-0
                    pl-3
                    py-3.5
                    items-center
                  ">
                    <ThumbUpIcon class="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                </el-alert>
              </div>

              <div class="relative flex flex-grow mb-2">
                <el-alert type="primary" class="bg-slate-50">
                  <span><span class="font-semibold pl-3">Secondary!</span> This is a secondary alert—check it out!</span>
                  <div class="
                    absolute
                    inset-y-0
                    left-0
                    pl-3
                    py-3.5
                    items-center
                  ">
                    <ThumbUpIcon class="h-5 w-5 text-black-400" aria-hidden="true" />
                  </div>
                </el-alert>
              </div>

              <div class="relative flex flex-grow mb-2">
                <el-alert type="info" class="bg-cyan-400">
                  <span class="text-white pl-3"><span class="font-semibold">Info!</span> This is a info alert—check it out!</span>
                  <div class="
                    absolute
                    inset-y-0
                    left-0
                    pl-3
                    py-3.5
                    items-center
                  ">
                    <ThumbUpIcon class="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                </el-alert>
              </div>

              <div class="relative flex flex-grow mb-2">
                <el-alert type="success" class="bg-emerald-400">
                  <span class="text-white pl-3"><span class="font-semibold">Success!</span> This is a success alert—check it out!</span>
                  <div class="
                    absolute
                    inset-y-0
                    left-0
                    pl-3
                    py-3.5
                    items-center
                  ">
                    <ThumbUpIcon class="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                </el-alert>
              </div>

              <div class="relative flex flex-grow mb-2">
                <el-alert type="warning" class="bg-rose-500">
                  <span class="text-white pl-3"><span class="font-semibold">Warning!</span> This is a warning alert—check it out!</span>
                  <div class="
                    absolute
                    inset-y-0
                    left-0
                    pl-3
                    py-3.5
                    items-center
                  ">
                    <ThumbUpIcon class="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                </el-alert>
              </div>

              <div class="relative flex flex-grow mb-2">
                <el-alert type="error" class="bg-orange-500">
                  <span class="text-white pl-3"><span class="font-semibold">Error!</span> This is a error alert—check it out!</span>
                  <div class="
                    absolute
                    inset-y-0
                    left-0
                    pl-3
                    py-3.5
                    items-center
                  ">
                    <ThumbUpIcon class="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                </el-alert>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container h-auto mx-auto border border-slate-50 bg-white shadow-lg mt-5 rounded">
          <div class="font-bold m-5">Notifications</div>
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

      <div class="flex pt-4">
        <div class="container h-auto mx-auto border border-slate-50 bg-white shadow-lg mt-5 rounded">
          <div class="font-bold m-5">Sweet alerts</div>
          <el-divider />
          <div class="flex flex-wrap gap-2 px-6 my-6">
            <div>
              <el-button
                @click="openAlertDefault"
                class="bg-indigo-600 border-indigo-600 text-white font-bold"
                >Default Alert</el-button
              >
            </div>
            <div>
              <el-button
                @click="openAlertInfo"
                class="bg-cyan-400 border-cyan-400 text-white font-bold"
                >Info Alert</el-button
              >
            </div>
            <div>
              <el-button
                @click="openAlertSuccess"
                class="bg-emerald-400 border-emerald-400 text-white font-bold"
                >Success Alert</el-button
              >
            </div>
            <div>
              <el-button
                @click="openAlertWarning"
                class="bg-orange-500 border-orange-500 text-white font-bold"
                >Warning Alert</el-button
              >
            </div>
            <div>
              <el-button
                @click="openAlertDanger"
                class="bg-rose-500 border-rose-500 text-white font-bold"
                >Danger Alert</el-button
              >
            </div>
            <div>
              <el-button
                @click="openAlertQuestion"
                class="bg-slate-800 border-slate-800 text-white font-bold"
                >Question Alert</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, h, inject } from 'vue'
import { ElMessage } from 'element-plus'

// Icon
import {
  ThumbUpIcon,
  BellIcon,
} from '@heroicons/vue/solid'

export default defineComponent({
  name: 'Notification',
  components: {
    //Icon
    ThumbUpIcon,
    BellIcon,
  },
  setup(_) {
    const $swal = inject<any>('$swal')

    const openNotifDefault = () => {
      ElMessage({
        showClose: true,
        message: h('p', null, [
          h('span', { class: 'text-white font-semibold' }, 'Bootstrap Notify'),
          h('br', null),
          h('span', { class: 'text-white' }, 'Turning standard Bootstrap alerts into awesome notifications'),
        ]),
        type: 'info',
      })
    }

    const openNotifSuccess = () => {
      ElMessage({
        showClose: true,
        message: h('p', null, [
          h('span', { class: 'text-white font-semibold' }, 'Bootstrap Notify'),
          h('br', null),
          h('span', { class: 'text-white' }, 'Turning standard Bootstrap alerts into awesome notifications'),
        ]),
        type: 'success',
      })
    }

    const openNotifInfo = () => {
      ElMessage({
        showClose: true,
        message: h('p', null, [
          h('span', { class: 'text-white font-semibold' }, 'Bootstrap Notify'),
          h('br', null),
          h('span', { class: 'text-white' }, 'Turning standard Bootstrap alerts into awesome notifications'),
        ]),
        customClass: 'infoNotifClass',
      })
    }

    const openNotifWarning = () => {
      ElMessage({
        showClose: true,
        message: h('p', null, [
          h('span', { class: 'text-white font-semibold' }, 'Bootstrap Notify'),
          h('br', null),
          h('span', { class: 'text-white' }, 'Turning standard Bootstrap alerts into awesome notifications'),
        ]),
        type: 'warning',
      })
    }

    const openNotifDanger = () => {
      ElMessage({
        showClose: true,
        message: h('p', null, [
          h('span', { class: 'text-white font-semibold' }, 'Bootstrap Notify'),
          h('br', null),
          h('span', { class: 'text-white' }, 'Turning standard Bootstrap alerts into awesome notifications'),
        ]),
        type: 'error',
      })
    }

    const openAlertDefault = () => {
      $swal({
        title: 'Here\'s a message!',
        text: 'A few words about this sweet alert ...',
        customClass: {
          confirmButton: 'bg-indigo-600 border-indigo-600'
        },
      });
    }

    const openAlertSuccess = () => {
      $swal({
        title: 'Success!',
        text: 'A few words about this sweet alert ...',
        icon: 'success',
        customClass: {
          confirmButton: 'bg-emerald-400 border-emerald-400 '
        },
      })
    }

    const openAlertInfo = () => {
      $swal({
        title: 'Info!',
        text: 'A few words about this sweet alert ...',
        icon: 'info',
        customClass: {
          confirmButton: 'bg-cyan-400 border-cyan-400'
        },
      })
    }

    const openAlertDanger = () => {
      $swal({
        title: 'Danger!',
        text: 'A few words about this sweet alert ...',
        icon: 'error',
        customClass: {
          confirmButton: 'bg-rose-500 border-rose-500 '
        },
      })
    }

    const openAlertWarning = () => {
      $swal({
        title: 'Warning!',
        text: 'A few words about this sweet alert ...',
        icon: 'warning',
        customClass: {
          confirmButton: 'bg-orange-400 border-orange-400 '
        },
      })
    }

    const openAlertQuestion = () => {
      $swal({
        title: 'Question!',
        text: 'A few words about this sweet alert ...',
        icon: 'question',
        customClass: {
          confirmButton: 'bg-slate-800 border-slate-800 '
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
