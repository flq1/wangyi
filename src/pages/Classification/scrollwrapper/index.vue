<template>
  <div class="core-container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <div
          class="scroll-item"
          v-for="(item, index) in emojis"
          :key="index"
          @click="clickHandler(item.id)"
          :class="$route.path.slice(16)==item.id ? 'active':''"
        >{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import { mapState } from 'vuex'
import BScroll from '@better-scroll/core'
import { reqcategoryL1List } from '../../../api/index.js'
export default {
  name: '',
  data () {
    return {
      emojis: [],
      route: this.$route.path.slice(16),
      state: [],
    }


  },

  async mounted () {
    await this.$store.dispatch('getemojisindex')
    this.emojis = await reqcategoryL1List()
    console.log(this.emojis)
    this.$nextTick(() => {
      // DOM 现在更新了
      // `this` 绑定到当前实例
      this.init()

    })
    this.state = this.$store.state.Classification.category
    this.clickHandler(11)
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

      })
    },
    clickHandler (item) {
      const id = JSON.stringify(this.state.find((i, index) => i.id === item).subCateList)
      this.$router.push({
        path: `/Classification/${item}`,
        query: {
          id
        }
      })
    },
    _registerHooks (hookNames, handler) {
      hookNames.forEach((name) => {
        this.bs.on(name, handler)
      })
    }
  },

}
</script>
<style lang='stylus' scoped  rel='stylesheet/stylus'>
.core-container
  width 20%
  .scroll-wrapper
    height 95%
    overflow hidden
    .scroll-item
      height 50px
      line-height 50px
      font-size 15px
      text-align center
      &.active
        border-left 1px solid red
        color red
</style>
