import Vue from 'vue'
import iView from 'iview'
import App from './app.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import './plugins/lazyload' // 图片懒加载配置

Vue.config.productionTip = false

// Meta自设置
Vue.use(VueMeta)
// iView引入
Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
