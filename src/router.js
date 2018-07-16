import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from '@/store'
import example from '@/pages/example/router'
import errorPage from '@/pages/error-page/router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'Login'}
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "example" */'@/pages/login/login')
    },
    ...example,
    // 必须在最底下
    ...errorPage
  ]
})

// 同步store和路由
sync(store, router)

export default router
