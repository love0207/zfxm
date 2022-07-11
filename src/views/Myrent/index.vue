<template>
  <div>
    <van-nav-bar title="房屋管理" left-arrow @click-left="$router.back()" />
    <HouseDetails :list="list"></HouseDetails>
  </div>
</template>

<script>
import HouseDetails from '@/components/HouseDetails.vue'
import { myRent } from '@/api/my'
export default {
  name: 'Myrent',
  created () {
    this.myRent()
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    async myRent () {
      try {
        const res = await myRent()
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
