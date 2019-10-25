export default {
  namespaced: true,
  state: {
    token: null
  },
  mutations: {
    setLoginState(state, token) {
      //更改token
      state.token = token;
    }
  },
  actions: {
    loginState({ commit }, { token }) {
      commit("setLoginState", token);
    }
  }
};
