<template>
  <div class="p-6 bg-zinc-50">
    <div class="block w-full">
      <div class="flex">
        <div class="container mx-auto p-4 border shadow-md">
          <div class="font-bold pb-4">
            Grid system
            <hr>
          </div>
          <div class="grid grid-cols-5 gap-4 text-center drop-shadow">
            <div class="py-2 border border-slate-300 rounded">One of five columns</div>
            <div class="py-2 border border-slate-300 rounded">One of five columns</div>
            <div class="py-2 border border-slate-300 rounded">One of five columns</div>
            <div class="py-2 border border-slate-300 rounded">One of five columns</div>
            <div class="py-2 border border-slate-300 rounded">One of five columns</div>
          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border shadow-md">
          <div class="font-bold pb-4">
            Equal-width
            <hr>
          </div>
          <div class="grid grid-cols-5 gap-4 text-center drop-shadow">
            <div class="py-2 border border-slate-300 rounded col-span-2">1 of 3</div>
            <div class="py-2 border border-slate-300 rounded col-span-2">2 of 3</div>
            <div class="py-2 border border-slate-300 rounded">3 of 3</div>

            <div class="py-2 border border-slate-300 rounded col-span-full">1 of 1</div>

            <div class="py-2 border border-slate-300 rounded col-span-2">1 of 3</div>
            <div class="py-2 border border-slate-300 rounded">1 of 3</div>
            <div class="py-2 border border-slate-300 rounded col-span-2">1 of 3</div>
            
          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border shadow-md">
          <div class="font-bold pb-4">
            Setting one column width
            <hr>
          </div>
          <div class="grid grid-cols-5 gap-4 text-center drop-shadow">
            <div class="py-2 border border-slate-300 rounded col-span-2">1 of 3</div>
            <div class="py-2 border border-slate-300 rounded w-32">2 of 3 (smaller)</div>
            <div class="py-2 border border-slate-300 rounded col-span-2">3 of 3</div>

            <div class="py-2 border border-slate-300 rounded col-span-3">1 of 3 (wider)</div>
            <div class="py-2 border border-slate-300 rounded col-start-4">2 of 3</div>
            <div class="py-2 border border-slate-300 rounded">3 of 3</div>

            <div class="py-2 border border-slate-300 rounded col-span-2">1 of 3 (wider)</div>
            <div class="py-2 border border-slate-300 rounded">2 of 3</div>
            <div class="py-2 border border-slate-300 rounded col-start-4 col-span-2">3 of 3 (wider)</div>
          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border shadow-md">
          <div class="font-bold pb-4">
            Variable width content
            <hr>
          </div>
          <div class="grid grid-cols-6 gap-4 text-center drop-shadow">
            <div class="py-2 border border-slate-300 rounded col-end-3">01</div>
            <div class="py-2 border border-slate-300 rounded col-start-3 col-span-2">02</div>
            <div class="py-2 border border-slate-300 rounded">Variable width content</div>

            <div class="py-2 border border-slate-300 rounded col-start-2">01</div>
            <div class="py-2 border border-slate-300 rounded col-start-3 col-auto">Variable width content</div>
            <div class="py-2 border border-slate-300 rounded col-start-4">03</div>

            <div class="py-2 border border-slate-300 rounded col-start-1">Variable width content</div>
            <div class="py-2 border border-slate-300 rounded col-span-3">02</div>
            <div class="py-2 border border-slate-300 rounded col-span-2">03</div>

          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border shadow-md">
          <div class="font-bold pb-4">
            Equal-width multi-row
            <hr>
          </div>
          <div class="grid grid-cols-3 gap-4 text-center drop-shadow">
            <div class="py-2 border border-slate-300 rounded">01</div>
            <div class="py-2 border border-slate-300 rounded">02</div>
            <div class="py-2 border border-slate-300 rounded">03</div>

            <div class="py-2 border border-slate-300 rounded">01</div>
            <div class="py-2 border border-slate-300 rounded">02</div>
            <div class="py-2 border border-slate-300 rounded">03</div>

            <div class="py-2 border border-slate-300 rounded">01</div>
            <div class="py-2 border border-slate-300 rounded">02</div>
            <div class="py-2 border border-slate-300 rounded">03</div>

          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border shadow-md">
          <div class="font-bold pb-4">
            Mix and match
            <hr>
          </div>
          <div class="grid grid-cols-6 gap-4 text-center drop-shadow">
            <div class="py-5 border border-slate-300 rounded md:col-span-1 sm:col-span-3">md:col-span-1 sm:col-span-3</div>
            <div class="py-5 border border-slate-300 rounded md:col-span-1 sm:col-span-2">md:col-span-1 sm:col-span-2</div>
            <div class="py-7 border border-slate-300 rounded md:col-span-4 sm:col-span-1">md:col-span-4 sm:col-span-1</div>

            <div class="py-5 border border-slate-300 rounded md:col-span-3 sm:col-span-2">md:col-span-3 sm:col-span-2</div>
            <div class="py-5 border border-slate-300 rounded md:col-span-2 sm:col-span-2">md:col-span-2 sm:col-span-2</div>
            <div class="py-2 border border-slate-300 rounded md:col-span-1 sm:col-span-2">md:col-span-1 sm:col-span-2</div>
            
            <div class="py-5 border border-slate-300 rounded sm:col-span-2">md:col-span-2</div>
            <div class="py-5 border border-slate-300 rounded sm:col-span-2">md:col-span-2</div>
            <div class="py-5 border border-slate-300 rounded sm:col-span-2">md:col-span-2</div>
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
<style scoped>
/* .border {
  @apply border-slate-300 rounded break-normal;
} */

hr {
  @apply border-stone-300;
}
</style>