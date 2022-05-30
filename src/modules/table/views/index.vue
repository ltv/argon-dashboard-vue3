<template>
  <div class="w-full block w-full mx-auto h-auto w-full py-2">
    <div class="flex flex-wrap flex-col bg-white shadow mb-7 mx-auto rounded-md">
      <div class="py-5 px-6 border-b border-primary-white">
        <h3 class="cursor-auto">Light table</h3>
      </div>
      <div class="block overflow-x-auto w-full">
        <el-table :data="tableData" style="width: 100%" tooltip-effect="light">
          <el-table-column label="PROJECT" width="288">
            <template #default="scope">
              <div class="flex items-center">
                <a
                  href="#"
                  class="inline-flex border border-slate-50 w-12 h-12 rounded-full bg-[#adb5bd] items-center justify-center"
                >
                  <el-avatar :size="46" :src="scope.row.projectLogoPath" />
                </a>
                <span class="ml-3 mb-0 text-0.8125 font-semibold">{{ scope.row.project }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="BUDGET" width="115">
            <template #default="scope">
              <div class="cursor-auto">
                <span class="text-0.8125 font-normal">${{ scope.row.budget }} USD</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="STATUS" width="167">
            <template #default="scope">
              <div class="flex items-center">
                <i class="w-1 h-1 bg-warning"></i>
                <span class="ml-3 text-0.875 font-normal">{{ scope.row.status }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="USERS" width="155">
            <template #default="scope">
              <div class="flex items-center">
                <div class="flex justify-center -space-x-3">
                  <div
                    v-for="(value, index) in scope.row.users"
                    :key="index"
                    class="relative"
                    :class="'z-' + index"
                  >
                    <a href="#" data-toggle="tooltip" :data-original-title="value.name">
                      <el-avatar
                        :size="35"
                        class="cursor-pointer border border-2 rounded-full border-white"
                        :src="value.avatarPath"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="COMPLETION" width="210">
            <template #default="scope">
              <div class="flex flex-row items-center">
                <div>
                  <span class="text-0.8125">{{ scope.row.completion }}%</span>
                </div>
                <div class="w-2/3 ml-2">
                  <el-progress :percentage="scope.row.completion" :show-text="false" />
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="ACTION">
            <div class="text-center">
              <el-dropdown placement="bottom-end" trigger="click">
                <el-button class="w-5 h-7 el-button--secondary border-none" plain>
                  <div class="flex items-center space-x-2 2xl:space-x-4 text-black px-5">
                    <DotsVerticalIcon class="cursor-pointer h-5 w-5 text-gray-400 font-extrabold" />
                  </div>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item class="mx-0 my-2 hover:bg-slate-100 text-zinc-800">
                      <div class="flex flex-row items-center w-full h-6">
                        <div class="flex w-auto">
                          <el-icon :size="22" class="cursor-pointer w-5 h-6">
                            <UserFilled />
                          </el-icon>
                        </div>
                        <div class="basis-0 grow w-full ml-4">
                          <div class="">
                            <div>
                              <span class="mb-0 text-sm font-normal">My profile</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </el-dropdown-item>

                    <el-dropdown-item divided class="mx-0 mt-2 hover:bg-slate-100 text-zinc-800">
                      <div class="flex flex-row items-center w-full h-6">
                        <div class="flex w-auto">
                          <el-icon :size="20" class="cursor-pointer w-5 h-6">
                            <CircleClose />
                          </el-icon>
                        </div>
                        <div class="basis-0 grow w-full ml-4">
                          <div class="">
                            <div>
                              <span class="mb-0 text-sm font-normal">Logout</span>
                            </div>
                          </div>
                        </div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DotsVerticalIcon } from '@heroicons/vue/outline'

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
        avatarPath: 'src/assets/images/Jon_Snow.png',
        name: 'Ryan Tompson',
      },
      {
        avatarPath: 'src/assets/images/Jon_Snow.png',
        name: 'Romina Hadid',
      },
      {
        avatarPath: 'src/assets/images/Jon_Snow.png',
        name: 'Alexander Smith',
      },
      {
        avatarPath: 'src/assets/images/Jon_Snow.png',
        name: 'Jessica Doe',
      },
    ]
    const tableData: Project[] = [
      {
        projectLogoPath: 'src/assets/images/bootstrap.jpg',
        project: 'Argon Design System',
        budget: '2500 ',
        status: 'pending',
        users: usersData,
        completion: 60,
      },
      {
        projectLogoPath: 'src/assets/images/bootstrap.jpg',
        project: 'Argon Design System',
        budget: '2500 ',
        status: 'pending',
        users: usersData,
        completion: 60,
      },
      {
        projectLogoPath: 'src/assets/images/bootstrap.jpg',
        project: 'Argon Design System',
        budget: '2500 ',
        status: 'pending',
        users: usersData,
        completion: 60,
      },
      {
        projectLogoPath: 'src/assets/images/bootstrap.jpg',
        project: 'Argon Design System',
        budget: '2500 ',
        status: 'pending',
        users: usersData,
        completion: 60,
      },
      {
        projectLogoPath: 'src/assets/images/bootstrap.jpg',
        project: 'Argon Design System',
        budget: '2500 ',
        status: 'pending',
        users: usersData,
        completion: 60,
      },
    ]
    return { tableData, usersData }
  },
})
</script>

<style>
.el-progress-bar .el-progress-bar__outer {
  @apply h-1 !important;
}
</style>
