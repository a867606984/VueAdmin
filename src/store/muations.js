/**
 * Created by zcr on 2018/5/5.
 */
export default {
  saveMsg(state, msg) {
    state.msg = msg;
  },
  saveRouters(state, arr) {
    state.routers = arr;
  },
  updateLoadingStatus(state, payload) {
    state.isLoading = payload.isLoading
  }
}
