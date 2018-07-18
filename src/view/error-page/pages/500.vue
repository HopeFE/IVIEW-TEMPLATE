
<template>
  <div class="error500">
    <div class="error500-body-con">
      <Card>
        <div class="error500-body-con-title">
          5<span class="error500-0-span"><Icon type="social-freebsd-devil"/></span><span class="error500-0-span"><Icon type="social-freebsd-devil"/></span>
        </div>
        <p class="error500-body-con-message">Oops! the server is wrong</p>
        <div class="error500-btn-con">
          <i-button size="large" style="width: 200px;" type="text" @click="goHome">返回首页</i-button>
          <i-button size="large" style="width: 200px;margin-left: 40px;" type="primary" @click="backPage">返回上一页</i-button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error500',
  metaInfo: {
    title: '500'
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
@import "./500.styl";
</style>
