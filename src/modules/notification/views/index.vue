<template>
  <div class="p-6 h-full">
    <div class="block rounded w-full">
      <div class="flex">
        <div class="container mx-auto p-4 border-4 rounded-lg">
          <div class="font-bold pb-4">Alerts</div>
          <div>
            <div class="relative flex flex-grow">
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

            <div class="relative flex flex-grow">
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

            <div class="relative flex flex-grow">
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

            <div class="relative flex flex-grow">
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
            
            <div class="relative flex flex-grow">
              <el-alert type="warning" class="bg-rose-400">
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
            
            <div class="relative flex flex-grow">
              <el-alert type="error" class="bg-orange-400">
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
          <div class="font-bold pb-4">Modals</div>
          <el-button @click="openDefaultPopup" class="bg-indigo-500 text-white font-bold">Default</el-button>
          <el-button @click="openNotif" class="bg-orange-400 text-white font-bold">Notification</el-button>
          <el-button class="bg-slate-700 text-white font-bold">Form</el-button>
        </div>
      </div>

    </div>

    <el-dialog
      title="Type your modal title"
      v-model="dialogVisible"
      width="45%"
    >
      <div class="flex flex-col">
        <span class="text-base break-normal">Far far away, behind the word mountains, 
          far from the countries Vokalia and Consonantia, there live the blind texts. 
          Separated they live in Bookmarksgrove right at the coast of the Semantics, 
          a large language ocean.</span>
        <span class="text-base mt-2 break-normal">A small river named Duden flows by their place and supplies it with the necessary regelialia. 
          It is a paradisematic country, 
          in which roasted parts of sentences fly into your mouth.</span>
        <span class="dialog-footer pt-4 ">
          <el-button class="bg-indigo-500 text-white font-bold" @click="confirm">
            Save changes
          </el-button>
          <el-button class="font-bold border-0 absolute right-4" @click="dialogVisible = false">
            Close 
          </el-button>
        </span>
      </div>
    </el-dialog>

    <el-dialog
      title="Your attention is required"
      v-model="dialogVisibleNotif"
      width="45%"
      custom-class="notificationClass"
    >
      <div class="flex flex-col">
        <div class="flex flex-col place-items-center">
          <BellIcon class="h-12 w-12 text-slate-200" aria-hidden="true" />
          <span class="text-slate-200 text-lg font-bold">YOU SHOULD READ THIS!</span>
          <span class="text-slate-200 text-base mt-2 break-normal">A small river named Duden flows by their place and supplies it</span>
          <span class="text-slate-200 text-base mt-2 break-normal">with the necessary regelialia.</span>
        </div>
        <span class="dialog-footer pt-4 ">
          <el-button class="bg-white text-neutral-500 font-bold" @click="confirm">
            Save changes
          </el-button>
          <el-button class="font-bold text-white border-0 absolute right-4 bg-transparent" @click="dialogVisibleNotif = false">
            Close 
          </el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, h , ref} from 'vue'
import { ElNotification, ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'

// Icon
import {
  ThumbUpIcon,
  BellIcon,
} from '@heroicons/vue/outline'

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

    const openNotif = () => {
      dialogVisibleNotif.value = true
    }

    const confirm = (event: any) => {
      dialogVisible.value = false
    }

    const openDefaultPopup = () => {
      dialogVisible.value = true

    }
    return {
      // popup window
      dialogVisible,
      dialogVisibleNotif,
      openNotif,
      confirmNotif,
      openDefaultPopup,
      confirm,

    }
  }
})
</script>

<style>

.el-dialog.notificationClass .el-dialog__header {
  @apply bg-gradient-to-r from-red-500 to-orange-500;
}
.el-dialog.notificationClass .el-dialog__title {
  @apply text-slate-200;
}

.el-dialog.notificationClass .el-dialog__body {
  @apply bg-gradient-to-r from-red-500 to-orange-500;
}

.el-dialog.notificationClass .el-dialog__body svg {
 @apply fill-slate-200 pb-4;
}
</style>
