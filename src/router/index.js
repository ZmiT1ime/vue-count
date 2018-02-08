import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import map from '@/components/map/map'
import personal from '@/components/personal/personal'
import release from '@/components/release/release'
import releaseList from '@/components/releaseList/releaseList'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            component: index,
            meta: {
                keepAlive: false // 不需要被缓存
            }
        },
        {
            path: '/',
            redirect: '/home',
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        {
            path: '/map',
            component: map,
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        {
            path: '/personal',
            component: personal,
            meta: {
                keepAlive: true // 需要被缓存
            }
        },
        {
            path: '/release',
            component: release,
            meta: {
                keepAlive: false // 不需要被缓存
            }
        },
        {
            path: '/releaseList',
            component: releaseList,
            meta: {
                keepAlive: false // 不需要被缓存
            }
        }
    ]
})
