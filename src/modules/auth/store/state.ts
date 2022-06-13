import { defineStore } from 'pinia'
import { AuthState } from './types'
import { AUTH_TOKEN } from 'core/constants'


export const useState = defineStore({
  id: 'auth.state',
  state: (): AuthState => {
    return {
      isAuthenticated: !!localStorage.getItem(AUTH_TOKEN),
    }
  },
})
