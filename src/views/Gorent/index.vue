<template>
  <div>
    <van-nav-bar title="发布房源" left-arrow @click-left="$router.back()" />
    <div class="message">房屋信息</div>
    <van-cell title="小区名称" is-link value="请输入小区名称" />
    <van-cell title="租金" value="￥/月" />
    <van-cell title="建筑面积" value="㎡" />
    <van-cell title="户型" is-link value="请选择" />
    <van-cell title="所在楼层" is-link value="请选择" />
    <van-cell title="朝向" is-link value="请选择" />
    <div class="title">房屋标题</div>
    <van-field
      v-model="value"
      placeholder="请输入标题(例如：整租 小区名 2室 5000元)"
      :border="false"
    />
    <div class="title">房屋图像</div>
    <van-image width="100" height="100" />
    <div class="title">房屋配置</div>
    <van-grid :column-num="5" :border="false">
      <van-grid-item
        v-for="value in 10"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <div class="title describe">房屋描述</div>
    <van-field
      v-model="message"
      rows="4"
      autosize
      type="textarea"
      placeholder="请输入房屋描述信息"
      class="miaoshu"
    />
    <div class="footer">
      <van-button type="default" size="large">取消</van-button>
      <van-button type="primary" size="large">确认</van-button>
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
.message {
  font-size: 15px;
  color: #21b97a;
  line-height: 42px;
  border-bottom: 1px solid #ddd;
  padding-left: 15px;
}
.title {
  font-size: 14px;
  line-height: 42px;
  border-bottom: 1px solid #ddd;
  padding-left: 15px;
}
.describe {
  border-top: 20px solid rgb(244, 243, 243);
}
.footer {
  width: 375px;
  display: flex;
  position: fixed;
  bottom: 0;
}
.miaoshu {
  margin-bottom: 70px;
}
</style>
