import axiosInstance from './api'



export const reqHomeResource = () => {
  return axiosInstance({
    url: '/home',
    method: 'GET'
  })
}

export const reqCateryGoodsFamily = () => {
  return axiosInstance({
    url: '/caterygoods',
    method: 'GET'
  })
}
//品牌信赖
export const reqPolicyDescList = () => {
  return axiosInstance({
    url: '/home/policyDescList',
    method: 'GET'
  })
}
//分类信息左边的滚动信息
export const reqcategoryL1List = () => {
  return axiosInstance({
    url: '/class/cateNavDatas',
    method: 'GET'
  })
}