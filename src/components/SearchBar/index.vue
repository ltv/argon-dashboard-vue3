<template>
  <div class="relative flex-grow w-full h-11.5 mb-0.5">
    <div class="z-10 absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <font-awesome-icon class="text-gray-500" :icon="['fas', 'search']" size="sm" />
    </div>
    <div>
      <el-input
        v-model="textInput"
        type="text"
        placeholder="Search"
        input-style="color: black; font-weight: 400;font-size: .875rem;"
      />
      <div
        class="flex z-10 absolute inset-y-0 right-0 pr-4 items-center lg:hidden md:hidden sm:hidden"
        :class="{ hidden: isSBPin }"
      >
        <el-icon
          :size="20"
          class="cursor-pointer w-4 h-4 text-black hover:text-slate-300"
          @click="$emit('close-search')"
        >
          <Close />
        </el-icon>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import useStore from 'store'
import { Close } from '@element-plus/icons-vue'
export default defineComponent({
  name: 'SearchBar',
  components: {
    Close,
  },
  setup() {
    const store = useStore()
    const textInput = ref('')
    const isSBPin = computed(() => store.dashboard.isSBPin)

    return {
      isSBPin,
      textInput,
    }
  },
})
</script>

<style lang="scss" scoped>
.el-input {
  @apply w-full;
  ::v-deep(.el-input__inner) {
    @apply relative transition-all duration-200 pt-2.5 pl-10.25 placeholder:text-sm placeholder:text-gray-500/90 text-sm w-full sm:w-[291px] h-11.5 resize-y leading-6 rounded-full bg-[#eff1fc] font-normal shadow-none border-none #{!important};
    &:focus {
      @apply w-full sm:w-98 bg-white text-black border-indigo-410 #{!important};
    }
  }
}
</style>
