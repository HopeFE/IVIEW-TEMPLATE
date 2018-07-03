export default [
  {
    path: '/',
    name: 'about',
    component: ('About', () => import(/* webpackChunkName: "example" */'./pages/About.vue'))
  },
  {
    path: '/home',
    name: 'home',
    component: ('Home', () => import(/* webpackChunkName: "example" */'./pages/Home.vue'))
  }
]
