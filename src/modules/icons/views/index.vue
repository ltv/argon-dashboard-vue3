<template>
  <div class="card">
    <div class="card-header">
      <h3 class="text-lg">Headings</h3>
    </div>
    <div class="flex flex-wrap max-w-full p-5">
      <div id="icon" class="w-full p-1">
        <el-button>
          <el-icon class="text-2xl inline-block icon-color">
            <BeakerIcon />
          </el-icon>
          <span>BeakerIcon</span>
        </el-button>

        <el-button>
          <el-icon class="text-2xl inline-block icon-color">
            <BeakerIcon />
          </el-icon>
          <span>BeakerIcon</span>
        </el-button>

        <el-button>
          <el-icon class="text-2xl inline-block icon-color">
            <BeakerIcon />
          </el-icon>
          <span>BeakerIcon</span>
        </el-button>

        <el-button>
          <el-icon class="text-2xl inline-block icon-color">
            <BeakerIcon />
          </el-icon>
          <span>BeakerIcon</span>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BeakerIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: { BeakerIcon },
})
</script>
