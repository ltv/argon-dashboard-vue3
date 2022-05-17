<template>
  <div class="p-6 bg-slate-50 w-full h-full">
    <div class="block w-4/5 h-auto mx-auto">
      <div class="flex">
        <div class="container h-auto mx-auto border border-slate-50 bg-white shadow-lg mt-5 rounded">
          <div class="font-semibold text-lg text-indigo-900 px-4 pt-4">
            Grid system
          </div>
          <el-divider />
          <div class="md:grid grid-cols-5 gap-6 px-8 mb-6 text-center">
            <div class="py-2 my-2 border border-slate-300 rounded drop-shadow-md shadow">One of five columns</div>
            <div class="py-2 my-2 border border-slate-300 rounded drop-shadow-md shadow">One of five columns</div>
            <div class="py-2 my-2 border border-slate-300 rounded drop-shadow-md shadow">One of five columns</div>
            <div class="py-2 my-2 border border-slate-300 rounded drop-shadow-md shadow">One of five columns</div>
            <div class="py-2 my-2 border border-slate-300 rounded drop-shadow-md shadow">One of five columns</div>
          </div>
        </div>
      </div>

      <div class="flex pt-8">
        <div class="container h-auto mx-auto border border-slate-50 bg-white shadow-lg mt-5 rounded">
          <div class="font-semibold text-lg text-indigo-900 px-4 pt-4">
            Equal-width
          </div>
          <el-divider />
          <div class="grid grid-cols-6 gap-6 px-8 mb-6 text-center items-center">
            <div class="py-2 my-2 border border-slate-300 rounded col-span-3 drop-shadow-md shadow">1 of 2</div>
            <div class="py-2 my-2 border border-slate-300 rounded col-span-3 drop-shadow-md shadow">1 of 2</div>

            <div class="py-2 border border-slate-300 rounded col-span-2 drop-shadow-md shadow">1 of 3</div>
            <div class="py-2 border border-slate-300 rounded col-span-2 drop-shadow-md shadow">1 of 3</div>
            <div class="py-2 border border-slate-300 rounded col-span-2 drop-shadow-md shadow">1 of 3</div>
          </div>
        </div>
      </div>

      <div class="flex pt-8">
        <div class="container h-auto mx-auto border border-slate-50 bg-white shadow-lg mt-5 rounded">
          <div class="font-semibold text-lg px-4 pt-4 text-indigo-900">
            Setting one column width
          </div>
          <el-divider />
          <div class="sm:grid grid-cols-6 gap-6 px-8 mb-6 text-center">
            <div class="py-2 my-2 border border-slate-300 rounded col-span-2 drop-shadow-md shadow">1 of 3</div>
            <div class="py-2 my-2 border border-slate-300 rounded col-span-1 drop-shadow-md shadow">2 of 3 (smaller)</div>
            <div class="py-2 my-2 border border-slate-300 rounded col-start-5 col-span-2 drop-shadow-md shadow">3 of 3</div>

            <div class="py-2 my-2 border border-slate-300 rounded col-span-4 drop-shadow-md shadow">1 of 3 (wider)</div>
            <div class="py-2 my-2 border border-slate-300 rounded col-span-1 drop-shadow-md shadow">2 of 3</div>
            <div class="py-2 my-2 border border-slate-300 rounded col-span-1 drop-shadow-md shadow">3 of 3</div>

            <div class="py-2 my-2 border border-slate-300 rounded col-span-3 drop-shadow-md shadow">1 of 3 (wider)</div>
            <div class="py-2 my-2 border border-slate-300 rounded drop-shadow-md shadow">2 of 3</div>
            <div class="py-2 my-2 border border-slate-300 rounded col-start-5 col-span-2 drop-shadow-md shadow">3 of 3 (wider)</div>
          </div>
        </div>
      </div>

      <div class="flex pt-8">
        <div class="container h-auto mx-auto border border-slate-50 bg-white shadow-lg mt-5 rounded">
          <div class="font-semibold text-lg px-4 pt-4 text-indigo-900">
            Variable width content
          </div>
          <el-divider />
          <div class="sm:grid grid-cols-6 gap-6 px-8 mb-6 text-center">
            <div class="py-5 my-2 border border-slate-300 rounded col-end-3 drop-shadow-sm shadow">01</div>
            <div class="py-5 my-2 border border-slate-300 rounded col-start-3 col-span-2 drop-shadow-sm shadow">02</div>
            <div class="py-2 my-2 border border-slate-300 rounded drop-shadow-sm shadow">Variable width content</div>

            <div class="py-5 my-2 border border-slate-300 rounded col-start-2 drop-shadow-sm shadow">01</div>
            <div class="py-2 my-2 border border-slate-300 rounded col-start-3 col-auto drop-shadow-sm shadow">Variable width content</div>
            <div class="py-5 my-2 border border-slate-300 rounded col-start-4 drop-shadow-sm shadow">03</div>

            <div class="py-2 my-2 border border-slate-300 rounded col-start-1 drop-shadow-sm shadow">Variable width content</div>
            <div class="py-5 my-2 border border-slate-300 rounded col-span-3 drop-shadow-sm shadow">02</div>
            <div class="py-5 my-2 border border-slate-300 rounded col-span-2 drop-shadow-sm shadow">03</div>

          </div>
        </div>
      </div>

      <div class="flex pt-8">
        <div class="container h-auto mx-auto border border-slate-50 bg-white shadow-lg mt-5 rounded">
          <div class="font-semibold text-lg px-4 pt-4 text-indigo-900">
            Equal-width multi-row
          </div>
          <el-divider />
          <div class="grid grid-cols-3 gap-6 px-8 mb-6  text-center">
            <div class="py-2 my-2 border border-slate-300 rounded drop-shadow-sm shadow">01</div>
            <div class="py-2 my-2 border border-slate-300 rounded drop-shadow-sm shadow">02</div>
            <div class="py-2 my-2 border border-slate-300 rounded drop-shadow-sm shadow">03</div>

            <div class="py-2 my-2 border border-slate-300 rounded drop-shadow-sm shadow">01</div>
            <div class="py-2 my-2 border border-slate-300 rounded drop-shadow-sm shadow">02</div>
            <div class="py-2 my-2 border border-slate-300 rounded drop-shadow-sm shadow">03</div>

            <div class="py-2 my-2 border border-slate-300 rounded drop-shadow-sm shadow">01</div>
            <div class="py-2 my-2 border border-slate-300 rounded drop-shadow-sm shadow">02</div>
            <div class="py-2 my-2 border border-slate-300 rounded drop-shadow-sm shadow">03</div>

          </div>
        </div>
      </div>

      <div class="flex pt-8">
        <div class="container h-auto mx-auto border border-slate-50 bg-white shadow-lg mt-5 rounded">
          <div class="font-semibold text-lg px-4 pt-4 text-indigo-900">
            Mix and match
          </div>
          <el-divider />
          <div class="sm:flex sm:flex-wrap md:grid grid-cols-6 gap-6 px-8 mb-6  text-center">
            <div class="py-5 my-2 border border-slate-300 rounded md:col-span-1 sm:col-span-3 drop-shadow-sm shadow">md:col-span-1 sm:col-span-3</div>
            <div class="py-5 my-2 border border-slate-300 rounded md:col-span-1 sm:col-span-2 drop-shadow-sm shadow">md:col-span-1 sm:col-span-2</div>
            <div class="py-7 my-2 border border-slate-300 rounded md:col-span-4 sm:col-span-1 drop-shadow-sm shadow">md:col-span-4 sm:col-span-1</div>

            <div class="py-5 my-2 border border-slate-300 rounded md:col-span-3 sm:col-span-2 drop-shadow-sm shadow">md:col-span-3 sm:col-span-2</div>
            <div class="py-5 my-2 border border-slate-300 rounded md:col-span-2 sm:col-span-2 drop-shadow-sm shadow">md:col-span-2 sm:col-span-2</div>
            <div class="py-2 my-2 border border-slate-300 rounded md:col-span-1 sm:col-span-2 drop-shadow-sm shadow">md:col-span-1 sm:col-span-2</div>
            
            <div class="py-5 my-2 border border-slate-300 rounded sm:col-span-2 drop-shadow-sm shadow">md:col-span-2</div>
            <div class="py-5 my-2 border border-slate-300 rounded sm:col-span-2 drop-shadow-sm shadow">md:col-span-2</div>
            <div class="py-5 my-2 border border-slate-300 rounded sm:col-span-2 drop-shadow-sm shadow">md:col-span-2</div>
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