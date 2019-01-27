<template>
    <router-link :to="{ name: 'detail',params: {id: id}}">
        <h2 class="Article-title">{{title}}</h2>
        <p class="Article-text">
            {{text}}
        </p>
    </router-link>
</template>

<script>
export default {
    name: 'Article',
    props: {
        title: {
            type: String,
        },
        text: {
            type: String,
        },
        id: {
            type: String,
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .Article  
        max-width: 700px
        margin auto
        background #fafafa
        padding 20px 30px
        display block
        text-decoration none
        transition all .3s
        margin-bottom 40px
        max-height 200px
        overflow hidden

        &:hover  
            box-shadow 0 0.5rem 1.5rem rgba(36,35,49,.1)
            transform translateY(2px)

        &-title 
            color #3e3d4c
            margin-bottom 10px
            transition all .3s

            .Article:hover & 
                color #d63031

        &-text  
            color #66647c
            font-size 14px
            line-height 1.5
            overflow hidden
            max-height 100px
</style>
