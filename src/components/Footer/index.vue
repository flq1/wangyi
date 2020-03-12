<template>
  <div
    class="Footer"
    v-show="$route.path.indexOf('/Collectsearch')===-1 && $route.path.indexOf('/personal')===-1 "
  >
    <router-link active-class class="router" to="/home">
      <van-icon name="wap-home-o" size="24px" :color="$route.path.indexOf('/home')!==-1?'red':''" />
      <span :class="$route.path.indexOf('/home')!==-1?'red':''">首页</span>
    </router-link>
    <router-link active-class class="router" to="/Classification">
      <van-icon
        name="apps-o"
        size="24px"
        :color="$route.path.indexOf('/Classification')!==-1?'red':''"
      />
      <span :class="{red:$route.path.indexOf('/Classification')!==-1}">分类</span>
    </router-link>
    <router-link active-class class="router" to="/buy">
      <van-icon name="cash-back-record" size="24px" :color="$route.path==='/buy'?'red':''" />
      <span :class="{red:$route.path==='/buy'}">值得买</span>
    </router-link>
    <router-link active-class class="router" to="/cart">
      <van-icon name="shopping-cart-o" size="24px" :color="$route.path==='/cart'?'red':''" />
      <span :class="{red:$route.path==='/cart'}">购物车</span>
    </router-link>
    <router-link active-class class="router" to="/personal">
      <van-icon name="friends-o" size="24px" :color="$route.path==='/personal'?'red':''" />
      <span :class="{red:$route.path==='/personal'}">个人</span>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang='stylus' scoped  rel='stylesheet/stylus'>
.Footer
  z-index 100
  position fixed
  bottom 0
  left 0
  right 0
  width 100%
  display flex
  border-top 1px solid #d9d9d9
  background-color #ffffff
  .router
    font-size 16px
    width 20%
    height 50px
    text-align center
    color #666
    padding 1px
    display flex
    flex-direction column
    align-items center
    .red
      color red
</style>
