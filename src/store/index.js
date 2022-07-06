import Vue from "vue";
import Vuex from "vuex";
import { getLocal, setLocal } from "@/utils/storage";

Vue.use(Vuex);
const tokenKey = "toutiao";

export default new Vuex.Store({
  state: {
    // user: JSON.parse(localStorage.getItem(tokenKey)),
    user: getLocal(tokenKey),
  },
  getters: {},
  // 修改状态的唯一入口
  // 只允许有同步状态
  mutations: {
    // 修改state里面的user数据的方法
    setUser(state, user) {
      // 存储到vuex中
      state.user = user;
      // 存储到本地存储
      // localStorage.setItem(tokenKey, JSON.stringify(user));
      setLocal(tokenKey, user);
    },
  },
  actions: {},
  modules: {},
});
