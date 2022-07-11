<template>
  <div class="houseList">
    <div class="left">
      <img src="http://liufusong.top:8080/img/message/1.png" alt="" />
    </div>
    <div class="right">
      <h3>安贞西里 3室1厅</h3>
      <div class="describe">72.32㎡/南 北/低楼层</div>
      <div class="traffic">随时看房</div>
      <div class="price">4500元/月</div>
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
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
