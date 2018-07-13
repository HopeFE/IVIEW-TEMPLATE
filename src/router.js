import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from '@/store'
import example from '@/pages/example/router'

Vue.use(Router)

let router = new Router({
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
    ...example
  ]
})

// 同步store和路由
sync(store, router)

export default router
