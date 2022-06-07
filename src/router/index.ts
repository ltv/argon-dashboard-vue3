import {
  createRouter,
  createWebHistory,
  Router,
} from 'vue-router'
import routes from './routes'
import { useAuthStore } from '../modules/auth/store'

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from) => {
  const store = useAuthStore()
  const isAuthenticated: boolean = store.getAuthenticationState
  const isLoginPage = to.name === 'login'
  if (!isAuthenticated && !isLoginPage) {
    return { name: 'login' }
  }
})

export default router
