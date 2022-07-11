<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="$router.back()" />
    <HouseDetails :list="list"></HouseDetails>
  </div>
</template>

<script>
import HouseDetails from '@/components/HouseDetails.vue'
import { favorateList } from '@/api/my'
export default {
  name: 'Favorate',
  created () {
    this.favorateList()
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    async favorateList () {
      try {
        const res = await favorateList()
        console.log(res)
        this.list = res.data.body
      } catch (e) { console.log(e) }
    }
  },
  computed: {
  },
  watch: {},
  filters: {},
  components: { HouseDetails }
}
</script>

<style scoped lang='less'>
</style>
