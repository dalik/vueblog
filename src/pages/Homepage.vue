<template>
    <div>
        <Topbar/> 
        <ArticleList/>
    </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import ArticleList from '@/components/ArticleList'
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
