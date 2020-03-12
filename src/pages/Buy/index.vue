<template>
  <div class="buy">
    <publicheader />
    <div class="buy-margin">
      <div class="buy-content">
        <div class="core-container">
          <div class="scroll-wrapper" ref="scroll">
            <div class="scroll-content">
              <div class="swiper-content">
                <div class="swiper-header">
                  <span>值得买</span>
                  <p>严选好物 用心体验生活</p>
                </div>
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="swiper-slide-icon">
                        <img
                          src="https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120x120"
                          alt
                        />
                        <p>甄选家</p>
                        <p>定价直降</p>
                      </div>
                      <div class="swiper-slide-icon">
                        <img
                          src="https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120x120"
                          alt
                        />
                        <p>甄选家</p>
                        <p>定价直降</p>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="swiper-slide-icon">
                        <img
                          src="https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120x120"
                          alt
                        />
                        <p>甄选家</p>
                        <p>定价直降</p>
                      </div>
                      <div class="swiper-slide-icon">
                        <img
                          src="https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120x120"
                          alt
                        />
                        <p>甄选家</p>
                        <p>定价直降</p>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="swiper-slide-icon">
                        <img
                          src="https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120x120"
                          alt
                        />
                        <p>甄选家</p>
                        <p>定价直降</p>
                      </div>
                      <div class="swiper-slide-icon">
                        <img
                          src="https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120x120"
                          alt
                        />
                        <p>甄选家</p>
                        <p>定价直降</p>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="swiper-slide-icon">
                        <img
                          src="https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120x120"
                          alt
                        />
                        <p>甄选家</p>
                        <p>定价直降</p>
                      </div>
                      <div class="swiper-slide-icon">
                        <img
                          src="https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120x120"
                          alt
                        />
                        <p>甄选家</p>
                        <p>定价直降</p>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="swiper-slide-icon">
                        <img
                          src="https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120x120"
                          alt
                        />
                        <p>甄选家</p>
                        <p>定价直降</p>
                      </div>
                      <div class="swiper-slide-icon">
                        <img
                          src="https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120x120"
                          alt
                        />
                        <p>甄选家</p>
                        <p>定价直降</p>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="swiper-slide-icon">
                        <img
                          src="https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120x120"
                          alt
                        />
                        <p>甄选家</p>
                        <p>定价直降</p>
                      </div>
                      <div class="swiper-slide-icon">
                        <img
                          src="https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120x120"
                          alt
                        />
                        <p>甄选家</p>
                        <p>定价直降</p>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="swiper-slide-icon">
                        <img
                          src="https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120x120"
                          alt
                        />
                        <p>甄选家</p>
                        <p>定价直降</p>
                      </div>
                      <div class="swiper-slide-icon">
                        <img
                          src="https://yanxuan.nosdn.127.net/84395807297dbc88f6569e16960695f1.png?imageView&quality=65&thumbnail=120x120"
                          alt
                        />
                        <p>甄选家</p>
                        <p>定价直降</p>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
              </div>
              <div class="buy-scroll">
                <div class="buy-scroll-item" v-for="(item,index) in data" :key="index">
                  <van-image :src="item.wapBannerUrl" class="buy-scroll-img" radius="5px" />
                  <p v-if="item.id">{{item.frontDesc}}</p>
                  <div class="buy-scroll-bottom" v-if="item.id">
                    <van-image width="30" height="30" :src="item.wapBannerUrl" radius="5px" />
                    <div class="buy-scroll-bottom-rigth">
                      <van-icon name="eye-o" class="buy-scroll-bottom-icon" />
                      <span>{{item.id}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import './css/index.css'
import { mapState } from 'vuex'
import Vue from 'vue';
import { Image } from 'vant';
Vue.use(Image);
import publicheader from '../../components/publicheader'
/* eslint-disable */
export default {
  data () {
    return {

    }
  },
  components: {
    publicheader
  },
  async mounted () {
    await this.$store.dispatch('buy')
    this.$nextTick(() => {
      // DOM 现在更新了
      // `this` 绑定到当前实例
      this.init()

    })
    new Swiper('.swiper-container', {
      slidesPerView: 3,

      slidesPerColumnFill: 'row',
      pagination: {
        el: '.swiper-pagination',
      },
    })

  },
  beforeDestroy () {
    this.bs.destroy()
  },
  computed: {
    ...mapState({
      data: state => state.buy.data
    })
  },
  methods: {
    init () {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollY: true,
        click: true,
        probeType: 3, // listening scroll hook

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
    },

  }
}
</script>
<style lang='stylus' scoped  rel='stylesheet/stylus'>
.buy
  width 100%
  height 100%
  .buy-margin
    width 100%
    height 91%
    .buy-content
      width 100%
      .core-container
        .scroll-wrapper
          height 600px
          overflow hidden
          .swiper-content
            width 100%
            height 350px
            background-image linear-gradient(#CAA76A, #fff)
            position relative
            .swiper-header
              position absolute
              top 30px
              color #fff
              display flex
              span
                font-size 30px
                margin-left 5px
              p
                font-size 16px
                line-height 40px
                margin-left 5px
            .swiper-container
              height 250px
              width 95%
              left 0
              right 0
              margin 0 auto
              border-radius 5px
              position absolute
              bottom 0px
              background-color #fff
              .swiper-slide
                width 100px
                height 80%
                .swiper-slide-icon
                  padding 10px 2px 2px 0
                  width 100px
                  height 50%
                  display flex
                  flex-direction column
                  justify-content center
                  align-items center
                  img
                    width 70%
                    height 50%
                    margin-bottom 5px
                  p
                    font-size 10px
          .buy-scroll
            columns 2
            columns 200px
            background-color #eeee
            padding 10px 0
            .buy-scroll-item
              display inline-block
              margin 10px 9px
              background-color #ffff
              width 45%
              border-radius 5px
              .buy-scroll-img
                width 100%
              p
                font-size 20px
                margin 5px 0 5px 5px
              .buy-scroll-bottom
                display flex
                justify-content space-between
                .buy-scroll-bottom-rigth
                  font-size 22px
</style>

