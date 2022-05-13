<template>
  <div class="flex p-6 h-full">
    <div class="block rounded h-full w-full">  
      <div class="pl-4">
        <div class="text-blue">
          <div class="relative flex flex-grow pt-1">
            <div class="items-center">
              <UserAddIcon class="h-7 w-7" aria-hidden="true" />
            </div>
            <span class="pl-1 text-xl text-blue font-bold">Recruitment Request</span>

            <div class="py-1">
              <span class="pl-6 text-sm text-gray-400">350 Total Request</span>
            </div>
          </div>
        </div>
      </div>  
      <div class="pl-12 mt-4 drop-shadow-[0_6px_3px_rgba(0,64,255,0.25)]">
        <el-dropdown size="small" split-button type="primary" @command="handleCommand">
          <span class="px-2"> Show: <span class="text-blue"> {{ choosedItem }}</span></span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item 
                v-for="item in options"
                :key="item.value"
                :value="item.value"
                :command="item.label"
                >
                {{ item.label }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="flex">
        <el-table
          ref="multipleTableRef"
          :data="tasks"
          :row-class-name="tableRowClassName"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          class="h-full w-full"
        >
          <el-table-column type="selection" class="flex-none" width="42"/>
          <el-table-column property="content" label="Request">
            <template #default="scope">
              <div :class='{ done: scope.row.isDone }'>
                {{ scope.row.content }}
              </div>
            </template>
          </el-table-column>
          <el-table-column label="Status" align="center" header-align="center">
            <template #default="scope">
              <el-tag
                :type="scope.row.status == 'Urgent' ? 'danger': scope.row.status == 'Normal' ? 'primary' : 'success'"
                effect="dark"
                round
              >
                {{ scope.row.status }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="Date Create">
            <template #default="scope">
              <div class="text-slate-400">
                {{ scope.row.creDate }}
              </div>
            </template>
          </el-table-column>
          <el-table-column label-class-name="deadline" label="Deadline">
            <template #default="scope">
              {{ scope.row.deadLine }}
            </template>
          </el-table-column>
          <el-table-column label="Action" align="center">
            <template #default="scope">
              <el-button 
              class="px-8 border-blue-200 color-blue-200"
              type="primary"
              size="small"
              @click="console.log(scope.$index)"
              round
              plain
              >
              View
              </el-button>
            </template>
          </el-table-column>
        </el-table>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { ElTable } from 'element-plus'
// Icon
import {
  UserAddIcon,
} from '@heroicons/vue/outline'

interface Task {
  id: any
  content: string
  status: string
  deadLine: any
  creDate: any
  isDone: boolean
}

export default defineComponent({
  name: 'Table',
  components: {
    //Icon
    UserAddIcon,
  },
  setup(_) {
    const newTask = ref('');
    const dialogVisible = ref(false)
    const tasks = ref<Task[]>([
      {
        id: 1,
        creDate: '12/12/2022',
        deadLine: '14/12/2022',
        status: 'Urgent',
        isDone: false,
        content: 'Store Saler',
      },
      {
        id: 2,
        creDate: '12/12/2022',
        deadLine: '14/12/2022',
        status: 'Urgent',
        isDone: false,
        content: 'Product',
      },
      {
        id: 3,
        creDate: '12/12/2022',
        deadLine: '14/12/2022',
        status: 'Normal',
        isDone: true,
        content: 'Retailer',
      },
      {
        id: 4,
        creDate: '12/12/2022',
        deadLine: '14/12/2022',
        status: 'Normal',
        isDone: true,
        content: 'Store Saler',
      },
      {
        id: 5,
        creDate: '12/12/2022',
        deadLine: '14/12/2022',
        status: 'Normal',
        isDone: true,
        content: 'Store Saler',
      },
      {
        id: 5,
        creDate: '12/12/2022',
        deadLine: '14/12/2022',
        status: 'Pending',
        isDone: false,
        content: 'Accountant',
      },
    ]);
    const multipleTableRef = ref<InstanceType<typeof ElTable>>()
    const multipleSelection = ref<Task[]>([])

    const value = ref('')

    const options = [
      {
        value: 'Option1',
        label: 'By team',
      },
      {
        value: 'Option2',
        label: 'By project',
      },
      {
        value: 'Option3',
        label: 'By create date',
      },
      {
        value: 'Option4',
        label: 'By dead line',
      },
    ]

    const choosedItem = ref(options[0].label)

    const handleCommand = (command: string) => {
      choosedItem.value = " " + command
    }

    const handleSelectionChange = (val: Task[]) => {
      multipleSelection.value = val
      tasks.value.forEach((task) => {
        if (task.status != "Pending") {
          if (multipleSelection.value.includes(task)) {
            task.isDone = true;
            task.status = 'Done';
          }
          else {
            task.isDone = false;
            task.status = 'Urgent';
          }
        }
      })
    }

    const tableRowClassName = ({
      _row,
      rowIndex,
    }: {
      _row: Task
      rowIndex: number
    }) => {
      if (rowIndex % 2 == 0) {
        return 'success-row'
      } else return 'primary-row'
    }

    const toggleDone = (task: any) => {
      task.isDone = !task.isDone;
    };


    return {
      tasks,
      newTask,
      multipleTableRef,
      value,
      options,
      choosedItem,
      dialogVisible,
      handleCommand,
      toggleDone,
      handleSelectionChange,
      tableRowClassName,
    };
  },
})
</script>
<style>

.deadline {
  @apply text-lime-400;
}

.el-button.el-button--primary.el-button--small.is-plain:hover {
  @apply bg-blue-50 text-blue-300 !important;
}

.el-dropdown .el-button-group .el-button.el-button--primary.el-button--small {
  @apply border-none !important;
}

/* .el-dropdown .el-button-group .el-button.el-button--primary.el-button--small.el-dropdown__caret-button {
  cursor: progress;
} */
</style>

