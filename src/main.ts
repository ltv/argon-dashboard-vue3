import vueEmitter from 'core/emitter'
import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'
import AppComponents from './components'
import VueSweetAlert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import './index.css'
import router from './router'
// create new app instance
const createNewApp = () => {
  const app = createApp({
    render: () => h(App),
  })

  app.provide('eventHub', vueEmitter)
  app.use(router)
  app.use(ElementPlus)
  app.use(AppComponents)
  app.use(createPinia())
  app.use(VueSweetAlert2)

  app.mount('#app')
  app.config.performance = true
}

const initApp = async () => {
  createNewApp()
}

initApp().then(() => {
  // initialized
})
