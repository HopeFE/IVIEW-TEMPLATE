import * as types from './mutationTypes'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  breadlist: []
}

const mutations = {
  [types.BREADCRUMD] (state, payload) {
    state.breadlist = payload
  }
}

export default {
  actions,
  state,
  getters,
  mutations
}
