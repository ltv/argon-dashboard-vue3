<template>
  <div class="flex p-6 h-full">
    <div class="block rounded h-full w-full">    
      <div class="pl-12 mt-4">
        <el-dropdown size="small" split-button type="primary" @command="handleCommand">
          <span> Show: <span class="text-blue"> {{ choosedItem }}</span></span>
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
          <el-table-column type="selection" class="flex-none" width="55"/>
          <el-table-column property="content" label="Request" class="flex-1">
            <template #default="scope">
              <div :class='{ done: scope.row.isDone }'>
                {{ scope.row.content }}
              </div>
            </template>
          </el-table-column>
          <el-table-column label="Status" align="center" header-align="center">
            <template #default="scope">
              <el-tag
                :type="scope.row.status == 'Urgent' ? 'danger': scope.row.status == 'Done' ? 'primary' : 'success'"
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
                size="small"
                type="plain"
                @click="console.log(scope.$index)"
                round
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
        status: 'Pending',
        isDone: false,
        content: 'Retailer',
      },
      {
        id: 3,
        creDate: '12/12/2022',
        deadLine: '14/12/2022',
        status: 'Urgent',
        isDone: false,
        content: 'Store Saler',
      },
      {
        id: 4,
        creDate: '12/12/2022',
        deadLine: '14/12/2022',
        status: 'Urgent',
        isDone: false,
        content: 'Store Saler',
      },
      {
        id: 5,
        creDate: '12/12/2022',
        deadLine: '14/12/2022',
        status: 'Urgent',
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
  color: rgb(0, 180, 0);
}

</style>

