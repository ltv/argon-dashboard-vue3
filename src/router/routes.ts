import {
  ViewGridIcon,
  CursorClickIcon,
  DocumentTextIcon,
  StarIcon,
  HomeIcon,
  ViewBoardsIcon,
  BellIcon,
  LocationMarkerIcon,
  UserIcon,
  ColorSwatchIcon
} from '@heroicons/vue/outline'

import {
  CreditCardIcon,
} from '@heroicons/vue/solid'

const Login = () => import('modules/auth/views/login.vue')
const Register = () => import('modules/auth/views/register.vue')
const ForgotPassword = () => import('modules/auth/views/forgot-password.vue')
const NotFound = () => import('modules/pages/views/404.vue')
const Dashboard = () => import('modules/dashboard/views/index.vue')
const Table = () => import('modules/table/views/index.vue')
const Grid = () => import('modules/grid/views/index.vue')
const Notification = () => import('modules/notification/views/index.vue')
const Button = () => import('modules/buttons/views/index.vue')
const Typography = () => import('modules/typography/views/index.vue')
const Card = () => import('modules/cards/views/index.vue')
const Icons = () => import('modules/icons/views/index.vue')
const Profile = () => import('modules/profile/views/index.vue')
const Map = () => import('modules/map/views/index.vue')

const ComponentLayout = () => import('components/ComponentLayout/index.vue')


const routes = [
  {
    path: '/',
    component: Dashboard,
    name: 'Dashboard',
    meta: {
      title: 'Dashboard',
      icon: HomeIcon,
      color: 'text-left-bar-indigo',
      requiresAuth: true,
      parentPath: 'Home'
    },
  },
  {
    path: '/components/:componentItem?',
    component: ComponentLayout,
    name: 'Components',
    meta: {
      title: 'Components',
      icon: ColorSwatchIcon,
      color: 'text-left-bar-indigo',
      requiresAuth: true,
      parentPath: 'Components'
    },
    children: [
      {
        path: '',
        name: 'Buttons',
        component: Button,
        meta: {
          title: 'Buttons',
          icon: CursorClickIcon,
          color: 'text-left-bar-rose',
          requiresAuth: true,
        },
      },
      {
        path: 'notifications',
        component: Notification,
        name: 'Notifications',
        meta: {
          title: 'Notifications',
          icon: BellIcon,
          color: 'text-left-bar-green',
          requiresAuth: true,
        },
      },
      {
        path: 'tables',
        component: Table,
        name: 'Tables',
        meta: {
          title: 'Tables',
          icon: ViewBoardsIcon,
          color: 'text-left-bar-indigo',
          requiresAuth: true,
        },
      },
      {
        path: 'grid',
        component: Grid,
        name: 'Grid',
        meta: {
          title: 'Grid',
          icon: ViewGridIcon,
          color: 'text-left-bar-cyan',
          requiresAuth: true,
        },
      },
      {
        path: 'typography',
        component: Typography,
        name: 'Typography',
        meta: {
          title: 'Typography',
          icon: DocumentTextIcon,
          color: 'text-left-bar-yellow',
          requiresAuth: true,
        },
      },
      {
        path: 'cards',
        component: Card,
        name: 'Cards',
        meta: {
          title: 'Cards',
          icon: CreditCardIcon,
          color: 'text-left-bar-orange',
          requiresAuth: true,
        },
      },
      {
        path: 'icons',
        component: Icons,
        name: 'Icons',
        meta: {
          title: 'Icons',
          icon: StarIcon,
          color: 'text-left-bar-red',
          requiresAuth: true,
        },
      },
    ]
  },
  
  {
    path: '/profile',
    component: Profile,
    name: 'Profile',
    meta: {
      title: 'Profile',
      icon: UserIcon,
      color: 'text-left-bar-red',
      isDarkBackground: true,
      isFullWidthLayout: true,
      requiresAuth: true,
      parentPath: 'Home'
    },
  },
  {
    path: '/map',
    component: Map,
    name: 'Map',
    meta: {
      title: 'Map',
      icon: LocationMarkerIcon,
      color: 'text-left-bar-red',
      requiresAuth: true,
      parentPath: 'Home'
    },
  },
  {
    path: '/register',
    component: Register,
    name: 'register',
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
    name: 'forgot-password',
    meta: {
      requiresAuth: false,
    },
  },
  {
    
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      requiresAuth: false,
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
