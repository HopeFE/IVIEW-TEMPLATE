or
<template>
  <div class="error403">
    <div class="error403-body-con">
      <Card>
        <div class="error403-body-con-title">4
          <span class="error403-0-span">
            <Icon type="android-lock"/>
          </span>
          <span class="error403-key-span">
            <Icon size="220" type="ios-bolt"/>
          </span>
        </div>
        <p class="error403-body-con-message">You don't have permission</p>
        <div class="error403-btn-con">
          <i-button size="large" style="width: 200px;" type="text" @click="goHome">返回首页</i-button>
          <i-button size="large" style="width: 200px;margin-left: 40px;" type="primary" @click="backPage">返回上一页</i-button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error403',
  metaInfo: {
    title: '403'
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
<style lang="styl">
@import "./403.styl";
</style>
