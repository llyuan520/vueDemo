import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/list'
import Detail from '../components/detail'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'list',
            component: List
        },
        {
            path: '/list',
            name: 'list',
            component: List
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail
        }
    ]
})
