import Mock from 'mockjs'
import index from '../datas/index.json'
import cateryGoods from '../datas/indexCateModule.json'
import cateNavDatas from '../datas/cateNavDatas.json'
//新品首发展示
Mock.mock('/api/home', {
  code: 0,
  data: index.kingKongModule.kingKongList
})
//品牌信赖
Mock.mock('/api/home/policyDescList', {
  code: 0,
  data: index.policyDescList
})
// 分类专区左边的滚动信息内容
Mock.mock('/api/class/cateNavDatas', {
  code: 0,
  data: cateNavDatas.categoryL1List
})

Mock.mock('/api/caterygoods', {
  code: 0,
  data: cateryGoods
})

export default Mock