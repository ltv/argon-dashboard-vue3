<template>
  <div class="p-6 bg-zinc-50 w-full">
    <div class="block w-4/5 h-auto mx-auto">
      <div class="flex">
        <div class="container mx-auto p-4 border shadow-md drop-shadow-sm rounded">
          <div class="font-base text-lg text-indigo-900">
            Grid system
          </div>
          <el-divider />
          <div class="grid grid-cols-5 gap-4 text-center">
            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">One of five columns</div>
            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">One of five columns</div>
            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">One of five columns</div>
            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">One of five columns</div>
            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">One of five columns</div>
          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border shadow-md drop-shadow-sm rounded">
          <div class="font-base text-lg text-indigo-900">
            Equal-width
          </div>
          <el-divider />
          <div class="grid grid-cols-6 gap-4 text-center">
            <div class="py-2 border border-slate-300 rounded col-span-3 drop-shadow-sm shadow">1 of 2</div>
            <div class="py-2 border border-slate-300 rounded col-span-3 drop-shadow-sm shadow">1 of 2</div>

            <div class="py-2 border border-slate-300 rounded col-span-2 drop-shadow-sm shadow">1 of 3</div>
            <div class="py-2 border border-slate-300 rounded col-span-2 drop-shadow-sm shadow">1 of 3</div>
            <div class="py-2 border border-slate-300 rounded col-span-2 drop-shadow-sm shadow">1 of 3</div>
            
          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border shadow-md drop-shadow-sm rounded">
          <div class="font-base text-lg text-indigo-900">
            Setting one column width
          </div>
          <el-divider />
          <div class="grid grid-cols-5 gap-4 text-center">
            <div class="py-2 border border-slate-300 rounded col-span-2 drop-shadow-sm shadow">1 of 3</div>
            <div class="py-2 border border-slate-300 rounded w-32 drop-shadow-sm shadow">2 of 3 (smaller)</div>
            <div class="py-2 border border-slate-300 rounded col-span-2 drop-shadow-sm shadow">3 of 3</div>

            <div class="py-2 border border-slate-300 rounded col-span-3 drop-shadow-sm shadow">1 of 3 (wider)</div>
            <div class="py-2 border border-slate-300 rounded col-start-4 drop-shadow-sm shadow">2 of 3</div>
            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">3 of 3</div>

            <div class="py-2 border border-slate-300 rounded col-span-2 drop-shadow-sm shadow">1 of 3 (wider)</div>
            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">2 of 3</div>
            <div class="py-2 border border-slate-300 rounded col-start-4 col-span-2 drop-shadow-sm shadow">3 of 3 (wider)</div>
          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border shadow-md drop-shadow-sm rounded">
          <div class="font-base text-lg text-indigo-900">
            Variable width content
          </div>
          <el-divider />
          <div class="grid grid-cols-6 gap-4 text-center">
            <div class="py-5 border border-slate-300 rounded col-end-3 drop-shadow-sm shadow">01</div>
            <div class="py-5 border border-slate-300 rounded col-start-3 col-span-2 drop-shadow-sm shadow">02</div>
            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">Variable width content</div>

            <div class="py-5 border border-slate-300 rounded col-start-2 drop-shadow-sm shadow">01</div>
            <div class="py-2 border border-slate-300 rounded col-start-3 col-auto drop-shadow-sm shadow">Variable width content</div>
            <div class="py-5 border border-slate-300 rounded col-start-4 drop-shadow-sm shadow">03</div>

            <div class="py-2 border border-slate-300 rounded col-start-1 drop-shadow-sm shadow">Variable width content</div>
            <div class="py-5 border border-slate-300 rounded col-span-3 drop-shadow-sm shadow">02</div>
            <div class="py-5 border border-slate-300 rounded col-span-2 drop-shadow-sm shadow">03</div>

          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border shadow-md drop-shadow-sm rounded">
          <div class="font-base text-lg text-indigo-900">
            Equal-width multi-row
          </div>
          <el-divider />
          <div class="grid grid-cols-3 gap-4 text-center">
            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">01</div>
            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">02</div>
            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">03</div>

            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">01</div>
            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">02</div>
            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">03</div>

            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">01</div>
            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">02</div>
            <div class="py-2 border border-slate-300 rounded drop-shadow-sm shadow">03</div>

          </div>
        </div>
      </div>

      <div class="flex pt-4">
        <div class="container mx-auto p-4 border shadow-md drop-shadow-sm rounded">
          <div class="font-base text-lg text-indigo-900">
            Mix and match
          </div>
          <el-divider />
          <div class="grid grid-cols-6 gap-4 text-center">
            <div class="py-5 border border-slate-300 rounded md:col-span-1 sm:col-span-3 drop-shadow-sm shadow">md:col-span-1 sm:col-span-3</div>
            <div class="py-5 border border-slate-300 rounded md:col-span-1 sm:col-span-2 drop-shadow-sm shadow">md:col-span-1 sm:col-span-2</div>
            <div class="py-7 border border-slate-300 rounded md:col-span-4 sm:col-span-1 drop-shadow-sm shadow">md:col-span-4 sm:col-span-1</div>

            <div class="py-5 border border-slate-300 rounded md:col-span-3 sm:col-span-2 drop-shadow-sm shadow">md:col-span-3 sm:col-span-2</div>
            <div class="py-5 border border-slate-300 rounded md:col-span-2 sm:col-span-2 drop-shadow-sm shadow">md:col-span-2 sm:col-span-2</div>
            <div class="py-2 border border-slate-300 rounded md:col-span-1 sm:col-span-2 drop-shadow-sm shadow">md:col-span-1 sm:col-span-2</div>
            
            <div class="py-5 border border-slate-300 rounded sm:col-span-2 drop-shadow-sm shadow">md:col-span-2</div>
            <div class="py-5 border border-slate-300 rounded sm:col-span-2 drop-shadow-sm shadow">md:col-span-2</div>
            <div class="py-5 border border-slate-300 rounded sm:col-span-2 drop-shadow-sm shadow">md:col-span-2</div>
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