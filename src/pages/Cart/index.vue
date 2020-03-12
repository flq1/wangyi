<template>
  <div class="cart">
    <header>
      <span>购物车</span>
      <span>领劵</span>
    </header>
    <div class="ensure">
      <div>
        <van-icon name="circle" size="10" />
        <span>30天无忧退货</span>
      </div>
      <div>
        <van-icon name="circle" size="10" />
        <span>48小时快速退款</span>
      </div>
      <div>
        <van-icon name="circle" size="10" />
        <span>满88元免邮费</span>
      </div>
    </div>
    <div class="cart-bottom" v-show="user===null">
      <van-icon name="photo-o" size="100" />
      <van-button type="danger" @click="$router.push('/personal')">登入</van-button>
    </div>
    <div class="cart-bottom" v-show="user !==null">欢迎 {{user}} 来到购物车</div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      user: state => state.login.user
    })
  }
}
</script>
<style lang='stylus' scoped  rel='stylesheet/stylus'>
.cart
  width 100%
  height 100%
  header
    width 90%
    height 8%
    margin 0 auto
    display flex
    justify-content space-between
    align-items center
    font-size 16px
    span:nth-child(2)
      color red
  .ensure
    font-size 10px
    display flex
    justify-content space-around
    background-color #eee
    height 7%
    align-items center
  .cart-bottom
    width 100%
    height 85%
    display flex
    flex-direction column
    align-items center
    justify-content center
</style>
