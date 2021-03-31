import Vue from 'vue'
import Vuex from 'vuex'
//  cnpm i vuex-persistedstate -S
import persist from 'vuex-persistedstate'
Vue.use(persist) // 使用
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {
      name: '',
      tel: '',
      pwd: ''
    }
  },
  mutations: {
    login(state, val) {
      state.user = val
    }
  },
  getters: {
  },
  actions: {},
  modules: {},
  plugins: [
    persist()
  ]
})