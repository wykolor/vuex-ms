// 引入vue，vuex
import Vue from "vue";
import Vuex from "vuex";

// 注册vuex
Vue.use(Vuex);

// 创建状态 state
const state = {
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || {}
};

// mutation 主要用于操作状态 state
const mutations = {
  SAVE_USERINFO(state, userInfo) {
    // 将用户信息存入本地
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    // 更新state
    state.userInfo = userInfo;
  }
};

// 暴露仓库
export default new Vuex.Store({
  state,
  mutations
});
