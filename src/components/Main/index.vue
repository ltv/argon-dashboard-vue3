<template>
  <div class="p-6 h-full">
    <div class="block rounded h-full w-full">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Main',
})
</script>

<style></style>
