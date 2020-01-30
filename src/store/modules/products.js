import allProducts from "@/json/products.json.js"; 

export default {
    state: {
        male: [],
        products: [],
    },
    mutations: {
        updateProducts(state, products) {
            state.products = products;
        },
        malePost(state, male) {
            state.male = male;
        },
    },
    actions: {
        async fetchProducts({commit}) {
            const products = allProducts;
    //   console.log(products);
            commit("updateProducts", products)
        } 
    },
    getters: {
        getAllProducts(state) {
            return state.products
        },
        getAllMale(state) {
            return state.male;

            commit("updateProducts", products);
        }
    },
}