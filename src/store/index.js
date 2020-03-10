import Vue from 'vue'

import Vuex from 'vuex'
import home from './modules/home'
import Classification from './modules/Classification.js'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home,
    Classification
  }
})