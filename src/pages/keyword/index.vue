<template>
  <div class="keyword">
    <div class="keyword-header">
      <van-icon name="wap-home-o" class="homepage" @click="$router.push('/home/0')" />
      <van-search
        class="Collectsearch"
        @clear="$router.push('/Collectsearch/catelist')"
        v-model="shous"
        placeholder="请输入搜索关键词"
        input-align="left"
      />
    </div>
    <nav>
      <span>综合</span>
      <span>价格</span>
      <span>分类</span>
    </nav>
    <div class="keyword-content">
      <div class="core-container">
        <div class="scroll-wrapper" ref="scroll">
          <div class="scroll-content">
            <div class="scroll-item" v-for=" (item,index) in emojis" :key="index">
              <img :src="item.wapBannerUrl" alt />
              <p>{{item.frontDesc}}</p>
              <span>¥{{item.showIndex}}</span>
              <div>满{{item.showIndex}}顺丰包邮</div>
            </div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
            <div class="scroll-item">ss</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon, Search } from 'vant';
import BScroll from '@better-scroll/core'
//import { mapState } from 'vuex'
Vue.use(Search);
Vue.use(Icon);
/*eslint-disable*/
export default {
  name: '',
  data () {
    return {
      shous: null,
      emojis: []
    }
  },
  computed: {

  },
  async mounted () {
    this.init()
    this.emojis = await this.$store.state.Collectsearch.keyword
    this.shous = "" + this.$store.state.Collectsearch.History

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
        console.log('done')
      })
    },
    clickHandler (item) {
      alert(item)
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
.keyword
  width 100%
  height 100%
  .keyword-header
    width 100%
    height 8%
    font-size 30px
    display flex
    justify-content space-around
    align-items center
    .homepage
      width 10%
      margin-left 15px
    .Collectsearch
      width 88%
  nav
    font-size 16px
    display flex
    width 100%
    height 7%
    justify-content space-around
    align-items center
    color #999
    background-color #eeee
  .keyword-content
    width 100%
    height 85%
    .core-container
      .scroll-wrapper
        height 600px
        overflow hidden
        .scroll-item
          width 46%
          margin 10px 0 0 4%
          display inline-block
          font-size 16px
          img
            width 90%
            background-color #eee
          p
            width 90%
            line-height 22px
          span
            color red
          div
            border 1px solid red
            border-radius 10px
            width 110px
            color red
            text-align center
            height 20px
            line-height 20px
</style>

