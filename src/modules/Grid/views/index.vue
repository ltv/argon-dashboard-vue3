<template>
  <div class="p-6">
    <div class="block rounded w-full">
      <div class="flex">
        <div class="container mx-auto p-4 border-4 rounded-lg">
          <div class="font-bold pb-4">Grid system</div>
          <div class="grid grid-cols-5 gap-4 text-center">
            <div class="border">01</div>
            <div class="border">02</div>
            <div class="border">03</div>
            <div class="border">04</div>
            <div class="border">05</div>
          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border-4 rounded-lg">
          <div class="font-bold pb-4">Equal-width</div>
          <div class="grid grid-cols-5 gap-4 text-center">
            <div class="border col-span-2">01</div>
            <div class="border col-span-2">02</div>
            <div class="border">03</div>

            <div class="border col-span-full">01</div>

            <div class="border col-span-2">01</div>
            <div class="border">02</div>
            <div class="border col-span-2">03</div>
            
          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border-4 rounded-lg">
          <div class="font-bold pb-4">Setting one column width</div>
          <div class="grid grid-cols-5 gap-4 text-center">
            <div class="border col-span-2">01</div>
            <div class="border w-24">02</div>
            <div class="border col-span-2">03</div>

            <div class="border col-span-3">01</div>
            <div class="border col-start-4">02</div>
            <div class="border">03</div>

            <div class="border col-span-2">01</div>
            <div class="border">02</div>
            <div class="border col-start-4 col-span-2">03</div>
          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border-4 rounded-lg">
          <div class="font-bold pb-4">Variable width content</div>
          <div class="grid grid-cols-6 gap-4 text-center">
            <div class="border col-end-3">01</div>
            <div class="border col-start-3 col-span-2">02</div>
            <div class="border">Variable width content</div>

            <div class="border col-start-2">01</div>
            <div class="border col-start-3 col-auto">Variable width content</div>
            <div class="border col-start-4">03</div>

            <div class="border col-start-1">Variable width content</div>
            <div class="border col-span-3">02</div>
            <div class="border col-span-2">03</div>

          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border-4 rounded-lg">
          <div class="font-bold pb-4">Equal-width multi-row</div>
          <div class="grid grid-cols-3 gap-4 text-center">
            <div class="border">01</div>
            <div class="border">02</div>
            <div class="border">03</div>

            <div class="border">01</div>
            <div class="border">02</div>
            <div class="border">03</div>

            <div class="border">01</div>
            <div class="border">02</div>
            <div class="border">03</div>

          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border-4 rounded-lg">
          <div class="font-bold pb-4">Mix and match</div>
          <div class="grid grid-cols-5 gap-4 text-center">
            <div class="border lg:col-span-1 md:col-span-2 sm:col-span-2">01</div>
            <div class="border lg:col-span-3 sm:col-span-2">02</div>
            <div class="border">03</div>

            <div class="border lg:col-span-3 sm:col-span-2">01</div>
            <div class="border">02</div>
            <div class="border lg:col-span-1 md:col-span-2 sm:col-span-2">03</div>

            <div class="border lg:col-span-1 md:col-span-2 sm:col-span-2">01</div>
            <div class="border">02</div>
            <div class="border lg:col-span-3 sm:col-span-2">03</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Grid',
  setup(_) {

    return {

    }
  }
})
</script>
