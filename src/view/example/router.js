
export default [
  {
    path: 'about',
    name: 'about',
    meta: {
      title: '关于'
    },
    component: () => import(/* webpackChunkName: "example" */'./pages/about')
  },
  {
    path: 'home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import(/* webpackChunkName: "example" */'./pages/home')
  }
]
