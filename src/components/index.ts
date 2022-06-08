import 'assets/css/index.scss'
import { App } from 'vue'
import { useElementPlus } from './element-plus'
import Main from './Main/index.vue'
import Sidebar from './Sidebar/index.vue'
import Navigation from './Navigation/index.vue'
import AuthNavigation from './Navigation/authNav.vue'
import AuthFooter from './Footer/authFoot.vue'

export default {
  install: (app: App) => {
    // Register it globally
    app.component('Main', Main)
    app.component('Sidebar', Sidebar)
    app.component('Navigation', Navigation)
    app.component('AuthNavigation', AuthNavigation)
    app.component('AuthFooter', AuthFooter)

    // Element Plus
    useElementPlus(app)
  },
}
