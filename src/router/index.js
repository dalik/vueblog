import Vue from 'vue'
import Router from 'vue-router'
import Detail from '../pages/Detail'
import Homepage from '../pages/Homepage'
import NewArticle from '../pages/NewArticle'

Vue.use(Router)

export default new Router({
    mode: "history",
    base: __dirname,
    routes: [
        {
            name: "detail",
            path: '/detail/:id',
            component: Detail
        },
        {
            name: "homepage",
            path: '/',
            component: Homepage
        },
        {
            name: "newArticle",
            path: '/new',
            component: NewArticle
        }
    ]
})