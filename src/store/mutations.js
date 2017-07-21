import * as Types from './mutation-types'

export default {
  [Types.LOGIN]: (state, data) => {
    localStorage.token = data
    state.token = data
  },
  [Types.LOGOUT]: (state) => {
    localStorage.removeItem('token')
    state.token = null
  },
  [Types.TITLE]: (state, data) => {
    state.title = data
  },
  [Types.GET_CURRENTUSER_MEMBERID]: (state, data) => {
    state.memberId = data
  },
  [Types.RECORD_QINIUTOKEN]: (state, data) => {
    state.qiniuToken = data
  }
}
