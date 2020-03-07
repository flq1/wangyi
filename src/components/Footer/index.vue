<template>
  <div class="Footer">
    <router-link active-class class="router" to="/home">
      <van-icon name="wap-home-o" size="24" :color="colorisred===1?'red':''" @click="isColor(1)" />
      <span :class="colorisred===1?'red':''">首页</span>
    </router-link>
    <router-link active-class class="router" to="/class">
      <van-icon name="apps-o" size="24" @click="isColor(2)" :color="colorisred===2?'red':''" />
      <span :class="colorisred===2?'red':''">分类</span>
    </router-link>
    <router-link active-class class="router" to="/buy">
      <van-icon
        name="cash-back-record"
        size="24"
        @click="isColor(3)"
        :color="colorisred===3?'red':''"
      />
      <span :class="colorisred===3?'red':''">值得买</span>
    </router-link>
    <router-link active-class class="router" to="/cart">
      <van-icon
        name="shopping-cart-o"
        size="24"
        @click="isColor(4)"
        :color="colorisred===4?'red':''"
      />
      <span :class="colorisred===4?'red':''">购物车</span>
    </router-link>
    <router-link active-class class="router" to="/personal">
      <van-icon name="friends-o" size="24" @click="isColor(5)" :color="colorisred===5?'red':''" />
      <span :class="colorisred===5?'red':''">个人</span>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {
      colorisred: 1
    }
  },
  methods: {
    isColor (event) {
      this.colorisred = event

    },


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
  .router
    font-size 16px
    width 20%
    height 100px
    text-align center
    color #666
    padding 10px
    display flex
    flex-direction column
    align-items center
    .red
      color red
</style>
