<template>
<div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of homeWeekendList" :key="item.id">
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl"/>
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
        homeWeekendList: [{
            id: '0001',
            imgUrl:'',
            title:'海洋世界',
            desc:'内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1'
        },{
            id: '0002',
            imgUrl:'',
            title:'动物世界',
            desc:'内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2'
        }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    line-height: .4rem
    background-color: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
  .item-img
    width: 100%
  .item-info
    padding: .1rem
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
</style>
