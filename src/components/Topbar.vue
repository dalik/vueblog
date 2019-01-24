<template>
    <div class="Topbar">
        <div class="Container">
            <div class="Topbar-inner">
                <h1 class="Topbar-title">Vue blog boilerplate</h1>

            <a href="" class="Topbar-addButton">+</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Topbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .Topbar  
        background #0984e3
        padding 20px

        &-inner  
            display flex
            align-items center
            justify-content space-between

        &-title
            color #ffffff

        &-addButton  
            background #00cec9
            border 0
            width 50px
            height 50px
            color #ffffff
            font-weight 700
            font-size 30px
            text-align center
            text-decoration none
            line-height 50px
</style>
