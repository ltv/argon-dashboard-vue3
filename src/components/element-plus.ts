// Custom css, do it later, now use the element plus css
import 'assets/css/el-button.scss'
import 'assets/css/typography.scss'
import 'assets/css/el-popper.scss'
import 'assets/css/el-breadcrumb.scss'
import 'assets/css/notifications.scss'
import 'assets/css/form.scss'
import 'assets/css/grid.scss'

import 'assets/css/el-progress.scss'
import 'assets/css/el-loading.scss'
import 'assets/css/el-menu.scss'
import 'assets/css/el-card.scss'
import 'assets/css/el-pagination.scss'
import 'assets/css/el-table.scss'
import 'assets/css/el-tag.scss'
import 'element-plus/dist/index.css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
import { App } from 'vue'

export const useElementPlus = (app: App) => {
  app.provide('$message', app.config.globalProperties.$message)
  app.provide('$messageBox', app.config.globalProperties.$messageBox)
}
