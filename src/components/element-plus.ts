// Custom css, do it later, now use the element plus css
import 'assets/css/el-button.scss'
import 'assets/css/typography.scss'
import 'assets/css/el-input.scss'
import 'assets/css/el-popper.scss'


import 'element-plus/dist/index.css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
import { App } from 'vue'

export const useElementPlus = (app: App) => {
  console.log('useElementPlus', app.config.globalProperties)
  app.provide('$message', app.config.globalProperties.$message)
  app.provide('$messageBox', app.config.globalProperties.$messageBox)
}
