import { reqkeyword } from '../../api/index'
import { RECRIVEKEYWORD } from './mutation-type'

const state = {
  History: [],
  keyword: []
}
const mutations = {
  [RECRIVEKEYWORD] (state, { value, data }) {
    state.History = value
    state.keyword = data
  }
}
const actions = {
  async  getkeyword ({ commit }, value) {
    let data = []
    const req = await reqkeyword()
    console.log(req)
    console.log(commit, value)
    // commit(RECRIVEKEYWORD, req)
    req.forEach((item) => {
      item.subCateList.forEach((i) => {
        if (i.name.indexOf(value) !== -1) {
          data.push(i)
        }
      })
    })
    commit(RECRIVEKEYWORD, { value, data })
    console.log(data)
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