<template>
  <div class="core-container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <div
          class="scroll-item"
          v-for="(item, index) in emojis"
          :key="index"
          @click="clickHandler(index)"
          :class="isShow===index?'active':''"
        >{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from '@better-scroll/core'
/*eslint-disable */
export default {
  data () {
    return {
      emojis: ['推荐区', '宅家防护', '爆品专区', '新品专区', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '全球特色'],
      isShow: 0
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
        scrollY: true,
        click: true,
        probeType: 3 // listening scroll hook
      })
      this._registerHooks(['scroll', 'scrollEnd'], (pos) => {
        console.log('done', '1')
      })
    },
    clickHandler (item) {
      this.isShow = item
      console.log(item)
    },
    _registerHooks (hookNames, handler) {
      hookNames.forEach((name) => {
        this.bs.on(name, handler)
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.core-container
  .scroll-wrapper
    height 100%
    overflow hidden
    .scroll-item
      height 50px
      line-height 50px
      font-size 16px
      border-bottom 1px solid #eee
      text-align center
      &.active
        border-left 1px solid red
        color red
</style>
