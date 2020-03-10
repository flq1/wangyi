import Vue from 'vue'
import App from './App.vue'
import { Icon, Button, Sidebar, SidebarItem } from 'vant'
import store from './store/index'
import router from './router/index.js'
import './mock/mock-server'
Vue.config.productionTip = false
Vue.use(Icon);
Vue.use(Button);



Vue.use(Sidebar);
Vue.use(SidebarItem);
/* eslint-disable no-new */
Vue.component(Icon)
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />',
  router,
  store
})
