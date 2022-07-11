<template>
  <div>
    <div class="y-header" v-if="flag">
      <div class="tag">
        <div class="touxiang">
          <img
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt=""
            class="touxiang-p"
          />
        </div>
        <div class="tuichu">
          <span>{{ userList.nickname }}</span>
        </div>
        <div>
          <button @click="logout">退出</button>
        </div>

        <span class="ziliao">编辑个人资料</span>
      </div>
    </div>
    <div class="n-header" v-else>
      <div class="tag">
        <div class="touxiang">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        </div>
        <p>游客</p>
        <div class="btn" @click="$router.push('/login')">
          <button>去登录</button>
        </div>
      </div>
    </div>
    <van-grid :column-num="3" :border="false">
      <van-grid-item text="我的收藏" @click="mycollect">
        <template #icon><van-icon name="star-o" size="20" /> </template>
      </van-grid-item>
      <van-grid-item text="我的出租"  @click="myrent">
        <template #icon><van-icon name="wap-home-o" size="20" /> </template>
      </van-grid-item>
      <van-grid-item text="看房记录">
        <template #icon><van-icon name="clock-o" size="20" /> </template>
      </van-grid-item>
      <van-grid-item text="成为房主">
        <template #icon><van-icon name="vip-card-o" size="20" /> </template>
      </van-grid-item>
      <van-grid-item text="个人资料">
        <template #icon><van-icon name="contact" size="20" /> </template>
      </van-grid-item>
      <van-grid-item text="联系我们">
        <template #icon><van-icon name="phone-circle-o" size="20" /> </template>
      </van-grid-item>
    </van-grid>
    <div class="footer">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getUser } from '@/api/my'
export default {

  name: 'My',
  created () {
    this.isLoginShow()
    this.getUser()
  },
  data () {
    return {
      flag: false,
      userList: {}
    }
  },
  methods: {
    async logout () {
      try {
        await this.$dialog.confirm({ message: '确定退出嘛' })
        this.$store.commit('setUser', '')
        // this.$router.push('my')
        this.isLoginShow()
        console.log(this.flag)
      } catch (err) { console.log(err) }
    },

    isLoginShow () {
      if (this.$store.state.user) {
        this.flag = true
      } else {
        this.flag = false
      }
    },
    async getUser () {
      try {
        const res = await getUser()
        console.log(res)
        this.userList = res.data.body
      } catch (err) {
        console.log(err)
      }
    },
    mycollect () {
      if (this.$store.state.user) {
        this.$router.push('/favorate')
      } else {
        this.$router.push('/login')
      }
    },
    myrent () {
      if (this.$store.state.user) {
        this.$router.push('/myrent')
      } else {
        this.$router.push('/login')
      }
    }
  },
  computed: {
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
// 登录状态
.y-header {
  position: relative;
  width: 375px;
  height: 375px;
  background: url("http://liufusong.top:8080/img/avatar.png") no-repeat;
  background-size: cover;
  .tag {
    position: absolute;
    background: #fff;
    width: 85%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .touxiang {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 70px;
      height: 70px;
      border: 5px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
      .touxiang-p {
        width: 100%;
        border-radius: 50%;
      }
    }
    .tuichu {
      margin-top: -20px;
      margin-bottom: 5px;
    }
    button {
      width: 54px;
      height: 20px;
      border-radius: 30px;
      border: none;
      color: #fff;
      background: #21b97a;
      font-size: 12px;
      margin-bottom: 20px;
    }
    .ziliao {
      color: #999;
      font-size: 12px;
    }
  }
}
//未登录状态
.n-header {
  position: relative;
  width: 375px;
  min-height: 300px;
  background: url("http://liufusong.top:8080/img/profile/bg.png") no-repeat;
  background-size: contain;
  margin-bottom: 10px;
  .tag {
    position: absolute;
    background: #fff;
    width: 85%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .touxiang {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 70px;
      height: 70px;
      margin-bottom: -17px;
      border: 5px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    .btn {
      color: #fff;
      margin-top: 15px;
      button {
        font-size: 13px;
        line-height: 30px;
        text-align: center;
        margin: auto 0;
        border-radius: 5px;
        height: 30px;
        width: 70px;
        border: 0;
        background-color: #21b97a;
      }
    }
  }
}
.footer {
  width: 345px;
  height: 85px;
  margin-left: 15px;
  margin-top: 10px;
}
</style>
