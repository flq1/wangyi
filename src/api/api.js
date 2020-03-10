import axios from 'axios'
//import errCode from '../config/errCode'
const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 20000,
  headers: {

  }
})

axiosInstance.interceptors.request.use(
  (config) => {
    // let token = ''
    // if (token) {
    //   config.headers.authorization = `${token}`
    // }
    // if (config.method === 'post') {
    //   Object.keys(config.data).reduce((pre, c) => {
    //     config.data = pre += `&${c}=${config.data[c]}`
    //     return pre
    //   }, '').slice(1)
    //   config.headers['content-type'] = 'application/x-ww-form-urlencoded'
    // }
    return config
  }
)

axiosInstance.interceptors.response.use((response) => {
  if (response.data.status === 0 || response.data.code === 0) {
    //console.log(response.data.data)
    return response.data.data
  } else {
    return Promise.reject(response.data.msg)
  }
},
  (err) => {
    //根据不同错误原因，提示不同的错误信息
    let errMsg = ''
    if (err.response) {
      //接受到响应，但是是失败的响应
      // errMsg = errCode[err.response.status]
    } else {
      //没有接受到响应
      if (err.message.indexOf('Network Error') !== -1) {
        errMsg = '网络连接错误，请重新连接网络'
      } else if (err.message.indexOf('timeout') !== -1) {
        errMsg = "网络连接超时，请连上wiff试试"
      }
    }
    console.log(err)
    return Promise.reject(errMsg || '发生未知错误，请联系管理员')
  }
)

export default axiosInstance

// import axios from 'axios'
// //axios.defaults.timeout = 10000;
// //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// //请求拦截器
// //import store from '@/store/index';
// axios.interceptors.request.use(
//   config => {
//     // 每次发送请求之前判断vuex中是否存在token        
//     // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
//     // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
//     // const token = store.state.token;
//     // token && (config.headers.Authorization = token);
//     return config;
//   },
//   error => {
//     return Promise.error(error);

//   })
// // 响应拦截器
// axios.interceptors.response.use(
//   response => {
//     // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
//     // 否则的话抛出错误
//     // if (response.status === 200) {
//     //   return Promise.resolve(response);
//     // } else {
//     //   return Promise.reject(response);
//     // }
//     return response
//   },

// )
// export default axios

