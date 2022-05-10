const NotFound = () => import('modules/pages/views/404.vue')
const Dashboard = () => import('modules/dashboard/views/index.vue')
const Button = () => import('modules/dashboard/views/index.vue')
const Table = () => import('components/Table/index.vue')
const Notification = () => import('modules/notification/views/index.vue')
const routes = [
  {
    path: '/',
    component: Dashboard,
    name: 'Halana messenger',
  },
  {
    path: '/buttons',
    component: Button,
    name: 'Halana button',
  },
  {
    path: '/notification',
    component: Notification,
    name: 'Notification',
  },
  {
    path: '/tables',
    component: Table,
    name: 'Table',
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    name: 'NotFound',
    meta: {
      requiresAuth: false,
    },
  },
]

export default routes
