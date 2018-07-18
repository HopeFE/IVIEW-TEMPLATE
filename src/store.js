import Vue from 'vue'
import Vuex from 'vuex'
// import createRouteState from '@/plugins/history'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()]
})
