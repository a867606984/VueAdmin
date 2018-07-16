// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
// import { Menu, Submenu, MenuItem, MenuItemGroup } from "element-ui";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import store from './store/index'
import Api from './api/index'//ajax组件
import { getToken, setToken, removeToken } from './utils/auth'
import routers from './utils/routers'

import 'vue-awesome/icons/flag'
import 'vue-awesome/icons/arrow-circle-right'
import 'vue-awesome/icons/adjust'
import 'vue-awesome/icons/cogs'
import 'vue-awesome/icons/address-card'
import 'vue-awesome/icons/unlock'
import Icon from "vue-awesome/components/Icon";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faCoffee)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('icon', Icon)
Vue.use(Api)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false


// store.dispatch("saveRouters", routers).then(() => {
//   router.addRoutes(store.getters.showRouters)

// }).catch(err => {
//   console.log(err);
// })
router.beforeEach((to, from, next) => {
  if (!!to.meta.title) {
    document.title = to.meta.title
  }

  if (getToken()) {
    // console.log(2)
    // removeToken();
    if (to.path == '/login') {

      next();
    } else {
      if (store.getters.showRouters.length == 0) {
        store.dispatch("saveRouters", routers).then(() => {
          router.addRoutes(store.getters.showRouters)
          next('/');
        }).catch(err => {
          console.log(err);
        })
      } else {
        next();
      }

    }

  } else {
    if (to.path == "/login") {
      setToken('sssss')
      next()
    } else {
      next('/login')
    }
  }

})
Vue.prototype.$loadingShow = function (loadingText) {
  this.$loading({
    body: true,
    text: loadingText,
    background: "rgba(0, 0, 0, .8 )"
  });

}
Vue.prototype.$loadingHide = function () {
  this.$loading().close();
}
Vue.prototype.$alertShow = function (msg) {
  this.$alert(msg, '', {
    confirmButtonText: '确定',
  });

}

Vue.prototype.$Post = function (url, params, success, failure, isShowLoding, loadingText) {
  let _this = this;
  if (isShowLoding) {
    _this.$loadingShow(loadingText);
  }
  _this.$http.post(url, params, res => {
    if (isShowLoding) {
      _this.$loadingHide();
    }
    success(res);
  }, err => {
    if (isShowLoding) {
      _this.$loadingHide();
    }
    failure(err)
  })
}


/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
