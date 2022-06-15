<template>
  <div class="w-full">
    <div class="flex flex-wrap flex-col bg-white shadow mb-7 mx-auto rounded-md">
      <div class="flex flex-wrap items-center bg-transparent">
        <div class="max-w-full basis-0 grow">
          <h3>{{ title }}</h3>
        </div>
        <div class="max-w-full basis-0 grow">
          <div class="flex flex-wrap mb-0 pl-0 justify-end gap-x-3">
            <div>
              <el-button type="primary" class="py-2 px-3 w-20 h-9">
                <span class="hidden md:block font-medium text-sm">See all</span>
              </el-button>
            </div>
          </div>
        </div>
      </div>

      <div class="block overflow-x-auto w-full">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" />
          <el-table-column prop="name" label="Name" />
          <el-table-column prop="address" label="Address" fixed="right" width="250" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'

export default defineComponent({
  name: 'SocialTrafficTable',
  props: {
    title: {
      type: String,
      default: 'Social traffic',
    },
  },
  setup() {
    const tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ]
    return {
      tableData,
    }
  },
})
</script>
