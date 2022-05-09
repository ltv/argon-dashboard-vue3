import 'assets/css/index.scss'
import { App } from 'vue'
import { useElementPlus } from './element-plus'
import Main from './Main/index.vue'
import Table from './Table/index.vue'

export default {
  install: (app: App) => {
    // Register it globally
    app.component('Main', Main)
    app.component('Table', Table)

    // Element Plus
    useElementPlus(app)
  },
}
