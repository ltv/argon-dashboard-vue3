<template>
  <div class="h-screen flex overflow-hidden bg-white">
    <div class="flex-1 min-w-0 flex flex-col overflow-hidden">
      <main class="flex-1 flex overflow-hidden">
        <div class="flex-1 flex xl:overflow-hidden w-full">
          <section
            aria-labelledby="primary-heading"
            class="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
          >
            <router-view v-slot="{ Component }">
              <component :is="Component" />
            </router-view>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout',
  components: {},

  setup() {
    return {}
  },
})
</script>
