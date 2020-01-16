import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Man from '../views/ManProduct.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/man',
    name: 'man',
    component: Man
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
