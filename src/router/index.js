import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import map from '@/components/map/map'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: index
        }, {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/map',
            component: map
        },
    ]
})
