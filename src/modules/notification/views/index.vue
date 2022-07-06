<template>
  <div class="w-full block mx-auto h-auto lg:max-w-2/3">
    <!-- Alerts -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Alerts</h3>
      </template>
      <div>
        <Alerts />
      </div>
    </el-card>

    <!-- Modals -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Modals</h3>
      </template>
      <div>
        <Modals />
      </div>
    </el-card>

    <!-- Notifications -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Notifications</h3>
      </template>
      <div>
        <Notifications />
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Alerts from './components/Alerts.vue'
import Modals from './components/Modals.vue'
import Notifications from './components/Notifications.vue'

export default defineComponent({
  name: 'Notification',
  components: {
    Alerts,
    Modals,
    Notifications,
  },
})
</script>
