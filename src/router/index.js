import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  mode: 'history',
  routes
})