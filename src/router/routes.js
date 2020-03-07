import Home from '../pages/Home/index.vue'
import Buy from '../pages/Buy/index.vue'
import Cart from '../pages/Cart/index.vue'
import Class from '../pages/Class/index.vue'
import Personal from '../pages/Personal/index.vue'
export default [

  {//首页
    path: '/home',
    component: Home
  },
  {// 值得买
    path: '/buy',
    component: Buy
  },
  {// 购物车
    path: '/cart',
    component: Cart
  },
  {// 分类
    path: '/class',
    component: Class
  },
  {// 个人
    path: '/personal',
    component: Personal
  },
  {
    path: '/',
    redirect: ' /home'
  }
]