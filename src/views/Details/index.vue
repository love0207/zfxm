<template>
  <div class="body">
    <van-nav-bar
      :title="list.community"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="picture">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in list.houseImg" :key="index"
          ><img :src="baseurl + item" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="content">
      <h3>{{ list.title }}</h3>
      <div class="biaoqian">
        <span v-for="(item, index) in list.tags" :key="index">{{ item }}</span>
      </div>
      <div class="msg">
        <div>
          <div class="red">{{ list.price }}<span>/月</span></div>
          <div>租金</div>
        </div>
        <div>
          <div class="red">{{ list.roomType }}</div>
          <div>房型</div>
        </div>
        <div>
          <div class="red">{{ list.size }}平米</div>
          <div>面积</div>
        </div>
      </div>
      <div class="describe">
        <div class="left">
          <div><span>装修：</span>精装</div>
          <div><span>楼层：</span>{{ list.floor }}</div>
        </div>
        <div class="right">
          <div><span>朝向：</span>东</div>
          <div><span>类型：</span>普通住宅</div>
        </div>
      </div>
    </div>
    <div class="map">
      <div class="title">小区：<span>天山星城</span></div>
      <div class="ma"></div>
    </div>
    <div class="dispose">
      <div class="title">房屋配置</div>
      <ul>
        <li>
          <p><i class="iconfont icon-xiyiji"></i></p>
          洗衣机
        </li>
        <li>
          <p><i class="iconfont icon-kongdiao"></i></p>
          空调
        </li>
      </ul>
      <div class="peizhi"></div>
    </div>
    <div class="details">
      <div class="title">房源概况</div>
      <div>
        <div class="wang">
          <div class="wang1">
            <img src="http://liufusong.top:8080/img/avatar.png" alt="头像" />
            <div class="ziliao">
              <div>王女士</div>
              <div class="yes">已认证业主</div>
            </div>
          </div>
          <span>发消息</span>
        </div>
        <div class="miaoshu">
          1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
          2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
          3.人车分流，环境优美。
          4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
        </div>
      </div>
    </div>
    <div class="love">
      <div class="title">&nbsp;&nbsp;猜你喜欢</div>

      <HouseDetail></HouseDetail>
      <HouseDetail></HouseDetail>
      <HouseDetail></HouseDetail>
    </div>
    <div class="footer">
      <van-button>收藏</van-button><van-button>在线资讯</van-button
      ><van-button type="primary">电话预约</van-button>
    </div>
  </div>
</template>

<script>
import HouseDetail from './components/HouseDetail.vue'
import { homeDetail } from '@/api/my'
export default {
  created () {
    console.log(this.$route.params.houseCode)
    this.homeDetail()
  },
  data () {
    return {
      list: [],
      baseurl: 'http://liufusong.top:8080'
    }
  },
  methods: {
    async homeDetail () {
      try {
        const res = await homeDetail(this.$route.params.houseCode)
        console.log(res)
        this.list = res.data.body
      } catch (e) { console.log(e) }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    HouseDetail
  }
}
</script>

<style scoped lang='less'>
.body {
  position: relative;
  padding-bottom: 50px;
  background-color: #f6f5f6;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 252px;
    text-align: center;
  }
  .picture {
    height: 252px;
  }
  .content {
    background: #fff;
    padding: 15px;
    h3 {
      font-weight: 400;
      font-size: 16px;
      color: #333;
    }
    .biaoqian {
      align-items: center;
      position: relative;
      margin: 10px 0;
      text-align: left;
      overflow: hidden;
      display: flex;
      margin-left: 0;
      min-width: 10px;
      span {
        color: #39becd;
        background: #e1f5f8;
        display: inline-block;
        font-size: 12px;
        border-radius: 3px;
        padding: 4px 5px;
        margin-right: 5px;
        line-height: 12px;
      }
    }
    .msg {
      align-items: center;
      border-top: 1px solid #cecece;
      border-bottom: 1px solid #cecece;
      margin: 15px 0;
      padding: 15px 0;
      text-align: left;
      overflow: hidden;
      display: flex;
      div {
        flex: 1;
        text-align: center;
        .red {
          color: #fa5741;
          font-size: 18px;
          font-weight: bolder;
          span {
            font-size: 12px;
            font-weight: 400;
          }
        }
        div {
          height: 26px;
          line-height: 26px;
          font-size: 14px;
          text-align: center;
          color: #999;
        }
      }
    }
    .describe {
      text-align: left;
      overflow: hidden;
      display: flex;
      font-size: 13px;
      .left {
        flex: 1 1;
        margin-left: 0;
        span {
          display: inline-block;
          color: #999;
          padding-right: 5px;
          line-height: 26px;
        }
      }
      .right {
        flex: 1 1;
        margin-left: 8px;
        min-width: 10px;
        span {
          display: inline-block;
          color: #999;
          padding-right: 5px;
          line-height: 26px;
        }
      }
    }
  }
  .map {
    margin-top: 10px;
    background: #fff;
    .title {
      margin: 0 3%;
      line-height: 44px;
      color: #666;
      font-size: 14px;
      span {
        color: #333;
      }
    }
    .ma {
      height: 145px;
      background-color: skyblue;
    }
  }
  .dispose {
    margin-bottom: 10px;
    padding: 0 10px;
    background: #fff;
    .title {
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 10px;
      padding: 15px 0;
      border-bottom: 1px solid #cecece;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      background: #fff;
      margin: 0;
      padding: 0;
      li {
        margin: 10px 0;
        width: 20%;
        line-height: 23px;
        font-size: 14px;
      }
    }
  }
  .details {
    margin: 10px 0;
    padding: 0 10px;
    // line-height: 150%;
    background: #fff;
    .title {
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 10px;
      padding: 15px 0;
      border-bottom: 1px solid #cecece;
    }
    .wang {
      margin-bottom: 10px;
      position: relative;
      .wang1 {
        display: flex;
        img {
          width: 52px;
          height: 52px;
          margin: 10px 10px 0 0;
        }
        .ziliao {
          padding: 15px 0 0 5px;
          div {
            font-size: 14px;
          }
          .yes {
            font-size: 12px;
            color: #fa5741;
          }
        }
      }
      span {
        position: absolute;
        right: 15px;
        top: 20px;
        color: #33be85;
        border: 1px solid #33be85;
        border-radius: 3px;
        padding: 3px 15px;
        font-size: 14px;
      }
    }
    .miaoshu {
      line-height: 1.6;
      padding: 10px 0;
      color: #333;
      font-size: 14px;
    }
  }
  .love {
    background: #fff;
    .title {
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 10px;
      padding: 15px 0;
      border-bottom: 1px solid #cecece;
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    .van-button {
      height: 50px;
      width: 125px;
    }
  }
}
</style>
