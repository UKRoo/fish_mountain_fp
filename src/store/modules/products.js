import allProducts from "@/json/products.json.js";

export default {
  state: {
    products: []
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
    malePost(state, male) {
      state.male = male;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const products = allProducts;
      commit("updateProducts", products);
    }
  },
  getters: {
    getAllProducts(state) {
      return state.products;
    },
    getMale(state) {
      return state.products.filter(product => product.gender === "male")
    },
    getFemale(state) {
      return state.products.filter(product => product.gender === "female")
    },
    getWishlist(state) {
      return state.products.filter(product => product.wishlist)
    },
    getCart(state) {
      return state.products.filter(product => product.cart)
    },
  }
};
