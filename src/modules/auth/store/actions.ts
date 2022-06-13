import { defineStore } from 'pinia'
import { ILogin } from './types'
import { AUTH_TOKEN } from 'core/constants'


export const useActions = defineStore('auth.actions', () => {
  const actLogin = async (_: ILogin) => {
    localStorage.setItem(AUTH_TOKEN, 'user') 
    window.location.href = '/'
  }
  const actLogout = () => {
    localStorage.removeItem(AUTH_TOKEN)
    window.location.href = '/login'
  }
  
  return {
    actLogin,
    actLogout,
  }
})
