<template>
  <div>
    <Homeheader />
    <router-view></router-view>
  </div>
</template>
<script>
/*eslint-disable */
//import BScroll from '@better-scroll/core'

import Homeheader from './Homeheader/index'

export default {
  components: {
    Homeheader
  }
}
</script>
<style lang='stylus' scoped  rel='stylesheet/stylus'></style>

