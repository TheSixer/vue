import * as types from './mutation-types'

export default {
  [types.LOGIN]: (state, data) => {
    localStorage.token = data
    state.token = data
  },
  [types.LOGOUT]: (state) => {
    localStorage.removeItem('token')
    state.token = null
  },
  [types.TITLE]: (state, data) => {
    state.title = data
  }
}
