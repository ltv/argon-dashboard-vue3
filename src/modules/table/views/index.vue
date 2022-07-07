<template>
  <div class="w-full block mx-auto h-auto py-2">
    <div class="flex flex-wrap flex-col bg-white shadow mb-7 mx-auto rounded-md">
      <div class="py-5 px-6 border-b border-primary-white">
        <h3 class="cursor-auto">Light table</h3>
      </div>
      <div class="block overflow-x-auto w-full">
        <ProjectTable :tableData="tableData" />
      </div>
      <div class="p-4">
        <Pagination />
      </div>
    </div>
    <div class="flex flex-wrap flex-col shadow mb-7 mx-auto rounded-md bg-dark">
      <div class="py-5 px-6 border-b border-dark-light">
        <h3 class="cursor-auto text-slate-50">Dark table</h3>
      </div>
      <div class="block overflow-x-auto w-full">
        <ProjectTable :tableData="tableData" :theme="'dark'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import John_Snow_Url from '@/assets/images/John_Snow.png'
import Team_2_Url from '@/assets/images/team-2.jpg'
import Team_3_Url from '@/assets/images/team-3.jpg'
import Team_4_Url from '@/assets/images/team-4.jpg'
import Logo_Url from '@/assets/images/ltv_logo.png'
import ProjectTable from './components/ProjectTable.vue'

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
  name: 'Tables',
  components: {
    ProjectTable,
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

    return {
      tableData,
    }
  },
})
</script>
