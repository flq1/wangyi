<template>
  <div>
    sss
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
        <div class="History" v-if="History.length !== 0">
          <div class="History-header">
            <span>历史</span>
            <van-icon name="delete" size="20" @click="del" />
          </div>
          <nav class="nav-Share">
            <a href="#" v-for="(item,index) in History" :key="index">{{item}}</a>
          </nav>
        </div>
        <div>
          <header>
            <h3>热门搜索</h3>
          </header>
          <nav class="nav-Share">
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
      </div>
    </van-overlay>
  </div>
</template>

<script>
import Vue from 'vue';
import { Overlay, Search, Icon } from 'vant';
Vue.use(Search);
Vue.use(Overlay);
Vue.use(Icon);
export default {
  data () {
    return {
      show: true,
      value: '',
      History: JSON.parse(localStorage.getItem('History')) || []
    }
  },
  methods: {
    async  onSearch (val) {
      await this.$store.dispatch('getkeyword', val)
      this.History.push(val)
      if (this.History.length === 15) {
        this.History.pop
      }
      localStorage.setItem('History', JSON.stringify(this.History))
      this.$router.push('/Collectsearch/keyword')
      this.value = ""
    },
    onCancel () {
      this.$router.push('/Classification')
    },
    del () {
      this.History = ""
      console.log('hah')
      localStorage.removeItem('History')
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
  .History
    width 100%
    border-bottom 10px solid #eee
    padding-bottom 10px
    .History-header
      width 90%
      height 20px
      margin 10px
      font-size 16px
      color #999
      display flex
      justify-content space-between
  header
    width 100%
    height 20px
    margin 10px
    font-size 16px
    color #999
</style>
<style lang='stylus' scoped  rel='stylesheet/stylus'>
.nav-Share
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
    white-space nowrap
    text-overflow ellipsis
    overflow hidden
    word-break break-all
    max-width 80px
</style>
