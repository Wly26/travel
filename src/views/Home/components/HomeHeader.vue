<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe646;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe602;</span>输入城市/景点/游玩主题</div>
        <!-- <router-link to='/city'> -->
            <div class="header-right">
                <!-- {{this.$store.state.city}} -->
                北京
                <!-- {{this.city}} -->
                <span class="iconfont arrow-icon">&#xe60c;</span>
            </div>
        <!-- </router-link> -->
    </div>
</template>

<script>
export default {
  name:'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    @import '../../../assets/styles/varibles.styl'
    .header
        display: flex
        line-height: .86rem
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
            background: #fff
            border-radius: .1rem
            color: #ccc
        .header-right
            min-width: 1.04rem
            padding: 0 .1rem
            float: right
            text-align: center
            color: #fff
            .arrow-icon
                margin-left: -.04rem
                font-size: .24rem
</style>
