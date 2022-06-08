import { defineStore } from 'pinia'

import { computed } from 'vue'
import { useState } from './state'

export const useGetters = defineStore('auth.getters', () => {
  const state = useState()
  const getAuthenticationState = computed((): boolean => state.isAuthenticated)
  const getuser = computed((): any => state.user)
  return { getAuthenticationState, getuser }
})
