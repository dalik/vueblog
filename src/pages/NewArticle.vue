<template>
    <div>
        <div class="Container">
            <form v-on:submit.prevent="add">
                <label for="">
                    Titulek:

                    <input type="text" v-model="article.title">
                </label>

                <label for="">Text: 
                    <textarea name="" id="" cols="30" rows="10" v-model="article.text"></textarea>
                </label>

                <button type="submit">Přidat</button>
            </form>
            
        </div>
    </div>
</template>

<script>
import { db } from '../config/db';
export default {
    name: 'NewArticle',
    data () {
        return {
            article: {
                title: '',
                text: ''
            }
        }
    },
    methods: {
        add() {
            db.collection('articles').add(this.article).then(this.$router.push({ name: "homepage"}))
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    label  
        display block
        margin-top 40px
        color #66647c
        font-size 14px
        line-height 1.5

    input,textarea 
        padding: 20px
        display block
        border 0
        background #f0f3f6
        width 100%

        &:focus
            border-bottom 1px solid #000
            outline none

    button
        background #00cec9
        border 0
        color #ffffff
        text-align center
        padding 15px 30px
        margin-top 20px
        cursor pointer

</style>
