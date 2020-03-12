<template>
  <div>
    <!-- 头部login 收搜 登入 标签 -->
    <div class="nav">
      <span class="nav-log">网易严选</span>
      <div class="nav-input">
        <van-icon name="search" class="icon" />
        <input
          type="text"
          placeholder="搜索商品, 共24253款好物"
          @click="$router.push('/Collectsearch/catelist')"
        />
      </div>
      <div class="nav-login">登入</div>
    </div>
    <!-- srcoll 滚动  -->
    <div class="home-scroll">
      <div class="horizontal-container" v-show="isShow">
        <div class="scroll-wrapper" ref="scroll">
          <div class="scroll-content">
            <div
              class="scroll-item"
              @click="red(index)"
              v-for="(item, index) in emojis"
              :key="index"
              :class="$route.path.indexOf(index) !==-1 ? 'active':''"
            >{{item}}</div>
          </div>
        </div>
      </div>
      <!-- srcoll 滚动 转换成全部频道  -->
      <div class="channel" v-show="!isShow">
        <p>全部频道</p>
        <ul class="channel-ul">
          <li
            :class="$route.path.indexOf(index) !==-1 ? 'active':''"
            class="channel-list"
            v-for="(item, index) in emojis"
            @click="red(index)"
            :key="index"
          >{{item}}</li>
        </ul>
      </div>
      <!-- 转换按钮 -->
      <div class="scroll-icon">
        <van-icon name="arrow-up" size="20" @click="isShow=false" v-if="isShow" />
        <van-icon name="arrow-down" size="20" @click="isShow=true" v-if="!isShow" />
      </div>
    </div>
    <!-- 轮播图 -->

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/7b1b88e42906de8871300509828c73fe.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/3ba8ff890bd557b870733aa78f8d3466.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/3fa2995d5c384d08ae45664562115254.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/3c94dee964a791515434c3d13559a82f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/8fc4b255f4595573f0f622a14e10fdb4.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://yanxuan.nosdn.127.net/d46d2fd850b9a660eca68028fe974bb0.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
            alt
          />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import { mapState } from 'vuex'
/*eslint-disable */
export default {

  data () {
    return {
      emojis: [
        '推荐', '居家生活', '服饰包鞋', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '全球特色'
      ],
      isShow: true,

    }
  },
  mounted () {
    this.init()
    new Swiper('.swiper-container', {
      mousewheel: true,
      type: 'fraction',
      //type : 'progressbar',
      //type : 'custom',
      loop: true, // 循环模式选项
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        bulletElement: 'li',
      },
    });
  },
  computed: {
    ...mapState({ emojisindex: state => state.home.emojisindex })
  },
  beforeDestroy () {
    this.bs.destroy()
  },
  methods: {
    init () {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        probeType: 3, // listening scroll hook
        click: true
      })
      this._registerHooks(['scroll', 'scrollEnd'], (pos) => {
        console.log('done')
      })
    },
    _registerHooks (hookNames, handler) {
      hookNames.forEach((name) => {
        this.bs.on(name, handler)
      })
    },
    async red (index) {
      console.log(index)
      await this.$store.dispatch('getemojisindex', index)
      this.$router.push(`/home/${index}`)
      console.log(this.$router.push)
    }
  }
}
</script>
<style lang='stylus' scoped  rel='stylesheet/stylus'>
.nav
  width 100%
  height 60px
  display flex
  align-items center
  justify-content space-around
  .nav-log
    font-size 16px
    width 20%
    font-weight 700
  .nav-input
    width 60%
    background-color #ededed
    height 35px
    border-radius 10px
    display flex
    align-items center
    justify-content center
    input
      width 80%
      background-color #ededed
      height 20px
      border-radius 10px
      font-size 16px
    .icon
      font-size 16px
      width 10%
  .nav-login
    width 10%
    height 25px
    line-height 25px
    text-align center
    color red
    border 1px solid red
    font-size 16px
    border-radius 10px
.home-scroll
  width 100%
  position relative
  .horizontal-container, .scroll-wrapper
    width 90%
    white-space nowrap
    margin-left 10px
    border-radius 5px
    overflow hidden
    .scroll-content
      display inline-block
    .scroll-item
      height 30px
      line-height 30px
      font-size 16px
      display inline-block
      text-align center
      padding 0 10px
      &.active
        color red
        border-bottom 1px solid red
  .channel
    width 100%
    height 320px
    p
      font-size 20px
      margin 0 5px
      display inline-block
    .channel-ul
      display flex
      flex-wrap wrap
      margin-top 10px
      height 80%
      .channel-list
        width 90px
        height 30px
        background-color #FAFAFA
        text-align center
        border 1px solid #CCC
        line-height 30px
        font-size 16px
        margin 0 5px
        border-radius 10px
        &.active
          color red
          border 1px solid red
  .scroll-icon
    width 10%
    height 30px
    position absolute
    right 0px
    top 3px
.swiper-container
  width 100%
  height 200px
  .swiper-slide
    img
      height 100%
      width 100%
</style>
<style lang='stylus' scoped  ></style>