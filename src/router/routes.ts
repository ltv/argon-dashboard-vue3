import {
  HomeIcon,
  TableIcon,
  ViewGridIcon,
  CreditCardIcon,
  IdentificationIcon,
  MenuAlt1Icon,
  AnnotationIcon,
} from '@heroicons/vue/outline'

const NotFound = () => import('modules/pages/views/404.vue')
const Dashboard = () => import('modules/dashboard/views/index.vue')
const Table = () => import('modules/table/views/index.vue')
const Grid = () => import('modules/grid/views/index.vue')
const Notification = () => import('modules/notification/views/index.vue')
const Button = () => import('modules/buttons/views/index.vue')
const Typography = () => import('modules/typography/views/index.vue')
const Card = () => import('modules/cards/views/index.vue')
const Icons = () => import('modules/icons/views/index.vue')
const routes = [
  {
    path: '/',
    component: Dashboard,
    name: 'Dashboard',
    meta: {
      title: 'Dashboard',
      icon: HomeIcon,
    },
  },
  {
    path: '/buttons',
    component: Button,
    name: 'Button',
    meta: {
      title: 'Buttons',
      icon: MenuAlt1Icon,
    },
  },
  {
    path: '/notifications',
    component: Notification,
    name: 'Notifications',
    meta: {
      title: 'Notifications',
      icon: AnnotationIcon,
    },
  },
  {
    path: '/tables',
    component: Table,
    name: 'Tables',
    meta: {
      title: 'Tables',
      icon: TableIcon,
    },
  },
  {
    path: '/grid',
    component: Grid,
    name: 'Grid',
    meta: {
      title: 'Grid',
      icon: ViewGridIcon,
    },
  },
  {
    path: '/typography',
    component: Typography,
    name: 'Typography',
    meta: {
      title: 'Typography',
      icon: HomeIcon,
    },
  },
  {
    path: '/cards',
    component: Card,
    name: 'Cards',
    meta: {
      title: 'Cards',
      icon: CreditCardIcon,
    },
  },
  {
    path: '/icons',
    component: Icons,
    name: 'Icons',
    meta: {
      title: 'Icons',
      icon: IdentificationIcon,
    },
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
