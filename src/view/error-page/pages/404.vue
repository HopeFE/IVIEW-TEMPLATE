
<template>
  <div class="error404">
    <div class="error404-body-con">
      <Card>
        <div class="error404-body-con-title">4<span><Icon type="ios-navigate-outline"/></span>4</div>
        <p class="error404-body-con-message">YOU&nbsp;&nbsp;LOOK&nbsp;&nbsp;LOST</p>
        <div class="error404-btn-con">
          <i-button size="large" style="width: 200px;" type="text" @click="goHome">返回首页</i-button>
          <i-button size="large" style="width: 200px;margin-left: 40px;" type="primary" @click="backPage">返回上一页</i-button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  metaInfo: {
    title: '404'
  },
  methods: {
    backPage () {
      this.$router.go(-1)
    },
    goHome () {
      this.$router.push({
        name: 'home_index'
      })
    }
  }
}
</script>
<style lang="stylus">
@import "./404.styl";
</style>
