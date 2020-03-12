import Home from '../pages/Home/index.vue'
import Buy from '../pages/Buy/index.vue'
import Cart from '../pages/Cart/index.vue'
import Classification from '../pages/Classification/index.vue'
import Personal from '../pages/Personal/index.vue'
import Familylife from '../pages/Home/Familylife/index.vue'
import Recommend from '../pages/Home/Recommend/index.vue'
import Classcontent from '../pages/Classification/Classcontent/index.vue'
import Collectsearch from '../pages/Classification/Collectsearch/index.vue'
import keyword from '../pages/keyword/index.vue'
export default [

  {//首页
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/0',
        component: Recommend
      },
      {
        path: '/home/1',
        component: Familylife
      },
      {
        path: '/home',
        redirect: '/home/0'
      }

    ]
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
    path: '/Classification',
    component: Classification,
    children: [
      {
        path: '/Classification/:id',
        component: Classcontent
      },
      {
        path: '/Classification',
        redirect: '/Classification/11'
      }
    ]
  },
  {// 个人
    path: '/personal',
    component: Personal
  },
  // longin
  {
    path: '/personal/login',
    component: Personal
  },
  //Success
  {
    path: '/personal/Success',
    component: Personal
  },

  {
    path: '/Collectsearch/catelist',
    component: Collectsearch
  },
  {
    path: '/Collectsearch/keyword',
    component: keyword
  },
  {
    path: '/',
    redirect: '/home'
  }

]