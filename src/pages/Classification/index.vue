<template>
  <div class="cls">
    <header class="cls-header" @click="$router.push('/Collectsearch/catelist')">
      <div class="cls-input">
        <van-icon name="search" class="icon" />
        <input type="text" placeholder="搜索商品, 共23610款好物" />
      </div>
    </header>
    <div class="Sidebar">
      <Scrollwrapper />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//import BetterScroll from '../../components/BetterScroll/index'
// sidebar: ['推荐区', '宅家防护', '爆品专区', '新品专区', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '全球特色']



import Scrollwrapper from './scrollwrapper/index'
/*eslint-disable */
export default {
  data () {
    return {

    }
  },
  components: {

    Scrollwrapper
  },
  mounted () {
    console.log(this.$route.path)
  }

}
</script>
<style lang='stylus' scoped  rel='stylesheet/stylus'>
.cls
  width 100%
  height 100%
  .cls-header
    width 100%
    height 5%
    padding 10px 0
    border-bottom 1px solid #eee
    .cls-input
      height 80%
      width 70%
      border-radius 5px
      background-color #eee
      margin 0 auto
      display flex
      justify-content center
      align-items center
      .icon
        font-size 16px
      input
        width 80%
        height 80%
        font-size 16px
        background-color #eee
  .Sidebar
    width 100%
    height 90%
    display flex
    .Sidebar-content
      width 70%
</style>
