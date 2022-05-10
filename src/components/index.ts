import 'assets/css/index.scss'
import { App } from 'vue'
import { useElementPlus } from './element-plus'
import Main from './Main/index.vue'

export default {
  install: (app: App) => {
    // Register it globally
    app.component('Main', Main)

    // Element Plus
    useElementPlus(app)
  },
}
