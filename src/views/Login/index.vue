<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow class="top" @click-left="$router.back()">
    </van-nav-bar>

    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
      />
      <van-field
        v-model.trim="password"
        name="password"
        type="password"
        placeholder="请输入密码"
      />
      <div style="margin: 16px">
        <van-button native-type="submit" class="btn-submit">登录</van-button>
      </div>
    </van-form>
    <div class="text"><span>还没有账号，快去注册~</span></div>
  </div>
</template>

<script>
import { login } from '@/api/index'
export default {
  name: 'Login',
  created () { },
  data () {
    return {
      username: 'itheima',
      password: '123456'
    }
  },
  methods: {
    async onSubmit (values) {
      if (values.username === '' || values.password === '') {
        return this.$toast.fail('账号或密码不能为空')
      }
      const res = await login(values)
      console.log(res)
      if (res.data.status === 200) {
        this.$toast.success('登录成功')
        this.$router.push({ name: 'my' })
        this.$store.commit('setUser', res.data.body.token)
      } else (this.$toast.fail('登录失败'))
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.top {
  margin-bottom: 20px;
}
.van-cell {
  margin-top: 10px;
  height: 60px;
  font-size: 18px;
}
.btn-submit {
  display: block;
  outline: 0 none;
  text-align: center;
  font-size: 18px;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: nowrap;
  color: #fff;
  background-color: #1cb676;
  border: 1px solid #1cb676;
  border-radius: 2px;
  width: 100%;
}
.text {
  text-align: center;
  font-size: 14px;
  color: #666;
}
</style>
