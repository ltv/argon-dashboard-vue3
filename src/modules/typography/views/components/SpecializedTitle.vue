<template>
  <div class="w-full">
    <!-- Heading -->
    <div class="row medium">
      <div class="md:w-1/4">
        <span class="title block">Heading</span>
      </div>
      <div class="md:w-3/4">
        <h3 class="heading">Argon Dashboard</h3>
      </div>
    </div>
    <!-- Heading title -->
    <div class="row medium">
      <div class="md:w-1/4">
        <span class="title block">Heading Title</span>
      </div>
      <div class="md:w-3/4">
        <h2 class="heading-title text-warning">Argon Dashboard</h2>
      </div>
    </div>

    <div class="row medium">
      <div class="md:w-1/4">
        <span class="title block">Heading Seaction</span>
      </div>
      <div class="md:w-3/4 flex flex-wrap">
        <div class="mb-4">
          <h3 class="display-3">Header with small subtitle</h3>
        </div>
        <div class="mb-4 mt-4">
          <p class="lead text-muted">
            According to the National Oceanic and Atmospheric Administration, Ted, Scambos,
            NSIDClead scentist, puts the potentially record maximum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SpecializedTitle',
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
