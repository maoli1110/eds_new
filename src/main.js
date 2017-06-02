// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import echarts from 'echarts/dist/echarts.min.js'
import 'echarts/dist/echarts.min'
import VueResource from 'vue-resource';

//import china from './api/china.js'
//import './api/china.js'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(echarts)
Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
