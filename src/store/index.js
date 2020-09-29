import Vue from 'vue'
import Vuex from 'vuex'
import app from './app.state'
import user from './user.state'
import shops from './shops.state'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: { //only way to change states
    increment() {
      this.state.count++
    }
  },
  getters: {
    getCountPlut: (state) => {
      return state.count
    }
  },
  actions: {  // bussiness logic
  },
  modules: {
    shops,
    app,
    user
  }
})
