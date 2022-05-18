// Custom css, do it later, now use the element plus css
import 'assets/css/var.scss'
import 'assets/css/el-button.scss'
import 'assets/css/el-table.css'
import 'assets/css/el-table-column.css'
import 'assets/css/el-dropdown.scss'
import 'assets/css/el-alert.scss'
import 'assets/css/el-checkbox.scss'
import 'assets/css/el-link.scss'
import 'assets/css/el-divider.scss'

import 'assets/css/el-message.css'
import 'assets/css/typography.scss'
import 'assets/css/el-card.scss'
import 'assets/css/el-tag.scss'
import 'assets/css/icons.scss'


import 'element-plus/dist/index.css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
import { App } from 'vue'

export const useElementPlus = (app: App) => {
  app.provide('$message', app.config.globalProperties.$message)
}
