import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'


Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
