import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from '@/store'
import example from '@/features/example/router'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'about'}
    },
    ...example
  ]
})

// 同步store和路由
sync(store, router)

export default router
