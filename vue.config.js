module.exports = {
  baseUrl: './',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: true,
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'iview': 'iview'
    }
  }
}
