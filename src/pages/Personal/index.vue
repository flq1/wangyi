<template>
  <div class="personal">
    <publicheader />
    <div class="personal-content">
      <img src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt />
      <div class="personal-content-btn" v-show="$route.path==='/personal'&&user===null">
        <van-button class="danger" type="danger" @click="login">
          <van-icon name="phone-o" size="15" />手机号快捷登录
        </van-button>
        <van-button plain type="danger">
          <van-icon name="envelop-o" size="15" />邮箱帐号登录
        </van-button>
      </div>
      <van-form @submit="onSubmit" v-show="$route.path==='/personal/login' &&user===null">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 40px;">
          <van-button round block type="danger" native-type="submit">提交</van-button>
        </div>
      </van-form>
      <div class="user" v-show="user!==null">
        <div>欢迎{{user}}登入</div>
        <div class="Signout">
          <van-button type="danger" @click="Signout">退出</van-button>
        </div>
      </div>
      <div class="personal-content-buttom">
        <span>微信</span>
        <span class="span">QQ</span>
        <span>微博</span>
      </div>
    </div>
  </div>
</template>

<script>
import publicheader from '../../components/publicheader'
import Vue from 'vue';
import { Button, Form, Field, Dialog } from 'vant';


Vue.use(Dialog);
Vue.use(Form);
Vue.use(Button);
Vue.use(Field);
export default {
  components: {
    publicheader
  },
  data () {
    return {
      username: '',
      password: '',
      user: JSON.parse(localStorage.getItem('user')) || null
    };
  },
  methods: {
    async onSubmit (values) {
      await this.$store.dispatch('relogin', values)
      const user = this.$store.state.login.user
      if (user !== null) {
        this.user = user
        this.$router.replace('/personal/Success')
      }
    },
    login () {
      this.$router.push('/personal/login')
    },
    Signout () {
      Dialog.confirm({
        message: '确认退出吗！！！'
      }).then(() => {
        this.user = ''
        localStorage.removeItem('user')
        this.$store.state.login.user = ''
        this.$router.push('/personal/login')
      });

    }
  },
}
</script>
<style lang='stylus' scoped  rel='stylesheet/stylus'>
.personal
  width 100%
  height 100%
  .personal-content
    width 100%
    height 91%
    background-color #eee
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    img
      width 200px
      height 110px
    .personal-content-btn
      display flex
      flex-direction column
      width 80%
      .danger
        margin-bottom 20px
    .personal-content-buttom
      font-size 16px
      .span
        border-right 2px solid #999
        border-left 2px solid #999
        padding 0 10px
        margin 0 10px
    .user
      .Signout
        text-align center
        margin-top 30px
</style>
