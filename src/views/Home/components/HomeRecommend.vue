<template>
  <div>
      <div class="title">热销推荐</div>
      <ul>
          <li class="item border-bottom" v-for="item of list" :key="item.id" >
              <img class="item-img" :src="item.imgUrl"/>
              <div class="item-info">
                  <p class="item-title">{{item.title}}</p>
                  <p class="item-desc">{{item.desc}}</p>
                  <button class="item-button">查看详情</button>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
    export default {
      name: "HomeRecommend",
      props: {
        list: Array
      },
      // data() {
      //   return {
      //       recommendList: [{
      //           id: '0001',
      //           imgUrl:'',
      //           title:'海洋世界',
      //           desc:'内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1'
      //       },{
      //           id: '0002',
      //           imgUrl:'',
      //           title:'动物世界',
      //           desc:'内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2'
      //       }]
      //   }
      // }
    }
</script>

<style lang="stylus" scoped>
  .title
    margin-top: .2rem
    line-height: .4rem
    background-color: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      .item-desc
        line-height: .4rem
        color: #ccc
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background-color: #ff9300
        padding: 0 .1rem
        border-radius: .06rem
</style>
