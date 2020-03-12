<template>
  <header>
    <div class="header-head">
      <van-icon name="wap-home-o" size="28px" class="header-lset" @click="$router.push('/home/0')" />
      <h3 class="header-center">值得买</h3>
      <div class="header-right">
        <van-icon name="search" size="28px" @click="$router.push('/Collectsearch/catelist')" />
        <van-icon name="shopping-cart-o" size="28px" class="cart" @click="$router.push('/cart')" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  components: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style lang='stylus' scoped  rel='stylesheet/stylus'>
header
  z-index 1
  height 9%
  width 100%
  border-bottom 1px solid #eee
  .header-head
    height 100%
    width 90%
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .header-center
      font-size 28px
      color #999
    .header-right
      .cart
        margin-left 15px
</style>
