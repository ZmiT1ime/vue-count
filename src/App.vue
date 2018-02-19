<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <keep-alive v-if="$route.meta.keepAlive">
                <router-view></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>

        <tabbar style="position:fixed;background-color: #fff;" v-show="$route.path == '/home' || $route.path == '/map' || $route.path == '/personal'">
            <tabbar-item :selected="$route.path === '/home'"
                         link="/home">
                <i class="nav-icon icon-home" slot="icon"></i>
                <span slot="label">萌宠馆</span>
            </tabbar-item>
            <tabbar-item :selected="$route.path === '/map'"
                         link="/map">
                <i class="nav-icon icon-folder-open" slot="icon"></i>
                <span slot="label">萌宠分类</span>
            </tabbar-item>
            <tabbar-item :selected="$route.path === '/personal'"
                          link="/personal">
                <i class="nav-icon icon-user" slot="icon"></i>
                <span slot="label">我的萌宠</span>
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
    body {
        background-color:#f2f2f2;
        height: 100%;

    }
    .weui-tabbar,
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
    .weui-cells{
        margin-top: 10px !important;
        font-size: 14px !important;
    }
</style>
