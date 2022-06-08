import { useDashboardStore } from 'modules/dashboard/store';
import { useAuthStore } from 'modules/auth/store';

const useStore = () => ({
  dashboard: useDashboardStore(),
  auth: useAuthStore(),
});

export default useStore;