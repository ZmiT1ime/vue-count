<template>
  <div>
    <tabbar style="position:fixed">
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
    components: {
      Tabbar,
      TabbarItem,
    }
  }
</script>

<style lang="less">
  .weui-bar__item_on {
    background-color: #eee;
  }
</style>
