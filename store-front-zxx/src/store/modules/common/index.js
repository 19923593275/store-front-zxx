export default {
  namespaced: true,
  state: {
    network: true
  },
  mutations: {
    setNetWork(state, b) {
      state.network = b;
    }
  },
  actions: {
    setNetWork({ commit }, b) {
      commit("setNetWork", b);
    }
  }
};
