<template>
  <div class="w-full block mx-auto h-auto lg:max-w-2/3">
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Styles</h3>
      </template>
      <div>
        <StyleButtons />
      </div>
    </el-card>

    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Colors</h3>
      </template>
      <div>
        <ColorButtons />
      </div>
    </el-card>

    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Outline</h3>
      </template>
      <div>
        <OutlineButtons />
      </div>
    </el-card>

    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Sizes</h3>
      </template>

      <div>
        <SizeButtons />
      </div>
    </el-card>

    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Group</h3>
      </template>

      <div>
        <GroupButtons />
      </div>
    </el-card>
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-primary-dark">Social</h3>
      </template>
      <div>
        <SocialButtons />
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import StyleButtons from './components/StyleButtons.vue'
import ColorButtons from './components/ColorButtons.vue'
import OutlineButtons from './components/OutlineButtons.vue'
import SizeButtons from './components/SizeButtons.vue'
import SocialButtons from './components/SocialButtons.vue'
import GroupButtons from './components/GroupButtons.vue'

export default defineComponent({
  components: {
    StyleButtons,
    ColorButtons,
    OutlineButtons,
    SizeButtons,
    GroupButtons,
    SocialButtons,
  },
})
</script>
