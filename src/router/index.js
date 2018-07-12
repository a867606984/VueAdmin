import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const routes = [
  // {
  //   path: '/',
  //   redirect: '/appMenu/home',
  //   component: () => import("@/view/appMenu"),
  // },
  // {
  //   path: '/appMenu',
  //   redirect: '/appMenu/home',
  //   component: () => import("@/view/appMenu"),
  //   children: [
  //     {
  //       path: '/appMenu/home',
  //       name: 'home',
  //       redirect: '/appMenu/home/unionPay',
  //       component: () => import("@/view/home/index"),
  //       children: [
  //         { path: 'unionPay', component: () => import("@/view/home/unionPay"), meta: { break: ["银行账单"] } },
  //         { path: 'pos', component: () => import("@/view/home/pos"), meta: { break: [" POS账单", "选项1"] } },
  //         { path: 'diff', component: () => import("@/view/home/diff"), meta: { break: ["金额不一致"] } }
  //       ]
  //     },
  //     {
  //       path: '/appMenu/platform',
  //       component: () => import("@/view/platform/index")
  //     },
  //     {
  //       path: '/appMenu/order',
  //       redirect: '/appMenu/order/unionPay',
  //       component: () => import("@/view/order/index"),
  //       children: [
  //         { path: 'unionPay', component: () => import("@/view/order/unionPay") },
  //         { path: 'pos', component: () => import("@/view/order/pos") },
  //         { path: 'diff', component: () => import("@/view/order/diff") }
  //       ]
  //     }
  //   ]
  // },

  {
    path: '/login',
    name: 'login',
    component: () => import("@/view/login/login")
  }
]


export default new Router({
  routes
})  
