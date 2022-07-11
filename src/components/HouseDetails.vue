<template>
  <div>
    <div
      class="houseList"
      v-for="(item, index) in list"
      :key="index"
      @click="
        $router.push({
          name: 'details',
          params: { houseCode: item.houseCode },
        })
      "
    >
      <div class="left">
        <img :src="baseurl + item.houseImg" alt="" />
      </div>
      <div class="right">
        <h3>{{ item.title }}</h3>
        <div class="describe">{{ item.desc }}</div>
        <div class="traffic" v-for="(item, index) in item.tags" :key="index">{{item}}</div>
        <div class="price">{{ item.price }}元/月</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  created () { },
  data () {
    return {
      baseurl: 'http://liufusong.top:8080'
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.houseList {
  padding-top: 18px;
  width: 375px;
  height: 120px;
  border-bottom: 1px solid #e5e5e5;
  .left {
    float: left;
    width: 106px;
    height: 80px;
    img {
      width: 106px;
      height: 80px;
    }
  }
  .right {
    overflow: hidden;
    line-height: 22px;
    padding-left: 12px;
    h3 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
      margin: 0;
      font-size: 15px;
      color: #394043;
    }
    .describe {
      font-size: 12px;
      color: #afb2b3;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
      margin-bottom: -6px;
      margin-top: -3px;
    }
    .traffic {
      color: #39becd;
      background: #e1f5f8;
      display: inline-block;
      font-size: 12px;
      border-radius: 3px;
      padding: 4px 5px;
      margin-right: 5px;
      line-height: 12px;
    }
    .price {
      font-size: 12px;
      color: #fa5741;
      font-size: 16px;
      font-weight: bolder;
    }
  }
}
</style>
