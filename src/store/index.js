import Vue from 'vue'
import Vuex from 'vuex'
import dashbord from './dashbord'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employee:[],
    workers:[]
  },
  modules: {
    dashbord,
  }
})
