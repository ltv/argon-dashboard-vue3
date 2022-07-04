<template>
  <div class="w-full block mx-auto h-auto py-2">
    <div class="flex flex-wrap flex-col bg-white shadow mb-7 mx-auto rounded-md">
      <div class="py-5 px-6 border-b border-primary-white">
        <h3 class="cursor-auto">Light table</h3>
      </div>
      <div class="block overflow-x-auto w-full">
        <el-table :data="tableData" style="width: 100%" class="is-light">
          <el-table-column label="PROJECT" min-width="280">
            <template #default="scope">
              <div class="flex items-center">
                <a
                  href="#"
                  class="inline-flex border border-slate-50 w-12 h-12 rounded-full bg-[#adb5bd] items-center justify-center"
                >
                  <el-avatar :size="46" :src="scope.row.projectLogoPath" />
                </a>
                <span class="pl-5 mb-0 text-0.875 font-semibold cursor-auto">{{
                  scope.row.project
                }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="BUDGET" min-width="130">
            <template #default="scope">
              <div class="px-4 cursor-auto">
                <span class="text-0.8125 font-normal">${{ scope.row.budget }} USD</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="STATUS" min-width="167">
            <template #default="scope">
              <div class="px-4 flex items-center">
                <i
                  class="w-1.5 h-1.5 rounded-full"
                  aria-hidden="true"
                  :class="[
                    scope.row.status == 'on schedule'
                      ? 'bg-info'
                      : scope.row.status == 'delayed'
                      ? 'bg-danger'
                      : scope.row.status == 'pending'
                      ? 'bg-warning'
                      : 'bg-success',
                  ]"
                ></i>
                <span class="ml-2 pb-0.5 text-0.875 font-normal">{{ scope.row.status }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="USERS" min-width="155">
            <template #default="scope">
              <div class="px-4 flex items-center">
                <div class="flex justify-center -space-x-3">
                  <div
                    v-for="(value, index) in scope.row.users"
                    :key="index"
                    class="relative hover:z-10"
                    :class="`z-${index}`"
                  >
                    <el-popover
                      placement="top"
                      :width="10"
                      trigger="hover"
                      :content="value.name"
                      effect="dark"
                      popper-class="ava-column-popper"
                    >
                      <template #reference>
                        <el-avatar
                          :size="38"
                          class="cursor-pointer border-[2px] rounded-full border-white"
                          :src="value.avatarPath"
                        />
                      </template>
                    </el-popover>
                  </div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="COMPLETION" min-width="200">
            <template #default="scope">
              <div class="px-4 flex flex-row items-center">
                <div>
                  <span class="text-0.8125">{{ scope.row.completion }}%</span>
                </div>
                <div class="w-2/4 ml-2">
                  <el-progress
                    :percentage="scope.row.completion"
                    :show-text="false"
                    :color="customColorMethod(scope.row.status)"
                  />
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column width="60" fixed="right">
            <div class="text-center h-12 pt-2.5">
              <el-dropdown
                placement="bottom-end"
                trigger="click"
                popper-class="action-column-popper"
              >
                <el-button class="w-5 h-7 border-none el-button--secondary" plain>
                  <div class="flex items-center space-x-2 2xl:space-x-4 text-black px-5">
                    <DotsVerticalIcon
                      class="cursor-pointer h-5 w-5 text-[#ced4da] font-extrabold"
                    />
                  </div>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu class="my-0.5">
                    <el-dropdown-item class="mx-0 hover:bg-secondary text-zinc-800">
                      <div class="flex items-center w-40 h-6">
                        <span class="mb-0 text-sm font-normal">Action</span>
                      </div>
                    </el-dropdown-item>

                    <el-dropdown-item class="mx-0 hover:bg-secondary text-zinc-800">
                      <div class="flex items-center w-40 h-6">
                        <span class="mb-0 text-sm font-normal">Another Action</span>
                      </div>
                    </el-dropdown-item>

                    <el-dropdown-item class="mx-0 hover:bg-secondary text-zinc-800">
                      <div class="flex items-center w-40 h-6">
                        <span class="mb-0 text-sm font-normal">Something else here</span>
                      </div>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </el-table-column>
        </el-table>
      </div>
      <div class="p-4">
        <div class="flex justify-end mb-0">
          <el-pagination background layout="prev, pager, next" :total="30" />
        </div>
      </div>
    </div>
    <div class="flex flex-wrap flex-col shadow mb-7 mx-auto rounded-md bg-dark">
      <div class="py-5 px-6 border-b border-dark-light">
        <h3 class="cursor-auto text-slate-50">Dark table</h3>
      </div>
      <div class="block overflow-x-auto w-full">
        <el-table :data="tableData" style="width: 100%" class="is-dark">
          <el-table-column label="PROJECT" min-width="280">
            <template #default="scope">
              <div class="flex items-center">
                <a
                  href="#"
                  class="inline-flex border border-slate-50 w-12 h-12 rounded-full bg-[#adb5bd] items-center justify-center"
                >
                  <el-avatar :size="46" :src="scope.row.projectLogoPath" />
                </a>
                <span class="pl-5 mb-0 text-0.875 font-semibold cursor-auto">{{
                  scope.row.project
                }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="BUDGET" min-width="130">
            <template #default="scope">
              <div class="px-4 cursor-auto">
                <span class="text-0.8125 font-normal">${{ scope.row.budget }} USD</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="STATUS" min-width="167">
            <template #default="scope">
              <div class="px-4 flex items-center">
                <i
                  class="w-1.5 h-1.5 rounded-full"
                  aria-hidden="true"
                  :class="[
                    scope.row.status == 'on schedule'
                      ? 'bg-info'
                      : scope.row.status == 'delayed'
                      ? 'bg-danger'
                      : scope.row.status == 'pending'
                      ? 'bg-warning'
                      : 'bg-success',
                  ]"
                ></i>
                <span class="ml-2 pb-0.5 text-0.875 font-normal">{{ scope.row.status }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="USERS" min-width="155">
            <template #default="scope">
              <div class="px-4 flex items-center">
                <div class="flex justify-center -space-x-3">
                  <div
                    v-for="(value, index) in scope.row.users"
                    :key="index"
                    class="relative hover:z-10"
                    :class="`z-${index}`"
                  >
                    <el-popover
                      placement="top"
                      :width="10"
                      trigger="hover"
                      :content="value.name"
                      effect="dark"
                      popper-class="ava-column-popper"
                    >
                      <template #reference>
                        <el-avatar
                          :size="38"
                          class="cursor-pointer border-[2px] rounded-full border-slate-100"
                          :src="value.avatarPath"
                        />
                      </template>
                    </el-popover>
                  </div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="COMPLETION" min-width="200">
            <template #default="scope">
              <div class="px-4 flex flex-row items-center">
                <div>
                  <span class="text-0.8125">{{ scope.row.completion }}%</span>
                </div>
                <div class="w-2/4 ml-2">
                  <el-progress
                    :percentage="scope.row.completion"
                    :show-text="false"
                    :color="customColorMethod(scope.row.status)"
                  />
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column width="60" fixed="right">
            <div class="text-center h-12 pt-2.5">
              <el-dropdown
                placement="bottom-end"
                trigger="click"
                popper-class="action-column-popper"
              >
                <el-button
                  class="w-5 h-7 border-none bg-transparent hover:bg-dark hover:shadow-md"
                  plain
                >
                  <div class="flex items-center space-x-2 2xl:space-x-4 text-black px-5">
                    <DotsVerticalIcon
                      class="cursor-pointer h-5 w-5 text-slate-100 font-extrabold"
                    />
                  </div>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu class="my-0.5">
                    <el-dropdown-item>
                      <div class="flex items-center w-40 h-6">
                        <span class="mb-0 text-sm font-normal">Action</span>
                      </div>
                    </el-dropdown-item>

                    <el-dropdown-item>
                      <div class="flex items-center w-40 h-6">
                        <span class="mb-0 text-sm font-normal">Another Action</span>
                      </div>
                    </el-dropdown-item>

                    <el-dropdown-item>
                      <div class="flex items-center w-40 h-6">
                        <span class="mb-0 text-sm font-normal">Something else here</span>
                      </div>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { DotsVerticalIcon } from '@heroicons/vue/outline'
import John_Snow_Url from '@/assets/images/John_Snow.png'
import Team_2_Url from '@/assets/images/team-2.jpg'
import Team_3_Url from '@/assets/images/team-3.jpg'
import Team_4_Url from '@/assets/images/team-4.jpg'
import Logo_Url from '@/assets/images/ltv_logo.png'

interface User {
  avatarPath: string
  name: string
}
interface Project {
  projectLogoPath: string
  project: string
  budget: string
  status: string
  users: User[]
  completion: number
}
export default defineComponent({
  name: 'Table',
  components: {
    DotsVerticalIcon,
  },
  setup() {
    const usersData: User[] = [
      {
        avatarPath: John_Snow_Url,
        name: 'Ryan Tompson',
      },
      {
        avatarPath: Team_2_Url,
        name: 'Romina Hadid',
      },
      {
        avatarPath: Team_3_Url,
        name: 'Alexander Smith',
      },
      {
        avatarPath: Team_4_Url,
        name: 'Jessica Doe',
      },
    ]
    const tableData: Project[] = [
      {
        projectLogoPath: Logo_Url,
        project: 'Argon Design System',
        budget: '2500 ',
        status: 'pending',
        users: usersData,
        completion: 60,
      },
      {
        projectLogoPath: Logo_Url,
        project: 'Argon Design System',
        budget: '4000 ',
        status: 'completed',
        users: usersData,
        completion: 40,
      },
      {
        projectLogoPath: Logo_Url,
        project: 'Argon',
        budget: '2500 ',
        status: 'delayed',
        users: usersData,
        completion: 40,
      },
      {
        projectLogoPath: Logo_Url,
        project: 'Argon Design',
        budget: '3300 ',
        status: 'on schedule',
        users: usersData,
        completion: 10,
      },
      {
        projectLogoPath: Logo_Url,
        project: 'Argon System',
        budget: '3000 ',
        status: 'completed',
        users: usersData,
        completion: 20,
      },
    ]

    const customColorMethod = (status: string) => {
      if (status == 'on schedule') {
        return '#11CDEF'
      } else if (status == 'delayed') {
        return '#F5365C'
      } else if (status == 'pending') {
        return '#FB6340'
      } else {
        return '#2DCE89'
      }
    }

    return {
      tableData,
      customColorMethod,
    }
  },
})
</script>

<style lang="scss">
.ava-column-popper.el-popover.el-popper {
  @apply p-1 min-w-fit rounded-md text-white bg-black border-slate-600 #{!important};
  .el-popper__arrow::before {
    @apply bg-black #{!important};
  }
}
.action-column-popper {
  @apply rounded-lg -mt-3 #{!important};
  .el-popper__arrow {
    @apply hidden;
  }
  .el-dropdown-menu__item {
    @apply mx-0 text-zinc-800 #{!important};
    &:hover {
      @apply bg-secondary;
    }
  }
}
</style>
