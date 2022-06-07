import { defineStore, StoreGetters } from 'pinia'
import { AuthState } from './types'

import { computed } from 'vue'
import { useState } from './state'

export const useGetters = defineStore('dashboard.getters', () => {
  const state = useState()
  const getAuthenticationState = computed((): boolean => state.isAuthenticated)

  return { getAuthenticationState }
})
