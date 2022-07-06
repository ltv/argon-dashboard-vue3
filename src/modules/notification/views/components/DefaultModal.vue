<template>
  <div class="w-full">
    <el-dialog v-model="triggerModal" title="Type your modal title" @close="$emit('closeModal')">
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean.
      </p>
      <br />
      <p>
        A small river named Duden flows by their place and supplies it with the necessary
        regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
        mouth.
      </p>
      <template #footer>
        <span class="dialog-footer">
          <el-button class="btn-open" type="primary" @click="$emit('closeModal')"
            >Save changes</el-button
          >
          <el-button class="el-button--secondary" plain @click="$emit('closeModal')"
            >Close</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultModal',
  props: {
    triggerModal: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
