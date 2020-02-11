import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WishList from '../views/WishList'
import Catalog from '../views/Catalog'
import ProductView from '../views/ProductView'
import Page404 from '../views/Page404.vue'


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
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {layout: 'main'},
    component: () => import('../views/Cart')
  },
  {
    path: '/delivery',
    name: 'delivery',
    meta: {layout: 'Delivery'},
    component: () => import('../views/Delivery')
},
  {
    path: '/ct/*/p-0',
    component: Page404
  },
  {
    path: '/ct/*/p-:id',
    component: () => import('../views/ProductView')
  },
  {
    path: '/ct/sale/',
    component: Page404
  },
  {
    path: '/ct/kids/',
    component: Page404
  },
  {
    path: '/ct/*',
    component: () => import('../views/Catalog'),
  },
  {
    path: '*',
    name: 'Page404',
    component: Page404
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
    },
  base: process.env.BASE_URL,
  routes
})

export default router
