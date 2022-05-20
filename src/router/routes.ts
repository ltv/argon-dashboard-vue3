import {
  ViewBoardsIcon,
  TableIcon,
  ViewGridIcon,
  CreditCardIcon,
  CursorClickIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  BellIcon,
} from '@heroicons/vue/solid'


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
      icon: ViewBoardsIcon,
      color: 'text-left-bar-gray'
    },
  },
  {
    path: '/buttons',
    component: Button,
    name: 'Button',
    meta: {
      title: 'Buttons',
      icon: CursorClickIcon,
      color: 'text-left-bar-orange'
    },
  },
  {
    path: '/notifications',
    component: Notification,
    name: 'Notifications',
    meta: {
      title: 'Notifications',
      icon: BellIcon,
      color: 'text-left-bar-rose'
    },
  },
  {
    path: '/tables',
    component: Table,
    name: 'Tables',
    meta: {
      title: 'Tables',
      icon: TableIcon,
      color: 'text-left-bar-red'
    },
  },
  {
    path: '/grid',
    component: Grid,
    name: 'Grid',
    meta: {
      title: 'Grid',
      icon: ViewGridIcon,
      color: 'text-left-bar-cyan'
    },
  },
  {
    path: '/typography',
    component: Typography,
    name: 'Typography',
    meta: {
      title: 'Typography',
      icon: DocumentTextIcon,
      color: 'text-left-bar-yellow'
    },
  },
  {
    path: '/cards',
    component: Card,
    name: 'Cards',
    meta: {
      title: 'Cards',
      icon: CreditCardIcon,
      color: 'text-left-bar-indigo'
    },
  },
  {
    path: '/icons',
    component: Icons,
    name: 'Icons',
    meta: {
      title: 'Icons',
      icon: GlobeAltIcon,
      color: 'text-left-bar-red'
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
