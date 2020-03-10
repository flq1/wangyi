<template>
  <div>
    <van-overlay :show="show">
      <div class="block" @click.stop>
        <form action="/">
          <van-search
            shape="round"
            v-model="value"
            show-action
            placeholder="网课神器 打印机"
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
        <header>
          <h3>热门搜索</h3>
        </header>
        <nav>
          <a href="#">省钱卡充9得45</a>
          <a href="#">停课不停学</a>
          <a href="#">拖把</a>
          <a href="#">饭盒</a>
          <a href="#">电动牙刷</a>
          <a href="#">洗脸巾</a>
          <a href="#">猫粮</a>
          <a href="#">酒精棉片</a>
          <a href="#">四件套</a>
          <a href="#">螺蛳粉</a>
          <a href="#">抽纸</a>
          <a href="#">洗衣液</a>
        </nav>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import Vue from 'vue';
import { Overlay, Search, Toast } from 'vant';
Vue.use(Search);
Vue.use(Overlay);
export default {
  data () {
    return {
      show: true,
      value: ''
    }
  },
  methods: {
    onSearch (val) {
      Toast(val);
    },
    onCancel () {
      this.$router.push('/Classification')
    }
  }
}
</script>
<style lang='stylus' scoped  rel='stylesheet/stylus'>
.block
  width 100%
  background-color #fff
  z-index 20
  padding 10px 0
  header
    width 100%
    height 20px
    margin 10px
    font-size 16px
    color #999
  nav
    margin-left 10px
    a
      font-size 10px
      display inline-block
      border 1px solid #999
      border-radius 3px
      line-height 30px
      text-align center
      padding 3px 10px
      height 30px
      margin-right 19px
      margin-buttom 10px
</style>
