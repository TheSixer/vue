// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import Vuex from 'vuex'
import store from './store/'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css'
// import Loading from './components/loading'
// import Tips from './components/message'
// import Aleter from './components/notification'

Vue.use(Vuex)
Vue.use(iView)
// Vue.use(Loading)
// Vue.use(Tips)
// Vue.use(Aleter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
