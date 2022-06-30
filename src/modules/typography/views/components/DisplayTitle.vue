<template>
  <div class="w-full">
    <!-- Display 1 -->
    <div class="row medium">
      <div class="md:w-1/4">
        <span class="title block">Display 1</span>
      </div>
      <div class="md:w-3/4">
        <h1 class="display-1">Argon Dashboard</h1>
      </div>
    </div>
    <!-- Display 2 -->
    <div class="row medium">
      <div class="md:w-1/4">
        <span class="title block">Display 2</span>
      </div>
      <div class="md:w-3/4">
        <h2 class="display-2">Argon Dashboard</h2>
      </div>
    </div>
    <!-- Heading 3 -->
    <div class="row medium">
      <div class="md:w-1/4">
        <span class="title block">Display 3</span>
      </div>
      <div class="md:w-3/4">
        <h3 class="display-3">Argon Dashboard</h3>
      </div>
    </div>
    <!-- Heading 4 -->
    <div class="row medium">
      <div class="md:w-1/4">
        <span class="title block">Display 4</span>
      </div>
      <div class="md:w-3/4">
        <h4 class="display-4">Argon Dashboard</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DisplayTitle',
})
</script>

<style lang="scss" scoped>
.row {
  @apply py-4 w-full h-auto break-normal;
}
.title {
  @apply uppercase text-80 font-semibold text-muted;
}
.medium {
  @apply flex flex-col md:flex-row md:justify-center md:items-center;
}
.row.medium p {
  @apply mb-4;
}
</style>
