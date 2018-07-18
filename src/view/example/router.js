export default [
  {
    path: '/',
    name: 'about',
    component: import(/* webpackChunkName: "example" */'./pages/About.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: import(/* webpackChunkName: "example" */'./pages/Home.vue')
  }
]
