import 'assets/css/index.scss'
import { App } from 'vue'
import { useElementPlus } from './element-plus'
import Main from './Main/index.vue'
import Sidebar from './Sidebar/index.vue'
import Navigation from './Navigation/DefaultNav.vue'
import AuthNavigation from './Navigation/AuthenticationNav.vue'
import Footer from './Footer/index.vue'
import BreadCrumb from './BreadCrumb/index.vue'

export default {
  install: (app: App) => {
    // Register it globally
    app.component('Main', Main)
    app.component('Sidebar', Sidebar)
    app.component('Navigation', Navigation)
    app.component('AuthNavigation', AuthNavigation)
    app.component('Footer', Footer)
    app.component('BreadCrumb', BreadCrumb)

    // Element Plus
    useElementPlus(app)
  },
}
