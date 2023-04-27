<template>
  <div class="flex flex-wrap items-center md:justify-between w-full">
    <div class="xl:flex-6 xl:max-w-1/2 mx-auto md:mx-0">
      <div class="text-center lg:text-left text-muted">
        © 2022
        <a
          href="#"
          class="font-semibold ml-1 text-indigo-410 hover:text-indigo-410-active"
          target="_blank"
          >LTV</a
        >
        &amp;
        <a
          href="#"
          class="font-semibold ml-1 text-indigo-410 hover:text-indigo-410-active"
          target="_blank"
          >Creative Tim</a
        >
      </div>
    </div>
    <div class="xl:flex-6 xl:max-w-1/2 mx-auto md:mx-0">
      <div class="flex flex-wrap mb-0 pl-0 justify-center lg:justify-end gap-x-6 gap-y-2">
        <div class="">
          <a href="#" class="text-sm text-dark-lighter hover:text-indigo-410" target="_blank"
            >LTV</a
          >
        </div>
        <div class="">
          <a href="#" class="text-sm text-dark-lighter hover:text-indigo-410" target="_blank"
            >Creative Tim</a
          >
        </div>
        <div class="">
          <a href="#" class="text-sm text-dark-lighter hover:text-indigo-410" target="_blank"
            >About Us</a
          >
        </div>
        <div class="">
          <a href="#" class="text-sm text-dark-lighter hover:text-indigo-410" target="_blank"
            >Blog</a
          >
        </div>
        <div class="">
          <a href="#" class="text-sm text-dark-lighter hover:text-indigo-410" target="_blank"
            >MIT License</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Shop } from '@element-plus/icons-vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

export default defineComponent({
  name: 'Footer',
  components: {
    Shop,
    XIcon,
    MenuIcon,
  },
  setup() {
    return {}
  },
})
</script>
