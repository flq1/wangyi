<template>
  <div class="classcontent">
    <div class="classcontent-img" v-if="state.length">
      <img alt="route" :src="state[0].bannerUrl" />
    </div>
    <div class="classcontent-commodity" v-if="state.length">
      <van-grid :gutter="5" icon-size="80px" :column-num="3">
        <van-grid-item
          v-for="(item,index) in state"
          :key="index"
          :icon="item.wapBannerUrl"
          :text="item.name"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Grid, GridItem } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
export default {
  data () {
    return {
      state: []
    }
  },
  mounted () {
    // this.state =  JSON.parse(this.$route.query.id)  
  },
  watch: {
    $route: {
      handler () {
        this.state = JSON.parse(this.$route.query.id)

        //深度监听，同时也可监听到param参数变化
      },
      deep: true,
    }
  }
}
</script>
<style lang='stylus' scoped  rel='stylesheet/stylus'>
.classcontent
  width 80%
  height 70%
  .classcontent-img
    width 90%
    height 110px
    margin 0 auto 10px auto
    img
      width 100%
      height 100%
  .classcontent-commodity
    width 100%
</style>
