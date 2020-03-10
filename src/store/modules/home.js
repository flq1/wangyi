import { RECEIVEEMOJIS } from './mutation-type'
const state = {
  //首页横向滚动的索引值
  emojisindex: 0
}
const mutations = {
  [RECEIVEEMOJIS] (state, { value }) {
    state.emojisindex = value
  }
}
const actions = {
  getemojisindex ({ commit }, value) {
    commit(RECEIVEEMOJIS, { value })
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