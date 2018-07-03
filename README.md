# IVIEW-TEMPLATE
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 使用前必读
`屏幕适配 >= 1366px`

## 准备
```
安装Node.js > 8
安装yarn
全局安装vue-cli3.0
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### 推荐工具

- [VSCODE](https://code.visualstudio.com/)

- [Vetur - Vue tooling for VS Code](https://vuejs.github.io/vetur/)

- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### JS风格指南

- [JavaScript Standard Style](https://standardjs.com/rules-zhcn.html)

### Vue风格指南

- [style-guide](https://youzan.github.io/vant/#/zh-CN/style-guide)

- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue/tree/master/docs/rules)

## 功能

### 配置优化

### 插件集成

- 图片懒加载[Vue-lazyload](https://github.com/hilongjw/vue-lazyload)

- Meta Title设置[Vue-Meta](https://github.com/declandewet/vue-meta)

- Vuex数据离线化[vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate)

## Main Javascript Framework

-	[Vue](http://cn.vuejs.org/guide/)

-	[Vue-router](http://router.vuejs.org/zh-cn/index.html)

-	[Vuex](http://vuex.vuejs.org/zh-cn/index.html)

-	[Axios - Http Client](https://github.com/mzabriskie/axios)

-	[Vuex-Router-Sync - Keep vue-router and vuex store in sync](https://github.com/vuejs/vuex-router-sync)

## UI Compoents

-	[iView - Vue UI Components](https://www.iviewui.com)

## Plugins

-	[Vue-lazyload - An Image lazyload plugin for Vue](https://github.com/hilongjw/vue-lazyload)

## File Structure Introduction

```
├── public      # Dist Folder
├── app.vue     # Entry File
├── public
  ├── index.html  # Html Template
├── src           # Code Folder
  ├── assets      # 资源
  ├── components  # 组件
  ├── features    # 功能模块
    ├── modules       # vuex
    ├── pages         # view
    ├── router.js     # 子路由
  ├── router      # 主路由
  ├── store.js    # Vuex Main Stroe
  ├── main.js     # Entry Js
```

### 开始

## Install
```
npm/yarn install
npm/yarn run serve
open http://localhost:8088
```

### Build
```
npm/yarn run build
npm/yarn run build --report 查看打包JS大小
open Files in DistT Folder
```

## 高级进阶

- [Vue CLI3.0](https://cli.vuejs.org)
