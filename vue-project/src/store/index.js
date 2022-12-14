import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

export default createStore({
  state: {
     news: [],
     jobs: [],
     ask: [], //리스트라서 []
     user: {}, //리스트 아닌 객체라서 {}
     item: {},
  },
  getters: {
    fetchedAsk(state){
      return state.ask;
    },
    fetchedItem(state){
      return state.item;
    }
  },
  mutations,
  actions,
  modules: {
  }
})
