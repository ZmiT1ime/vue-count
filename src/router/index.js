import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import map from '@/components/map/map'
import personal from '@/components/personal/personal'
import release from '@/components/release/release'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            component: index
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/map',
            component: map
        },
        {
            path: '/personal',
            component: personal
        },
        {
            path: '/release',
            component: release
        }
    ]
})
