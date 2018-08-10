import Vue from 'vue'
import { Lazyload } from 'vant'

// 图片异步加载
Vue.use(Lazyload, {
  loading: 'https://ymm.oss-cn-hangzhou.aliyuncs.com/ymmfile/bbs-biz/4cd5fa86-160d-409e-ad67-faa1c591e4ba',
  error: 'https://ymm.oss-cn-hangzhou.aliyuncs.com/ymmfile/bbs-biz/2971def3-083d-48a4-ada5-f54070e9e857',
  attempt: 1,
  filter: {
    webp (listener, options) {
      // 是否支持webp
      if (!options.supportWebp) return
      // 是否有域名
      if (listener.src.indexOf('http') === -1) {
        listener.src = `http://yundada56.oss-cn-shanghai.aliyuncs.com/${listener.src}`
      }
      // 判读是否有OSS图片处理
      if (listener.src.indexOf('x-oss-process=image') > -1) {
        listener.src += '/format,webp'
      } else {
        listener.src += '?x-oss-process=image/format,webp'
      }
    }
  }
})
