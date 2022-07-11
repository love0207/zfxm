<template>
  <div>
    <div class="container">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#888">
        <van-swipe-item><img src="@/assets/1.png" alt="" /></van-swipe-item>
        <van-swipe-item><img src="@/assets/2.png" alt="" /></van-swipe-item>
        <van-swipe-item><img src="@/assets/3.png" alt="" /></van-swipe-item>
      </van-swipe>
      <div class="search">
        <van-search placeholder="请输入搜索关键词" background="none" disabled>
          <template #label>
            <span @click="$router.push('/city')"
              >{{$store.state.city.label}}<i class="iconfont icon-xiala"></i
            ></span>
          </template>
        </van-search>
        <i class="iconfont icon-ditu"></i>
      </div>
    </div>
    <div class="house">
      <van-grid :border="false">
        <van-grid-item text="整租" @click="$router.push('/search')">
          <template #icon>
            <img src="@/assets/下载.png" alt="" />
          </template>
        </van-grid-item>
        <van-grid-item text="合租" @click="$router.push('/search')">
          <template #icon>
            <img src="@/assets/下载 (1).png" alt="" />
          </template>
        </van-grid-item>
        <van-grid-item text="地图找房" >
          <template #icon>
            <img src="@/assets/下载 (2).png" alt="" />
          </template>
        </van-grid-item>
        <van-grid-item text="去出租" @click="$router.push('/gorent')">
          <template #icon>
            <img src="@/assets/下载 (3).png" alt="" />
          </template>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="xiaozu">
      <div class="title">
        <h3>租房小组</h3>
        <span>更多</span>
      </div>
      <div class="content">
        <div v-for="item in RentHouseList" :key="item.id" class="box">
          <div class="left"><img :src="baseurl + item.imgSrc" /></div>
          <div class="right">
            <p>{{ item.title }}</p>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { rentHouse } from '@/api/home'
export default {
  name: 'Home',
  created () {
    this.rentHouse()
  },
  data () {
    return {
      baseurl: 'http://liufusong.top:8080',
      RentHouseList: []
    }
  },
  methods: {
    async rentHouse () {
      try {
        const res = await rentHouse()
        console.log(res)
        this.RentHouseList = res.data.body
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.container {
  position: relative;
}
.search {
  top: 20px;
  position: absolute;
  display: flex;
  .van-search {
    display: flex;
    width: 320px;
    margin: 0 10px;
    span {
      display: flex;
      border-right: 1px solid #ccc;
      margin-right: 5px;
      padding-right: 10px;
      .icon-xiala {
        display: flex;
        zoom: 0.5;
        margin-left: 5px;
      }
    }
  }
  .icon-ditu {
    margin-top: 8px;
    margin-left: -6px;
    color: #fff;
    font-size: 25px;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.house {
  img {
    width: 60px;
    height: 60px;
  }
  /deep/.van-grid-item__text {
    padding-top: 12px;
  }
}
.xiaozu {
  background-color: #f6f5f6;
  .title {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    h3 {
      font-size: 17px;
    }
    span {
      font-size: 16px;
      color: #787d82;
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .box {
      display: flex;
      width: 172px;
      height: 60px;
      background-color: #fff;
      margin-bottom: 10px;
      border-radius: 5px;
      .left {
        padding-top: 4px;
        width: 50px;
        height: 50px;
        margin: 0 10px;
      }
      .right {
        padding-top: 6px;
        p {
          font-size: 14px;
          color: #333;
          margin-bottom: -5px;
        }
      }
    }
  }
}
</style>
