export default [
  {
    path: '/403',
    name: 'Error403',
    meta: {
      title: '403'
    },
    component: () => import(/* webpackChunkName: "ErrorPage" */'./pages/403.vue')
  },
  {
    path: '/500',
    name: 'Error500',
    meta: {
      title: '403'
    },
    component: () => import(/* webpackChunkName: "ErrorPage" */'./pages/500.vue')
  },
  {
    path: '/*',
    name: 'Error404',
    meta: {
      title: '404'
    },
    component: () => import(/* webpackChunkName: "ErrorPage" */'./pages/404.vue')
  }
]
