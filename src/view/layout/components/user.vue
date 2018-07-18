<template>
  <div class="user-avator-dropdown">
    <Dropdown @on-click="handleClick">
      <span style="color: #2d8cf0">{{name}}  </span>
      <Icon style="color: #2d8cf0" type="arrow-down-b" size="12"/>
      <DropdownMenu slot="list">
        <DropdownItem name="center">个人中心</DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {
  name: 'user',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (name) {
      switch (name) {
        case 'logout':
          // this.handleLogOut().then(() => {
          this.$router.push({
            name: 'login'
          })
          // })
          break
      }
    }
  }
}
</script>

<style lang="stylus">
.user
  &-avator-dropdown
    display inline-block
    height 32px
    margin-top 15px
    vertical-align middle
    line-height 10px
    padding 0 15px 0
    &:hover
      cursor pointer
</style>
