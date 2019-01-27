<template>
    <div>
        <Topbar/> 
        <div class="Container">
            <div v-if="loaded">
                <h1>{{title}}</h1>
                <p>{{text}}</p>
            </div>
            <div v-else>
                <h1>Loading...</h1>
            </div>
        </div>
    </div>
</template>

<script>
import {db} from '@/config/db';
import Topbar from '@/components/Topbar'
export default {
    name: 'Detail',
    components: {
        Topbar
    },
    data() {
        return {
            title: '',
            text: '',
            loaded: false,
        }
    },
    created () {
        db.collection('articles').get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                if (doc.id == this.$route.params.id) {
                    const { title, text } = doc.data()
                    this.title = title
                    this.text = text
                }
            })
            this.loaded = true
        })
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    h1 
        margin-top 20px
    p
        color #66647c
        font-size 14px
        line-height 1.5
        margin-top 20px
</style>
