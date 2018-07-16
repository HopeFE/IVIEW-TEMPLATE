
<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="log-in"/>
          欢迎登录
        </p>
        <div class="form-con">
          <i-form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="userName">
              <i-input v-model="form.userName" placeholder="请输入用户名">
                <span slot="prepend">
                  <Icon :size="16" type="person"/>
                </span>
              </i-input>
            </FormItem>
            <FormItem prop="password">
              <i-input v-model="form.password" type="password" placeholder="请输入密码">
                <span slot="prepend">
                  <Icon :size="14" type="locked"/>
                </span>
              </i-input>
            </FormItem>
            <FormItem>
              <i-button type="primary" long @click="handleSubmit">登录</i-button>
            </FormItem>
          </i-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$router.push({
            name: 'home_index'
          })
        }
      })
    }
  }
}
</script>

<style lang="stylus">
  @import "./login.styl";
</style>
