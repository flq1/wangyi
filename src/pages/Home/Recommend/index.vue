<template>
  <div class="home">
    <!-- 品牌信赖 -->
    <div class="guarantee">
      <ul>
        <li v-for="(item,index) in limitedActivities" :key="index">
          <img :src="item.icon" alt />
          <span>{{item.desc}}</span>
        </li>
      </ul>
    </div>
    <!-- 新品首发展示 -->
    <div class="swiper-list">
      <a href="#" class="swiper-list-a" v-for="(item,index) in data" :key="index">
        <img :src="item.picUrl" />
        <span>{{item.text}}</span>
      </a>
    </div>
    <!-- 限时特惠 -->
    <div class="epidemicSituation">
      <div class="yanxuan">
        <img
          src="https://yanxuan-item.nosdn.127.net/846c6f342a606b02395942ede983af6e.png?imageView&thumbnail=168x0&quality=75"
        />
        <div class="yanxuan-price">
          <span>￥500</span>
        </div>
      </div>
      <div class="EpidemicModule">
        <a
          href="https://yanxuan.nosdn.127.net/947b24847de83b94f9dfed2d75ba9d95.png?quality=75&type=webp&imageView&thumbnail=375x0"
        ></a>
        <a
          href="https://yanxuan.nosdn.127.net/d6eed4125699c1c0275003e096a8b559.png?quality=75&type=webp&imageView&thumbnail=375x0"
        ></a>
      </div>
    </div>
    <!-- 新人礼物 -->
    <div class="NewGifts">
      <div class="NewGifts-herder">
        <span>新人专享礼</span>
      </div>
      <div class="NewGifts-content">
        <a href="#" class="NewGifts-left">
          <span>新人专享礼包</span>
          <img src="http://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt />
        </a>

        <div class="NewGifts-right">
          <div class="NewGifts-right-welfare">
            <div>
              <p>福利社</p>
              <p>今日特价</p>
            </div>
            <img
              src="https://yanxuan-item.nosdn.127.net/f4cccc00bf214181daa940a415e7006f.png?quality=75&type=webp&imageView&thumbnail=200x200"
              alt
            />
          </div>
          <div class="NewGifts-right-purchase">
            <p>新人拼团</p>
            <p>1元起包邮</p>
          </div>
        </div>
      </div>
    </div>
    <div class="qqq"></div>
  </div>
</template>
<script>
/*eslint-disable */
//import BScroll from '@better-scroll/core'
import { reqHomeResource, reqPolicyDescList } from '../../../api/index'

export default {
  data () {
    return {
      data: [],
      limitedActivities: []
    }
  },
  async mounted () {
    this.data = await reqHomeResource()
    this.limitedActivities = await reqPolicyDescList()
  },

}
</script>
<style lang='stylus' scoped  rel='stylesheet/stylus'>
.home
  width 100%
  height 100%
  .guarantee
    width 100%
    height 60px
    ul
      width 90%
      height 100%
      margin 0 auto
      display flex
      padding-top 5px
      li
        text-align center
        flex 1
        img
          width 16px
          height 16px
          vertical-align middle
        span
          font-size 10px
          vertical-align middle
          margin-left 5px
  .swiper-list
    width 100%
    height 200px
    display flex
    flex-wrap wrap
    justify-content space-around
    .swiper-list-a
      width 20%
      height 50%
      display flex
      flex-direction column
      justify-content center
      align-items center
      img
        width 80%
        height 60%
      span
        display inline-block
        width 80%
        height 20%
        margin-top 20%
        font-size 10px
        text-align center
  .epidemicSituation
    widht 100%
    height 200px
    background-color #eeee
    display flex
    flex-direction column
    align-items center
    .yanxuan
      width 100%
      height 100px
      background url('https://yanxuan.nosdn.127.net/481a123e40483888a1dc13db0280611f.gif?imageView&quality=75') center center no-repeat
      background-size 100% 100%
      position relative
      img
        width 80px
        height 60 px
        position absolute
        top 10px
        left 40px
      .yanxuan-price
        z-index 1
        width 50px
        height 15px
        position absolute
        bottom 20px
        left 50px
        background-color #F48F18
        border-radius 10px
        line-height 1px
        span
          font-size 10px
          color #ffff
    .EpidemicModule
      width 90%
      height 100px
      display flex
      justify-content center
      align-items center
      a
        width 45%
        height 80px
        display inline-block
      a:nth-child(1)
        margin-right 20px
        background url('https://yanxuan.nosdn.127.net/947b24847de83b94f9dfed2d75ba9d95.png?quality=75&type=webp&imageView&thumbnail=375x0')
        background-size 100% 100%
      a:nth-child(2)
        background url('https://yanxuan.nosdn.127.net/d6eed4125699c1c0275003e096a8b559.png?quality=75&type=webp&imageView&thumbnail=375x0')
        background-size 100% 100%
  .NewGifts
    width 100%
    height 200px
    display flex
    flex-direction column
    align-items center
    .NewGifts-herder
      width 100%
      height 10%
      text-align center
    .NewGifts-content
      margin-top 20px
      display flex
      width 90%
      height 90%
      .NewGifts-left
        width 50%
        height 100%
        background-color #F9E9CF
        span
          font-size 16px
        img
          width 80%
          height 100px
      .NewGifts-right
        width 50%
        height 100%
        margin-left 5px
        .NewGifts-right-welfare
          margin-bottom 5px
          width 100%
          height 50%
          font-size 16px
          display flex
          flex-direction row
          background-color #FBE2D3
          img
            height 80px
            width 80px
        .NewGifts-right-purchase
          width 100%
          height 47%
          font-size 16px
          background-color #FFECC2
  .qqq
    height 500px
</style>

