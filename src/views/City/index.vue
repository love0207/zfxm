<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="$router.back()" />
    <van-index-bar :index-list="indexListAll">
      <van-index-anchor v-for="(val, key) in obj" :key="key" :index="key"
        >{{ key === "#" ? "当前城市" : key }}
        <van-cell v-if="key === '#'">{{ $store.state.city.label }}</van-cell>
        <van-cell
          v-else-if="key === '热'"
          v-for="(item, index) in hotCity"
          :key="index"
          :title="item.label"
          @click="fn(item)"
        />
        <van-cell
          v-else
          :title="item.label"
          v-for="item in val"
          :key="item.value"
          @click="$toast('暂无城市数据')"
        ></van-cell>
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>

<script>
import { cityList, getHotCity } from '@/api/city'
export default {
  created () {
    this.getHotCity()
    this.cityList()
  },
  data () {
    return {
      indexListAll: [],
      hotCity: [],
      List: [],
      obj: {}
    }
  },
  methods: {
    async cityList () {
      try {
        const res = await cityList()
        this.List = res.data.body
        const indexList = [...new Set(this.List.map(item => item.pinyin[0].toUpperCase()))].sort()
        this.indexListAll = ['#', '热', ...indexList]
        const obj = {}
        this.indexListAll.forEach(item => {
          obj[item] = []
          this.List.forEach((item1) => {
            const first = item1.pinyin[0].toUpperCase()
            if (first === item) {
              obj[item].push(item1)
            }
          })
        })
        this.obj = obj
      } catch (e) { console.log(e) }
    },
    async getHotCity () {
      try {
        const res = await getHotCity()
        this.hotCity = res.data.body
      } catch (error) {
        console.log(error)
      }
    },
    fn (item) {
      this.$store.commit('setCity', item)
      this.$router.go(-1)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
