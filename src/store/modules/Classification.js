import { reqcategoryL1List } from '../../api/index'
import { RECEIVECATEGORYL1LIST } from './mutation-type'
const state = {
  //首页横向滚动的索引值
  category: []
}
const mutations = {
  [RECEIVECATEGORYL1LIST] (state, { value }) {
    state.category = value
  }
}
const actions = {
  async getemojisindex ({ commit }) {
    const value = await reqcategoryL1List()
    console.log(value)
    commit(RECEIVECATEGORYL1LIST, { value })
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