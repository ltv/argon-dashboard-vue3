<template>
  <div class="w-full">
    <el-card class="border-slate-100" :body-style="{ padding: '0px' }">
      <img alt="..." src="@/assets/images/window-purple-image.jpg" />
      <div class="text-normal text-base font-normal p-4 border border-white border-b-slate-200">
        Cras justo odio
      </div>
      <div class="text-normal text-base font-normal p-4 border border-white border-b-slate-200">
        Dapibus ac facilisis in
      </div>
      <div class="text-normal text-base font-normal p-4 border border-white border-b-slate-200">
        Vestibulum at eros
      </div>

      <div class="p-6">
        <div class="card-header mb-4">
          <h3>Card title</h3>
        </div>
        <p class="break-normal text-normal mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est fuga
          nobis ipsum illum eligendi nemo iure repellat, soluta, optio minus ut reiciendis
          voluptates enim impedit veritatis officiis.
        </p>
        <div>
          <el-button type="primary" class="py-5">Go somewhere</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ListGroupCard',
})
</script>
