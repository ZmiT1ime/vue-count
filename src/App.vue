<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>

        <tabbar style="position:fixed;background-color: #fff;" v-show="$route.path == '/home' || $route.path == '/map' || $route.path == '/explore' || $route.path == '/me'">
            <tabbar-item selected link="/">
                <i class="nav-icon icon-home" slot="icon"></i>
                <span slot="label">home</span>
            </tabbar-item>
            <tabbar-item link="/map">
                <i class="nav-icon icon-folder-open" slot="icon"></i>
                <span slot="label">Message</span>
            </tabbar-item>
            <tabbar-item link="/">
                <i class="nav-icon icon-stats-bars" slot="icon"></i>
                <span slot="label">userInfo</span>
            </tabbar-item>
            <tabbar-item>
                <i class="nav-icon icon-stack" slot="icon"></i>
                <span slot="label">News</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vux'
    export default {
        name: 'App',
        components: {
            Tabbar,
            TabbarItem,
        }
    }
</script>

<style>
    @import "assets/css/reset.css";
    @import "assets/css/icon.css";
    #app{
        max-width: 640px;
        min-width: 320px;
        margin: 0 auto;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }
    .weui-bar__item_on {
        background-color: #eee;
    }
</style>
