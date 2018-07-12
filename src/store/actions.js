/**
 * Created by zcr on 2018/5/5.
 */
// 然后给 actions 注册一个事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
export default {
  saveName({ commit }, msg) {
    commit('saveMsg', msg)    // 提交到mutations中处理
  },
  saveRouters({ commit }, arr) {
    return new Promise((resolve, rej) => {
      commit('saveRouters', arr)
      resolve()
    })
  }
}
