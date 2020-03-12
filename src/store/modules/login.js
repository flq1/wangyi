import { reqlogin } from '../../api/index'
import { RERIVELOGIN } from './mutation-type'

const state = {
  user: JSON.parse(localStorage.getItem('user'))
}
const mutations = {
  [RERIVELOGIN] (state, { value }) {
    state.user = value["用户名"]
  }

}

const actions = {
  async  relogin ({ commit }, value) {
    const u = await reqlogin()
    console.log(u, value, commit)

    if (u[0].user == value["密码"]) {
      commit(RERIVELOGIN, { value })
      localStorage.setItem('user', JSON.stringify(value["用户名"]))
    }
  }
}

const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}