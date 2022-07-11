import useStore from 'store'
import { createRouter, createWebHistory, Router } from 'vue-router'
import routes from './routes'

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(() => {
  const store = useStore()
  store.dashboard.setIsSBOpen(false)
})

export default router
