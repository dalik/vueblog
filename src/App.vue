<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view :key="$route.params.url"></router-view>
        </transition>
    </div>
</template>

<script>


export default {
    name: 'app',

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

    
    .fade-enter-active, .fade-leave-active 
        transition: opacity .2s, top 0.2s;

    .fade-enter
        top 50px  
        opacity 0  

    .fade-leave-to 
        opacity 0
</style>
