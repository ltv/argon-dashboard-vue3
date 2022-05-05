import { Module } from 'vuex'
import { state } from './state'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { RootState } from 'store'
import { {{typeName}}State } from './types'

export const {{moduleName}}: Module<{{typeName}}State, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
