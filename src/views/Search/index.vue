<template>
  <div>
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
    ></van-popup>
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
</style>
