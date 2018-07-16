import Vue from 'vue'
import iView from 'iview'
import App from './app.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
// 图片异步加载
Vue.use(VueLazyload, {
  loading: 'https://ymm.oss-cn-hangzhou.aliyuncs.com/ymmfile/bbs-biz/4cd5fa86-160d-409e-ad67-faa1c591e4ba',
  error: 'https://ymm.oss-cn-hangzhou.aliyuncs.com/ymmfile/bbs-biz/2971def3-083d-48a4-ada5-f54070e9e857',
  attempt: 2
})

Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
