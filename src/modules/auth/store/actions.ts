import { defineStore } from 'pinia'
import { ILogin } from './types'
import { AUTH_TOKEN } from 'core/constants'
import { useState } from './state'


export const useActions = defineStore('auth.actions', () => {
  const state = useState()
  const actLogin = async (_: ILogin) => {
    localStorage.setItem(AUTH_TOKEN, 'user') 
    window.location.href = '/'
  }
  const actLogout = () => {
    localStorage.removeItem(AUTH_TOKEN)
    window.location.href = '/login'
  }
  const actLoginPage = (b: boolean) => state.isLoginPage = b

  return {
    actLogin,
    actLogout,
    actLoginPage,
  }
})
