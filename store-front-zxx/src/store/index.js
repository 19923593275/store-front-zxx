import Vue from "vue";
import Vuex from "vuex";
import userLogin from "./modules/login";
import common from "./modules/common";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userLogin,
    common
  }
});
