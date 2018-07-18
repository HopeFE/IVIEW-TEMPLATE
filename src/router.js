import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import iView from 'iview'
import store from '@/store'
import layout from '@/view/layout/index'
import example from '@/view/example/router'
import errorPage from '@/view/error-page/router'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: layout,
      meta: {
        title: '登录'
      },
      children: []
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '登录'
      },
      component: () => import(/* webpackChunkName: "example" */'@/view/login/login')
    },
    ...example,
    // 必须在最底下
    ...errorPage
  ]
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

// 同步store和路由
sync(store, router)

export default router
