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

router.beforeEach(async (to) => {
  const store = useStore()
  const isLoginPage: boolean = to.name === 'login'
  store.auth.actLoginPage(isLoginPage)
  try {
    const isAuthenticated: boolean = store.auth.getAuthenticationState
    const requiresAuth: boolean = to.meta.requiresAuth as boolean ?? true
    
    if (isAuthenticated && isLoginPage) {
      return '/'
    }

    if (!isAuthenticated && requiresAuth) {
      return '/login'
    }
  } catch (err) {
    return isLoginPage ? '/' : '/login'
  }
})

export default router
