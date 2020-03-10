<template>
  <div>购物车</div>
</template>

<script>
import { reqCateryGoodsFamily } from '../../api/index'
export default {
  async mounted () {

    const apidata1 = await reqCateryGoodsFamily()

    console.log(apidata1)
  }
}
</script>
<style lang='stylus' scoped  rel='stylesheet/stylus'></style>
