<template>
  <div class="home">
    <div class="nav">
      <span class="nav-log">网易严选</span>
      <div class="nav-input">
        <van-icon name="search" class="icon" />
        <input type="text" placeholder="搜索商品, 共24253款好物" />
      </div>
      <div class="nav-login">登入</div>
    </div>
    <div class="horizontal-container">
      <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
          <div class="scroll-item active" v-for="(item, index) in emojis" :key="index">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

/*eslint-disable */
import BScroll from '@better-scroll/core'
export default {
  data () {
    return {
      emojis: [
        '推荐', '居家生活', '服饰包鞋', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '全球特色'
      ]
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.bs.destroy()
  },
  methods: {
    init () {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        probeType: 3 // listening scroll hook
      })
      this._registerHooks(['scroll', 'scrollEnd'], (pos) => {
        console.log('done')
      })
    },
    _registerHooks (hookNames, handler) {
      hookNames.forEach((name) => {
        this.bs.on(name, handler)
      })
    }
  }
}
</script>
<style lang='stylus' scoped  rel='stylesheet/stylus'>
.home
  width 100%
  height 100%
  .nav
    width 100%
    height 96px
    display flex
    align-items center
    .nav-log
      font-size 32px
      margin 0 20px
    .nav-input
      width 400px
      background-color #ededed
      height 64px
      display felx
      align-items center
      border-radius 20px
      margin 0 20px
      input
        width 310px
        background-color #ededed
        vertical-align middle
        height 58px
        font-size 28px
      .icon
        vertical-align middle
        font-size 38px
        margin 0 10px 0 30px
    .nav-login
      z-index 1
      width 120px
      height 30px
      line-height 30px
      text-align center
      color #DD1A21
      border 1px solid #0000
      border-radius 30px
      font-size 38px
  .horizontal-container, .scroll-wrapper
    width 90%
    white-space nowrap
    margin-left 10px
    border-radius 5px
    overflow hidden
    .scroll-content
      display inline-block
    .scroll-item
      height 50px
      line-height 50px
      font-size 24px
      display inline-block
      text-align center
      padding 0 10px
      &.active
        color red
</style>
