<template>
    <!-- 注意轮播不能放在<el-container>中间 -->
    <div>
        <!-- @click.native="linkTo" -->
        <el-carousel class="lun_imgs" ref="carousel">
            <el-carousel-item class="lun_img" v-for='item in list' :key='item.id'>
                <img :src="item.imgUrl"/>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
      name: "HomeSwiper",
      props: {
        list: Array
      },
      data() {
        return {
          imgs: [
            // {imgUrl: require('../../assets/images/lunbo/lunbo1.png'), link: '/content1'},
            {imgUrl: require('../../../assets/images/lunbo/lunbo1.png'),text:'lunbo1.png'},
            {imgUrl: require('../../../assets/images/lunbo/lunbo2.png'),text:'lunbo2.png'},
            {imgUrl: require('../../../assets/images/lunbo/lunbo3.png'),text:'lunbo3.png'}
          ]
        }
      },
      // methods: {
      //   linkTo () {
      //     let activeIndex = this.$refs.carousel.activeIndex
      //     this.$router.push(this.imgs[activeIndex].link)
      //   }
      // }
    }
</script>

<style lang="stylus" scoped>
.lun_imgs >>> .el-carousel__container
    height:116px
    .lun_img
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 31%
        img
            width: 100%
</style>
