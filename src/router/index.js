import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WishList from '../views/WishList'
import Catalog from '../views/Catalog'
import ProductView from '../views/ProductView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: Home
  },
  {
    path: '/wishlist',
    name: 'wishList',
    meta: {layout: 'main'},
    component: () => import('../views/WishList')
  },
  {
    path: '/ct/*/p-:id',
    // name: 'man',
    component: () => import('../views/ProductView')
  },
  {
    path: '/ct/*',
    // name: 'man',
    component: () => import('../views/Catalog'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
