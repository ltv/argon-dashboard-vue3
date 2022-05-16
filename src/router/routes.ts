const NotFound = () => import('modules/pages/views/404.vue')
const Dashboard = () => import('modules/dashboard/views/index.vue')
const Table = () => import('modules/table/views/index.vue')
const Grid = () => import('modules/grid/views/index.vue')
const Notification = () => import('modules/notification/views/index.vue')
const Button = () => import('modules/buttons/views/index.vue')
const Typography = () => import('modules/typography/views/index.vue')
const routes = [
  {
    path: '/',
    component: Dashboard,
    name: 'Halana messenger',
  },
  {
    path: '/buttons',
    component: Button,
    name: 'Button',
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
    path: '/grid',
    component: Grid,
    name: 'Grid',
  },
  { 
    path: '/typography',
    component: Typography,
    name: 'Typography',
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
