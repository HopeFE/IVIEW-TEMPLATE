import _ from 'lodash'
/** 获取当前页面打开历史 */
export default (store, router, options) => {
  const moduleName = (options || {}).moduleName || 'history'
  store.registerModule(moduleName, {
    namespaced: true,
    state: [],
    mutations: {
      'ROUTE_CHANGED' (state, transition) {
        let route = cloneRoute(transition.to, transition.from)
        let index = _.findIndex(store.state[moduleName], route)
        if (index >= 0) {
          store.state[moduleName].splice(index, 1)
        }
        store.state[moduleName].push(route)
      }
    }
  })

  router.afterEach((to, from) => {
    store.commit(moduleName + '/ROUTE_CHANGED', { to, from })
  })
}

function cloneRoute (to) {
  const clone = {
    name: to.name,
    path: to.path,
    hash: to.hash,
    query: to.query,
    params: to.params,
    fullPath: to.fullPath,
    meta: to.meta
  }
  return Object.freeze(clone)
}
