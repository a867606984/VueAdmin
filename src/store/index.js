/**
 * Created by zcr on 2018/5/5.
 */
import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions"// 然后给 actions 注册一个事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
import mutations from "./muations"// 更新状态
import getters from "./getters"// 获取状态信息
// 首先声明一个状态 state
const state = {
  msg: '',
  isLoading: false,
  routers: [],
  // modules: {
  //   i18n: vuexI18n.store
  // }
}


Vue.use(Vuex);

// 下面这个相当关键了，所有模块，记住是所有，注册才能使用
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
