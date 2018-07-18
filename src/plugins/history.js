exports.sync = function (store, router, options) {
  const moduleName = (options || {}).moduleName || 'history'

  store.registerModule(moduleName, {
    namespaced: true,
    state: cloneRoute(router.currentRoute),
    mutations: {
      'ROUTE_CHANGED' (state, transition) {
        store.state[moduleName] = cloneRoute(transition.to, transition.from)
      }
    }
  })

  // let isTimeTraveling = false

  // sync store on router navigation
  // const afterEachUnHook = router.afterEach((to, from) => {
  //   if (isTimeTraveling) {
  //     isTimeTraveling = false
  //     return
  //   }
  //   store.commit(moduleName + '/ROUTE_CHANGED', { to, from })
  // })
}

function cloneRoute (to, from) {
  const clone = {
    name: to.name,
    path: to.path,
    hash: to.hash,
    query: to.query,
    params: to.params,
    fullPath: to.fullPath,
    meta: to.meta
  }
  if (from) {
    clone.from = cloneRoute(from)
  }
  return Object.freeze(clone)
}
