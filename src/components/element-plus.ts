// Custom css, do it later, now use the element plus css
<<<<<<< HEAD
import 'assets/css/var.scss'
=======

>>>>>>> resole conflict
import 'assets/css/el-button.scss'
import 'assets/css/el-table.css'
import 'assets/css/el-table-column.css'
import 'assets/css/el-dropdown.css'
import 'assets/css/el-tag.css'
import 'assets/css/el-alert.css'

import 'assets/css/el-message.css'


import 'element-plus/dist/index.css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
import { App } from 'vue'

export const useElementPlus = (app: App) => {
  app.provide('$message', app.config.globalProperties.$message)
}
