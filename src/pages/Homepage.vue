<template>
    <div>
        <Topbar/> 
        <ArticleList/>
    </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import ArticleList from '@/components/ArticleList.vue'
export default {
    name: 'Homepage',
    components: {
        ArticleList,
        Topbar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
