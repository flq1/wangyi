import { reqbuy } from '../../api/index'
import { RERIVEBUY } from './mutation-type'
const state = {
  data: []
}
const mutations = {
  [RERIVEBUY] (state, { value }) {
    state.data = value
  }
}
const actions = {
  async  buy ({ commit }) {
    const value = await reqbuy()
    console.log(value)
    commit(RERIVEBUY, { value })
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