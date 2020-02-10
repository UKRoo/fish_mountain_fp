import allSizes from "@/json/sizes.json.js";

export default {
  state: {
    sizes: []
  },
  mutations: {
    updateSizes(state, sizes) {
      state.sizes = sizes;
    }
  },
  actions: {
    async fetchSizes({ commit }) {
      const sizes = allSizes;
      commit("updateSizes", sizes);
    }
  },
  getters: {
    getAllSizes(state) {
      return state.sizes;
    },
  }
};
