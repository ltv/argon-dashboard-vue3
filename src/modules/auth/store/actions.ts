import { defineStore } from 'pinia'
import { useState } from './state'

export const useActions = defineStore('auth.actions', () => {
  const state = useState()
  
  const setAuthentication = (value: boolean) => {
    state.isAuthenticated = value
  }
  return {
    setAuthentication,
  }
})
