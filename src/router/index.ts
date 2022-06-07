import {
  createRouter,
  createWebHistory,
  Router,
} from 'vue-router'
import routes from './routes'
import useStore from 'store'

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from) => {
  const store = useStore()
  const isAuthenticated: boolean = store.auth.getAuthenticationState
  const isLoginPage = to.name === 'login'
  if (!isAuthenticated && !isLoginPage) {
    return { name: 'login' }
  }
})

export default router
