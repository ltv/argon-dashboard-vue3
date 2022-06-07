import { defineStore, StoreGetters } from 'pinia'

import { computed } from 'vue'
import { useState } from './state'

export const useGetters = defineStore('auth.getters', () => {
  const state = useState()
  const getAuthenticationState = computed((): boolean => state.isAuthenticated)

  return { getAuthenticationState }
})
