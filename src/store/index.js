import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import UsersModule from './modules/usersModule'

Vue.use(Vuex)

const state = {
  memberId: '',
  qiniuToken: null,
  user: {},
  token: null,
  title: ''
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    users: UsersModule
  }
})
