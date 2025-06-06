import { createStore } from "vuex";
import { auth } from "../utils/firebase";
export default createStore({
  state: {
    user: undefined,
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    reloadUserName({ commit }) {
      auth.onAuthStateChanged((user) => {
        commit("setUser", { ...user });
      });
    },
  },
  modules: {},
});
