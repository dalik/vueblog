<template>
    <div>
        <Topbar/> 
        <div class="Container">
            
        </div>
    </div>
</template>

<script>
import { db } from '@/config/db';
import Topbar from '@/components/Topbar.vue'
export default {
    name: 'Detail',
    components: {
        Topbar
    },
    firebase: function() {
        return {
            article: {
                source: db.ref('articles'),
                asObject: true
            }
        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
