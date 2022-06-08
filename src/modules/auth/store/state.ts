import { defineStore } from 'pinia'
import { AuthState } from './types'

export const useState = defineStore({
  id: 'auth.state',
  state: (): AuthState => {
    return {
      isAuthenticated: false,
    }
  },
})
