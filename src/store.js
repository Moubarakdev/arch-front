import Vuex from "vuex";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("accessToken") || null,
    user: localStorage.getItem("user") || null,
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
    removeToken(state) {
      state.token = null;
    },
    removeUser(state) {
      state.user = null;
    },
  },
  actions: {
    login(context, credential) {
      return new Promise((resolve, reject) => {
        axios
          .post("/login", {
            email: credential.email,
            password: credential.password,
          })
          .then((res) => {
            const data = res.data.data;
            localStorage.setItem("accessToken", data.access_token);
            localStorage.setItem("user", data);

            context.commit("setToken", data.access_token);
            context.commit("setUser", data);

            resolve(res.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    register(context, credential) {
      return new Promise((resolve, reject) => {
        axios
          .post("/register", {
            name: credential.name,
            email: credential.email,
            password: credential.password,
            password_confirmation: credential.password_confirmation,
          })
          .then((res) => {
            const data = res.data.data;
            resolve(res.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    logout(context) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + context.state.token;
      return new Promise((resolve, reject) => {
        axios
          .post("/logout")
          .then((res) => {
            localStorage.removeItem("accessToken");
            context.commit("removeToken");
            context.commit("removeUser");
            resolve(res.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  modules: {},
});
