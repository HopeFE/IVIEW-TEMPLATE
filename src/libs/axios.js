import axios from 'axios'
import { Toast } from 'vant'

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withCredentials = true

switch (process.env.NODE_ENV) {
  case 'development':
    axios.defaults.baseURL = '/'; break
  case 'quality':
    axios.defaults.baseURL = 'https://hn.algolia.com/api/v1/'; break
  case 'production':
    axios.defaults.baseURL = 'https://hn.algolia.com/api/v1/'; break
}

// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = JSON.stringify(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// code状态码200判断
axios.interceptors.response.use((res) => {
//   if (res.data.code !== 20000) {
//     return Promise.reject(res)
//   }
  return res
}, (error) => {
  if (error.message.indexOf('timeout') !== -1) {
    Toast.fail({
      position: 'center',
      forbidClick: true,
      message: '接口超时'
    })
  }
  return Promise.reject(error)
})

export default axios
