module.exports = {
  baseUrl: './',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: true,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    progress: true,
    inline: true,
    proxy: {
      '/': {
        target: 'https://hn.algolia.com/api/v1/',
        ws: false,
        changOrigin: true
      }
    }
  },
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'iview': 'iview'
    }
  }
}
