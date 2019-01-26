<template>
    <div class="ArticleList">
        <Article class="Article" v-for="(article, id) in articles" :key="id"
        :title="article.title" :text="article.text" :id="article['.key']"
        />
    </div>
</template>

<script>
import { db } from '../config/db';
import Article from '@/components/Article.vue'
export default {
    name: 'ArticleList',
    firebase: {
        articles: db.ref('articles')
    },
    components: {
        Article
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .ArticleList  
        margin 40px 0

    .Article
        max-width: 700px
        margin auto
        background #fafafa
        padding 20px 30px
        display block
        text-decoration none
        transition all .3s
        margin-bottom 40px

        a  
            display block
            text-decoration none

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
</style>
