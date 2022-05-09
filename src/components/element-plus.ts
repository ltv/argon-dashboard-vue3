// Custom css, do it later, now use the element plus css
import 'assets/css/el-button.css'
import 'assets/css/el-message.css'
import 'assets/css/el-table.css'
import lang from 'element-plus/lib/locale/lang/vi'
// import 'dayjs/locale/vi'
// import locale from 'element-plus/lib/locale'
import 'element-plus/dist/index.css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
import { App } from 'vue'

export const useElementPlus = (app: App) => {
  // locale
  // locale.use(lang)
  app.provide('$message', app.config.globalProperties.$message)
}
