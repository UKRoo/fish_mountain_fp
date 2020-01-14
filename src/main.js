import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'mdbootstrap/js/jquery.js'
// import '@/assets/js/jquery-migrate-3.1.0.min.js' //npm mig install 
// import '@/assets/js/slick.js'
import 'slick-carousel/slick/slick.js'
import 'mdbootstrap/js/popper.js'
import '@/assets/js/slick_carousel.js'

import 'mdbootstrap/js/bootstrap.js'
// import 'mdbootstrap/js/mdb.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
