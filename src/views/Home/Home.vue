<template>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeIcons from './components/HomeIcons.vue'
export default {
  name:'Home',
  components:{
    HomeHeader:HomeHeader,
    HomeSwiper:HomeSwiper,
    HomeIcons:HomeIcons
  }
}
</script>

<style lang="stylus">

</style>
