import Vue from 'vue'
import Router from 'vue-router'
import Detail from '../pages/Detail'

Vue.use(Router)

export default new Router({
    mode: "history",
    base: __dirname,
    routes: [
        {
            name: "detail",
            path: '/detail/:id',
            component: Detail
        }
    ]
})