<template>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <home-recommend></home-recommend>
  <home-weekend></home-weekend>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomeRecommend.vue'
import HomeWeekend from './components/HomeWeekend.vue'
import axios from 'axios'
export default {
  name:'Home',
  components:{
    HomeHeader:HomeHeader,
    HomeSwiper:HomeSwiper,
    HomeIcons:HomeIcons,
    HomeRecommend:HomeRecommend,
    HomeWeekend:HomeWeekend
  },
  methods:{
    getHomeInfo() {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus">

</style>
