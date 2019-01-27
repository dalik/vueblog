<template>
    <div>
        <div v-if="loaded">
            <div class="ArticleList">
                <Article class="Article" v-for="article in articles" :key="article.id"
                :title="article.item.title" :text="article.item.text" :id="article.id"
                />

                <a href="#" v-if="pagiEnd" class="Button" @click.prevent="loadMore()">Load more</a>
            </div>
        </div>
        <div v-else>
            <h1>Loading...</h1>
        </div>
    </div>
    
</template>

<script>
import {db} from '@/config/db';
import Article from '@/components/Article'
export default {
    name: 'ArticleList',
    components: {
        Article
    },
    data() {
        return {
            articles: [],
            loaded: false,
            lastVisible: '',
            pagiEnd: true
        }
    },
    created() {
        db.collection('articles').orderBy("text").limit(3).get().then(querySnapshot => {
        const items = []
        querySnapshot.forEach(doc => {
            items.push({
                item: doc.data(),
                id: doc.id
            })
        })
        this.lastVisible = querySnapshot.docs[querySnapshot.size - 1]
        this.articles = items
        this.loaded = true
      })
    },
    methods: {
        loadMore() {
           db.collection('articles').orderBy("text").startAfter(this.lastVisible).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.articles.push({
                        item: doc.data(),
                        id: doc.id
                    })
                })

                this.pagiEnd = false
            }) 
        }
    }

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

    .Button  
        background #00cec9
        border 0
        color #ffffff
        text-align center
        padding 15px 30px
        margin-top 20px
        cursor pointer
        text-decoration none
        margin auto
        display table
</style>
