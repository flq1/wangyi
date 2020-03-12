import Vue from 'vue'

import Vuex from 'vuex'
import home from './modules/home'
import Classification from './modules/Classification.js'
import Collectsearch from './modules/Collectsearch.js'
import login from './modules/login.js'
import buy from './modules/buy.js'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home,
    Classification,
    Collectsearch,
    buy,
    login
  }
})