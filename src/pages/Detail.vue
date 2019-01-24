<template>
    <div>
        <Topbar/> 
        <div class="Container">
            {{title}}
        </div>
    </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
export default {
    name: 'Homepage',
        components: {

        Topbar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
