<template>
  <div class="p-6 h-full">
    <div class="block rounded w-full">
      <div class="flex">
        <div class="container mx-auto p-4 border-4 rounded-lg">
          <div class="font-bold pb-4">Alerts</div>
          <div>
            <div class="relative flex flex-grow pt-1 ">
              <el-alert class="bg-slate-700">
                <span style="color: white;"><span style="font-weight: bold;">Default!</span> This is a default alert—check it out!</span>
                <div class="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  py-3
                  items-center
                ">
                  <ThumbUpIcon class="h-5 w-5 text-white" aria-hidden="true" />
                </div>
              </el-alert>
            </div>

            <div class="relative flex flex-grow pt-1">
              <el-alert class="bg-indigo-500">
                <span style="color: white;"><span style="font-weight: bold;">Primary!</span> This is a primary alert—check it out!</span>
                <div class="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  py-3
                  items-center
                ">
                  <ThumbUpIcon class="h-5 w-5 text-white" aria-hidden="true" />
                </div>
              </el-alert>
            </div>

            <div class="relative flex flex-grow pt-1">
              <el-alert type="primary">
                <span><span style="font-weight: bold;">Secondary!</span> This is a secondary alert—check it out!</span>
                <div class="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  py-3
                  items-center
                ">
                  <ThumbUpIcon class="h-5 w-5 text-black-400" aria-hidden="true" />
                </div>
              </el-alert>
            </div>

            <div class="relative flex flex-grow pt-1">
              <el-alert type="info" class="bg-cyan-400">
                <span style="color: white;"><span style="font-weight: bold;">Info!</span> This is a info alert—check it out!</span>
                <div class="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  py-3
                  items-center
                ">
                  <ThumbUpIcon class="h-5 w-5 text-white" aria-hidden="true" />
                </div>
              </el-alert>
            </div>

            <div class="relative flex flex-grow pt-1">
              <el-alert type="success" class="bg-emerald-400">
                <span style="color: white;"><span style="font-weight: bold;">Success!</span> This is a success alert—check it out!</span>
                <div class="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  py-3
                  items-center
                ">
                  <ThumbUpIcon class="h-5 w-5 text-white" aria-hidden="true" />
                </div>
              </el-alert>
            </div>
            
            <div class="relative flex flex-grow pt-1">
              <el-alert type="warning" class="bg-rose-500">
                <span style="color: white;"><span style="font-weight: bold;">Warning!</span> This is a warning alert—check it out!</span>
                <div class="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  py-3
                  items-center
                ">
                  <ThumbUpIcon class="h-5 w-5 text-white" aria-hidden="true" />
                </div>
              </el-alert>
            </div>
            
            <div class="relative flex flex-grow pt-1">
              <el-alert type="error" class="bg-orange-500">
                <span style="color: white;"><span style="font-weight: bold;">Error!</span> This is a error alert—check it out!</span>
                <div class="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  py-3
                  items-center
                ">
                  <ThumbUpIcon class="h-5 w-5 text-white" aria-hidden="true" />
                </div>
              </el-alert>
            </div>

            
          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border-4 rounded-lg">
          <div class="font-bold pb-4">Notifications</div>
          <el-button @click="openNotifDefault" class="bg-slate-700 text-white font-bold">Default</el-button>
          <el-button @click="openNotifInfo" class="bg-cyan-400 text-white font-bold">Info</el-button>
          <el-button @click="openNotifSuccess" class="bg-emerald-400 text-white font-bold">Success</el-button>
          <el-button @click="openNotifWarning" class="bg-orange-500 text-white font-bold">Warning</el-button>
          <el-button @click="openNotifDanger" class="bg-rose-500 text-white font-bold">Danger</el-button>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border-4 rounded-lg">
          <div class="font-bold pb-4">Sweet alerts</div>
          <el-button @click="openAlertDefault" class="bg-slate-700 text-white font-bold">Default</el-button>
          <el-button @click="openAlertInfo" class="bg-cyan-400 text-white font-bold">Info</el-button>
          <el-button @click="openAlertSuccess" class="bg-emerald-400 text-white font-bold">Success</el-button>
          <el-button @click="openAlertWarning" class="bg-orange-500 text-white font-bold">Warning</el-button>
          <el-button @click="openAlertDanger" class="bg-rose-500 text-white font-bold">Question</el-button>
        </div>
      </div>

    </div>


  </div>
</template>

<script lang="ts">
import { defineComponent, h , ref} from 'vue'
import { ElNotification, ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'
import swal from 'vue-sweetalert2';

// Icon
import {
  ThumbUpIcon,
  BellIcon,
} from '@heroicons/vue/outline'
import { TypeComponents } from 'element-plus/lib/utils';

export default defineComponent({
  name: 'Notification',
  components: {
    //Icon
    ThumbUpIcon,
    BellIcon,
  },
  setup(_) {
    const dialogVisible = ref(false)
    const dialogVisibleNotif = ref(false)

    const confirmNotif = (event: any) => {
      dialogVisibleNotif.value = false
    }

    const openNotifDefault = () => {
      ElMessage({
        showClose: true,
        message: h('p', null, [
          h('span', { style: 'color: white; font-weight: bold' }, 'Bootstrap Notify'),
          h('br', null),
          h('span', { style: 'color: white' }, 'Turning standard Bootstrap alerts into awesome notifications'),
        ]),
        type: 'info',
      })
    }

    const openNotifSuccess = () => {
      ElMessage({
        showClose: true,
        message: h('p', null, [
          h('span', { style: 'color: white; font-weight: bold' }, 'Bootstrap Notify'),
          h('br', null),
          h('span', { style: 'color: white' }, 'Turning standard Bootstrap alerts into awesome notifications'),
        ]),
        type: 'success',
      })
    }

    const openNotifInfo= () => {
      ElMessage({
        showClose: true,
        message: h('p', null, [
          h('span', { style: 'color: white; font-weight: bold' }, 'Bootstrap Notify'),
          h('br', null),
          h('span', { style: 'color: white' }, 'Turning standard Bootstrap alerts into awesome notifications'),
        ]),
        customClass: 'infoNotifClass',
      })
    }

    const openNotifWarning = () => {
      ElMessage({
        showClose: true,
        message: h('p', null, [
          h('span', { style: 'color: white; font-weight: bold' }, 'Bootstrap Notify'),
          h('br', null),
          h('span', { style: 'color: white' }, 'Turning standard Bootstrap alerts into awesome notifications'),
        ]),
        type: 'warning',
      })
    }

    const openNotifDanger = () => {
      ElMessage({
        showClose: true,
        message: h('p', null, [
          h('span', { style: 'color: white; font-weight: bold' }, 'Bootstrap Notify'),
          h('br', null),
          h('span', { style: 'color: white' }, 'Turning standard Bootstrap alerts into awesome notifications'),
        ]),
        type: 'error',
      })
    }

    const openAlertDefault = () => {
      swal('Hello Vue world!!!');
      // swal.fire({
      //   title: 'Error!',
      //   text: 'Do you want to continue',
      //   icon: 'error',
      //   confirmButtonText: 'Cool'
      // })
      // swal.fire(
      //   'The Internet?',
      //   'That thing is still around?',
      //   'question'
      // )
      // swal.fire({
      //   title: 'Đã Xóa!',
      //   text: "success",
      //   icon: 'success',
      //   customClass: {
      //     confirmButton: 'btn btn-success btn-fill',
      //   },
      //   buttonsStyling: false,
      // });
      // swal
      // .fire({
      //   title: 'Bạn có chắc chắn?',
      //   text: `Bạn sẽ không thể hoàn tác!`,
      //   icon: 'warning',
      //   showCancelButton: true,
      //   customClass: {
      //     confirmButton: 'btn btn-success btn-fill',
      //     cancelButton: 'btn btn-danger btn-fill',
      //   },
      //   confirmButtonText: 'Xóa',
      //   buttonsStyling: false,
      // })
      // .then((result) => {
      //   if (result.value) {
          
      //   }
      // });
    }

    const confirm = (event: any) => {
      dialogVisible.value = false
    }

    const openDefaultPopup = () => {
      dialogVisible.value = true
    }

    // swal.fire({
    //           title: 'Đã Xóa!',
    //           text: (this.$t as any)('message.success', {
    //             module: 'Xóa ',
    //           }),
    //           icon: 'success',
    //           customClass: {
    //             confirmButton: 'btn btn-success btn-fill',
    //           },
    //           buttonsStyling: false,
    //         });
    return {
      // popup window
      dialogVisible,
      dialogVisibleNotif,
      openNotifDefault,
      openNotifWarning,
      openNotifSuccess,
      openNotifInfo,
      openNotifDanger,
      openAlertDefault,
      // openAlertWarning,
      // openAlertSuccess,
      // openAlertInfo,
      // openAlertDanger,
      confirmNotif,
      openDefaultPopup,
      confirm,

    }
  }
})
</script>

<style>


.el-message.el-message--info {
  @apply bg-slate-700 border-slate-700 py-8 !important;
}

.el-message.el-message--info.infoNotifClass {
  @apply bg-cyan-400 border-cyan-400 py-8 !important;
}

.el-message.el-message--warning {
  @apply bg-orange-500 border-orange-400 py-8 !important;
}

.el-message.el-message--error {
  @apply bg-rose-500 border-rose-500 py-8 !important;
}

.el-message.el-message--success {
  @apply bg-emerald-400 border-emerald-400 py-8 !important;
}

.el-icon.el-message__closeBtn {
  @apply text-slate-200 pb-12 hover:text-slate-50;
}

.el-icon.el-message__icon {
  @apply text-slate-100 pb-6;
}

</style>
