<template>
  <div class="outer">
    <router-view></router-view>
    <!-- <HelloWorld /> -->
    <Footer />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import Footer from './components/Footer/index'
import './rem/rem'
export default {
  components: {
    Footer,
    // HelloWorld
  },
}
</script>
<style lang='stylus' scoped  rel='stylesheet/stylus'>
.outer
  width 100%
  height 100%
  .van-icon
    width 60px
    height 60px
</style>
