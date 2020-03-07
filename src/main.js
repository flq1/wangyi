import Vue from 'vue'
import App from './App.vue'
import { Icon, Button } from 'vant'
import router from './router/index.js'
Vue.config.productionTip = false
Vue.use(Icon);
Vue.use(Button);
/* eslint-disable no-new */
Vue.component(Icon)
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />',
  router
})
