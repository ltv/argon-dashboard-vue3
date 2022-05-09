import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  Router,
} from 'vue-router'
import routes from './routes'

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

//@ts-ignore
const beforeEnter = (_to: RouteLocationNormalized) => {
  // This is intentional
}

router.getRoutes().forEach((route) => (route.beforeEnter = beforeEnter))

export default router
