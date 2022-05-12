// Custom css, do it later, now use the element plus css
import 'assets/css/el-button.css'
import 'assets/css/el-table.css'
import 'assets/css/el-table-column.css'
import 'assets/css/el-dropdown.css'
import 'assets/css/el-tag.css'
import 'assets/css/var.scss'
import 'assets/css/typography.scss'

import 'element-plus/dist/index.css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
import { App } from 'vue'

export const useElementPlus = (app: App) => {
  app.provide('$message', app.config.globalProperties.$message)
}
