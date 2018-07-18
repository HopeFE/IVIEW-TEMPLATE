<template>
  <div class="header-bar">
    <a :class="['sider-trigger-a', collapsed ? 'collapsed' : '']"  type="text" @click="handleChange">
      <Icon type="navicon-round" size="26"/>
    </a>
    <div class="header-bar-bread-crumb">
      <Breadcrumb>
        <BreadcrumbItem @click.native="$route.push({name: 'index'})">首页</BreadcrumbItem>
        <BreadcrumbItem v-for="item in breadcrumbList" :key="item.name" @click.native="$route.push({name: item.name})">
          {{item.title}}
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerBar',
  props: {
    collapsed: {
      type: Boolean,
      default: true
    },
    breadcrumbList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleChange () {
      this.$emit('on-change', !this.collapsed)
    }
  }
}
</script>
<style lang="stylus">
.sider-trigger-a
  padding: 6px
  width: 40px
  height: 40px
  display inline-block
  text-align center
  color #5c6b77
  margin-top 12px
  float left
  i
    transition transform .2s ease
    vertical-align top
  &.collapsed i
    transform rotateZ(90deg)
    transition transform .2s ease
.header-bar
  width 100%
  height 100%
  position relative
  text-align left
  &-bread-crumb
    padding-left 20px
    width 350px
    display inline-block
    float left
  &-content-con
    float right
    height auto
</style>
