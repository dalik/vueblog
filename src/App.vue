<template>
    <div id="app">
        <Topbar/> 
        <ArticleList/>
    </div>
</template>

<script>
import Topbar from './components/Topbar.vue'
import ArticleList from './components/ArticleList.vue'

export default {
    name: 'app',
    components: {
        ArticleList,
        Topbar
    }
}
</script>

<style lang="stylus">
    *  
        margin 0
        padding 0
        box-sizing border-box

    body 
        font-size 16px
        font-family Arial
        background #ffffff

    .Container
        margin auto  
        max-width 1050px
        padding 0 20px
</style>
