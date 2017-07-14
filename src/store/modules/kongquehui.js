import {login} from '@/api/service'
import {SETUSER} from '@/store/mutation-types'

export default {
  state: {

  },
  mutations: {
    [SETUSER] (state, {currentUser, token}) {
      // 在这里把用户名和token保存起来

    }
  },
  actions: {

  }
}
