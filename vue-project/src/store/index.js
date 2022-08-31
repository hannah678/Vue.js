import { fetchAskList, fetchJobsList, fetchNewsList } from '@/api'
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
    },
    SET_JOBS(state, jobs){
      state.jobs = jobs;
    }
  },
  actions: {
    FETCH_NEWS(context){
      fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data);
        })
      .catch(error => console.log(error))
    },
    FETCH_JOBS({ commit }){
      fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch(error => console.log(error));
    },
    FETCH_ASK(){
      fetchAskList()
      .then(response => this.state.ask = response.data);
    }
  },
  modules: {
  }
})
