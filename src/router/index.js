import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import routes from './routes'
import Util from '@/libs/util'

Vue.use(Router)
Vue.use(iView)

const RouterConfig = {
  mode: 'history',
  routes
}

const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  console.log(to, from)
  Util.title(to.meta.title)
  next()
})

router.afterEach(() => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default new Router({
  routes
})
