import Vue from 'vue'
import Vuex from 'vuex'
import products from "./modules/products";
import sizes from "./modules/sizes";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    sizes,
  }
})
