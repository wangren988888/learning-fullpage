import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
import './comm.scss'

Vue.use(VueFullPage)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
