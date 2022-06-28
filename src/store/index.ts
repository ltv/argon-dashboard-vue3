import { useDashboardStore } from 'modules/dashboard/store';
import { useAuthStore } from 'modules/auth/store';
import { defineStore } from 'pinia'

export const globalStore = defineStore('global', {
  state: () => ({
    loading: false,
  }),
  actions: {
    async actLoading(status: boolean) {
      this.loading = status
    },
  },
})

const useStore = () => ({
  dashboard: useDashboardStore(),
  auth: useAuthStore(),
  global: globalStore(),
});

export default useStore;