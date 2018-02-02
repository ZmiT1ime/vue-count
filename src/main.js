// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import {WechatPlugin, AjaxPlugin, LoadingPlugin, ToastPlugin, AlertPlugin} from 'vux'
import echarts from 'echarts'

Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

Vue.config.productionTip = false;

Vue.prototype.$echarts = echarts;

/**
 *  点击延迟
 */
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
