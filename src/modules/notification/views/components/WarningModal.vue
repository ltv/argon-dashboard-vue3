<template>
  <el-dialog
    v-model="triggerWarningModal"
    title="Your attention is required"
    custom-class="danger"
    @close="$emit('closeWarningModal')"
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
        <el-button class="el-button--secondary" @click="$emit('closeWarningModal')"
          >Ok, got it</el-button
        >
        <el-button class="btn1-close" type="danger" @click="$emit('closeWarningModal')"
          >Close</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BellIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'WarningModal',
  components: {
    BellIcon,
  },
  emits: ['closeWarningModal'],
  props: {
    triggerWarningModal: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
