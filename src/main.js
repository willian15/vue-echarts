/**
 *入口JS:创建Vue实例
 */

import Vue from 'vue'
import echarts from 'echarts'
import App from './App.vue'
import VueResource from 'vue-resource'
import XLSX from 'xlsx/dist/xlsx.full.min'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element);
Vue.use(VueResource);
Vue.prototype.$echarts = echarts;

new Vue({
  el: '#app',
  render: h => h(App),
  // router
});
