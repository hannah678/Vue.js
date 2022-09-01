import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

export default createStore({
  state: {
     news: [],
     jobs: [],
     ask: [],
  },
  getters: {
    fetchedAsk(state){
      return state.ask;
    }
  },
  mutations,
  actions,
  modules: {
  }
})
