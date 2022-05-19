import {
  HomeIcon,
  DesktopComputerIcon,
  TableIcon,
  ViewGridIcon,
  CreditCardIcon,
  CursorClickIcon,
  MenuAlt1Icon,
  AnnotationIcon,
  GlobeAltIcon,
  LocationMarkerIcon,
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
      icon: DesktopComputerIcon,
      color: '#5e72e4'
    },
  },
  {
    path: '/buttons',
    component: Button,
    name: 'Button',
    meta: {
      title: 'Buttons',
      icon: CursorClickIcon,
      color: '#172b4d'
    },
  },
  {
    path: '/notifications',
    component: Notification,
    name: 'Notifications',
    meta: {
      title: 'Notifications',
      icon: AnnotationIcon,
      color: '#f4645f'
    },
  },
  {
    path: '/tables',
    component: Table,
    name: 'Tables',
    meta: {
      title: 'Tables',
      icon: TableIcon,
      color: '#172b4d'
    },
  },
  {
    path: '/grid',
    component: Grid,
    name: 'Grid',
    meta: {
      title: 'Grid',
      icon: ViewGridIcon,
      color: '#fb6340'
    },
  },
  {
    path: '/typography',
    component: Typography,
    name: 'Typography',
    meta: {
      title: 'Typography',
      icon: LocationMarkerIcon,
      color: '#fb6340'
    },
  },
  {
    path: '/cards',
    component: Card,
    name: 'Cards',
    meta: {
      title: 'Cards',
      icon: CreditCardIcon,
      color: '#172b4d'
    },
  },
  {
    path: '/icons',
    component: Icons,
    name: 'Icons',
    meta: {
      title: 'Icons',
      icon: GlobeAltIcon,
      color: '#172b4d'
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
