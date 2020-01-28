import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'mdbootstrap/js/jquery.js'
// import '@/assets/js/jquery-migrate-3.1.0.min.js' //npm mig install 
import 'slick-carousel/slick/slick.js'
import 'mdbootstrap/js/popper.js'
// import '@/assets/js/slick_carousel.js'
import 'mdbootstrap/js/bootstrap.js'
// import 'mdbootstrap/js/mdb.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false


firebase.initializeApp({
  apiKey: "AIzaSyCMrwj7sh_Hj86VFTmQ8D7t1GG8U9Lz1eM",
  authDomain: "fish-mountain.firebaseapp.com",
  databaseURL: "https://fish-mountain.firebaseio.com",
  projectId: "fish-mountain",
  storageBucket: "fish-mountain.appspot.com",
  messagingSenderId: "791319680667",
  appId: "1:791319680667:web:1c746b8565ab6678f4d83e",
  measurementId: "G-F9CJXD5VHV"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


