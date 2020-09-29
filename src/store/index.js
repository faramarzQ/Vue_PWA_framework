import Vue from 'vue'
import Vuex from 'vuex'
import app from './app.state'
import user from './user.state'
import shops from './shops.state'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
  },
  modules: {
    shops,
    app,
    user
  }
})
