import { defineStore } from 'pinia'
import { useState } from './state'
import { useGetters } from './getters'

export const useActions = defineStore('dashboard.actions', () => {
  const state = useState()
  const getters = useGetters()

  const showWelcomeText = () => {
    console.log('getters value', getters.getText)
    if (state.welcomeText) {
      console.log(state.welcomeText)
    }
  }

  const setWelcomeText = (value = '') => {
    state.welcomeText = value
  }

  const setSideBar = (value:boolean) => state.isPin = value

  return {
    showWelcomeText,
    setWelcomeText,
    setSideBar,
  }
})
