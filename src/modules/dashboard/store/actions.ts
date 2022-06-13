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

  const setIsSBPin = (value: boolean) => (state.isSBPin = value)
  const setIsSBOpen = (value: boolean) => (state.isSBOpen = value)
  
  const toggleMenu = () => {
    if (window.innerWidth < 1024) {
      setIsSBOpen(!state.isSBOpen)
    } else {
      setIsSBPin(!state.isSBPin)
    }
  }
  

  return {
    showWelcomeText,
    setWelcomeText,
    setIsSBPin,
    setIsSBOpen,
    toggleMenu,
  }
})
