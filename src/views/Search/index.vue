<template>
  <div class="container">
    <van-nav-bar left-arrow @click-left="$router.push('/home')">
      <template #title>
        <div class="search">
          <van-search placeholder="请输入搜索关键词" background="none" disabled>
            <template #label>
              <span @click="$router.push('/city')"
                >{{ $store.state.city.label }}<i class="iconfont icon-xiala"></i
              ></span>
            </template>
          </van-search>
          <i class="iconfont icon-ditu" @click="$router.push('/map')"></i>
        </div>
      </template>
    </van-nav-bar>
    <div class="xlMenu">
      <van-sticky>
        <van-dropdown-menu active-color="#20b97a">
          <van-dropdown-item title="区域"
            ><van-picker :columns="column1" value-key="label" />
            <van-button class="white" type="default">取消</van-button>
            <van-button class="green" type="primary">确定</van-button>
          </van-dropdown-item>
          <van-dropdown-item title="方式"
            ><van-picker :columns="column2" value-key="label" />
            <van-button class="white" type="default">取消</van-button>
            <van-button class="green" type="primary">确定</van-button>
          </van-dropdown-item>
          <van-dropdown-item title="租金"
            ><van-picker :columns="column3" value-key="label" />
            <van-button class="white" type="default">取消</van-button>
            <van-button class="green" type="primary">确定</van-button>
          </van-dropdown-item>
          <van-dropdown-item title="筛选" @open="show = true">
          </van-dropdown-item>
        </van-dropdown-menu>
      </van-sticky>
    </div>
    <van-popup
      v-model="show"
      position="right"
      :style="{ height: '100%', width: '79%' }"
    >
      <dl class="filter-more-dl">
        <dt>户型</dt>
        <dd>
          <span v-for="(item, index) in cityObj.roomType" :key="index">{{
            item.label
          }}</span>
        </dd>
        <dt>朝向</dt>
        <dd>
          <span v-for="(item, index) in cityObj.oriented" :key="index">{{
            item.label
          }}</span>
        </dd>
        <dt>楼层</dt>
        <dd>
          <span v-for="(item, index) in cityObj.floor" :key="index">{{
            item.label
          }}</span>
        </dd>
        <dt>房屋亮点</dt>
        <dd>
          <span v-for="(item, index) in cityObj.characteristic" :key="index">{{
            item.label
          }}</span>
        </dd>
      </dl>
      <div class="filter-foot">
        <span class="filter-foot-cancel">清除</span>
        <span class="filter-foot-ok">确定</span>
      </div>
    </van-popup>
    <HouseDetails :list="list"></HouseDetails>
  </div>
</template>

<script>
import { getSearch, getHouse } from '@/api/search'
import HouseDetails from '@/components/HouseDetails.vue'
export default {
  name: 'Search',
  async created () {
    this.$toast.loading({
      message: '加载中...',
      forbidClick: true
    })
    const res = await getSearch(this.$store.state.city.value)
    console.log(res)
    this.cityObj = res.data.body
    res.data.body.area.children[0].children = [{ label: '' }]
    res.data.body.subway.children[0].children = [{ label: '' }]
    this.column1 = [res.data.body.area, res.data.body.subway]
    this.column2 = res.data.body.rentType
    this.column3 = res.data.body.price
    this.getHouse()
    this.$toast.loading.forbidClick = false
  },
  data () {
    return {
      column1: [
      ],
      column2: [

      ],
      column3: [

      ],
      show: false,
      cityObj: {},
      list: []
    }
  },
  methods: {
    async getHouse () {
      const res = await getHouse()
      console.log(res)
      this.list = res.data.body.list
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    HouseDetails
  }
}
</script>

<style scoped lang='less'>
.container{
  margin-bottom: 50px;
}
/deep/.van-nav-bar__content {
  height: 50px;
}
.search {
  margin-left: 15px;
  width: 335px;
  top: -2px;
  left: 10px;
  position: absolute;
  display: flex;
  .van-search {
    display: flex;
    width: 320px;
    margin: 0 10px;
    span {
      display: flex;
      height: 18px;
      border-right: 1px solid #ccc;
      margin-top: 8px;
      line-height: 17px;
      .icon-xiala {
        display: flex;
        zoom: 0.45;
        margin-left: 5px;
        margin-right: 10px;
      }
    }
  }
  .icon-ditu {
    margin-top: 14px;
    margin-left: -6px;
    color: #fff;
    font-size: 25px;
  }
}
.white {
  width: 125px;
  font-size: 18px;
  color: #20b97a;
}
.green {
  width: 250px;
  font-size: 18px;
  color: #fff;
  background-color: #20b97a;
}
/deep/.van-dropdown-menu__bar--opened {
  z-index: 0;
}
.filter-more-dl {
  padding: 0 15px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  dt {
    margin: 20px 0;
    font-size: 15px;
    display: block;
  }
  dd {
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 14px;
    display: block;
    margin-inline-start: 40px;
    &:last-child {
      border-bottom: 0;
    }
    span {
      display: inline-block;
      height: 32px;
      width: 70px;
      margin: 0 18px 15px 0;
      border: 1px solid #ddd;
      border-radius: 3px;
      line-height: 32px;
      text-align: center;
      font-size: 12px;
      color: #888;
    }
  }
}
.filter-foot {
  width: 100%;
  border-top: 1px solid #e9e9e9;
  display: flex;
  .filter-foot-cancel {
    flex: 1 1;
    color: #21b97a;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    width: 33%;
  }
  .filter-foot-ok {
    border-radius: 0;
    flex: 2 1;
    color: #fff;
    background-color: #21b97a;
    display: inline-block;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
  }
}
</style>
