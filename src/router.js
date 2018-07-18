import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import iView from 'iview'
import store from '@/store'
import history from '@/plugins/history.js'
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
      redirect: { name: 'home' },
      children: [
        ...example
      ]
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '登录'
      },
      component: () => import(/* webpackChunkName: "login" */'@/view/login/login')
    },
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
// 鲈路由历史同步
history(store, router)

export default router
