/**
 *入口JS:创建Vue实例
 */

import Vue from 'vue'
import echarts from 'echarts'
import App from './App.vue'
import VueResource from 'vue-resource'


Vue.use(VueResource)
Vue.prototype.$echarts = echarts;

new Vue({
  el: '#app',
  render: h => h(App),
  // router
});
