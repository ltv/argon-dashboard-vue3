import '@vue/runtime-core'
import { IElMessageBox, Message } from 'element-plus'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: Message
    $messageBox: IElMessageBox
  }
}
