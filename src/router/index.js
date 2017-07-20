import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import routes from './routes'
import store from '@/store/index'
import Util from '@/libs/util'

Vue.use(Router)
Vue.use(iView)

const RouterConfig = {
  // mode: 'history',
  routes
}

const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    iView.LoadingBar.start()
    Util.title(to.meta.title)
    next()
  }
})

router.afterEach(() => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
