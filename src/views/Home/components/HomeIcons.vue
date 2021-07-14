<template>
  <div class="icons">
<!--
    <el-carousel indicator-position="none" ref="carousel" arrow="hover" >
      <el-carousel-item>
          <div class="icon" v-for="item of iconList" :key="item.id">
          <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </el-carousel-item>

      <el-carousel-item>
          <div class="icon" v-for="item of iconList" :key="item.id">
          <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </el-carousel-item>
-->

    <!-- v-for嵌套 -->
    <el-carousel indicator-position="none" ref="carousel" arrow="never">
      <el-carousel-item v-for="(page,index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>
    export default {
      name: "HomeIcons",
      props: {
        list: Array
      },
      // data () {
      //   return {
      //     iconList:[{
      //       id: '0001',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
      //       desc: '1-1酒店'
      //     },{
      //       id: '0002',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
      //       desc: '1-2机票'
      //     },{
      //       id: '0003',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
      //       desc: '1-3火车票'
      //     },{
      //       id: '0004',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
      //       desc: '1-4度假'
      //     },{
      //       id: '0005',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
      //       desc: '1-5景点门票'
      //     },{
      //       id: '0006',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
      //       desc: '1-6海外酒店'
      //     },{
      //       id: '0007',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
      //       desc: '1-7低价机票'
      //     },{
      //       id: '0008',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
      //       desc: '1-8汽车票船票'
      //     },{
      //       id: '0009',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
      //       desc: '2-1酒店'
      //     },{
      //       id: '0001',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
      //       desc: '2-2酒店'
      //     },{
      //       id: '0002',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
      //       desc: '2-3机票'
      //     },{
      //       id: '0003',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
      //       desc: '2-4火车票'
      //     },{
      //       id: '0004',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
      //       desc: '2-5度假'
      //     },{
      //       id: '0005',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
      //       desc: '2-6景点门票'
      //     },{
      //       id: '0006',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
      //       desc: '2-7海外酒店'
      //     },{
      //       id: '0007',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
      //       desc: '2-8低价机票'
      //     },{
      //       id: '0008',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
      //       desc: '3-1汽车票船票'
      //     },{
      //       id: '0009',
      //       imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
      //       desc: '3-2酒店'
      //     }]
      //   }
      // },

      computed: {
        pages () {
          const pages = []
          this.list.forEach((item, index) => {
            const page = Math.floor(index / 8)
            if (!pages[page]) {
              pages[page] = []
            }
            pages[page].push(item)
          })
          return pages
        }
      }
    }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .icons >>> .el-carousel--horizontal
    height:193px 
  .icons >>> .el-carousel__container
    height:193px
    .icon
        position: relative
        overflow: hidden
        float: left
        width:25%
        height: 0
        padding-bottom:25%
        .icon-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .1rem
            .icon-img-content
                display: block
                margin: 0 auto
                height: 100%
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            text-align: center
            color: $darkTextColor
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
</style>
