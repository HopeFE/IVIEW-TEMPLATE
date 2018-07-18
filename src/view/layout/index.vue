<template>
  <Layout class="container">
    <Sider v-model="collapsed" :collapsed-width="64" hide-trigger collapsible>
      <sideBar/>
    </Sider>
    <Layout>
      <Header class="header-con">
        <header-bar :collapsed="collapsed" :name="name" @on-coll-change="handleCollapsedChange"/>
      </Header>
      <Content>
        <Layout>
          <div class="tag-nav-wrapper">123</div>
          <Content>
            <keep-alive>
              <router-view/>
            </keep-alive>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import headerBar from './components/header'
import sideBar from './components/side-bar'

export default {
  components: {
    headerBar, sideBar
  },
  data () {
    return {
      collapsed: false,
      name: '我勒个擦'
    }
  },
  methods: {
    handleCollapsedChange (state) {
      this.collapsed = state
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 100vh
  .logo-con
    height 64px
    padding 10px
    img
      height 44px
      width auto
      display block
      margin 0 auto
  .header-con
    background #fff
    padding 0 10px
  .tag-nav-wrapper
    padding 0
    height40px
    background#F0F0F0
    overflow hidden
</style>
