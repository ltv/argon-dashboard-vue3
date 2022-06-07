import { defineStore } from 'pinia'
import { useState } from './state'
import { useGetters } from './getters'

export const useActions = defineStore('auth.actions', () => {
  const state = useState()
  const getters = useGetters()

  const setAuthentication = (value: boolean) => (state.isAuthenticated = value)
  return {
    setAuthentication,
  }
})
