import { fetchNewsList } from '@/api'
import { createStore } from 'vuex'

export default createStore({
  state: {
     news: [],
     jobs: [],
     ask: [],
  },
  getters: {
  },
  mutations: {
    SET_NEWS(state, news){
      state.news = news;
    }
  },
  actions: {
    FETCH_NEWS(context){
      fetchNewsList()
      .then(response => {
        console.log(response.data);
        //context.commit('SET_NEWS', response.data);
        this.state.news = response.data;
        })
      .catch(error => console.log(error))
    }
  },
  modules: {
  }
})
