import { getQiniuToken } from '@/api/service'
import {
  GET_CURRENTUSER_MEMBERID,
  RECORD_QINIUTOKEN
} from '@/store/mutation-types'

export default {
  async recordQiniuToken ({
    commit,
    state
  }) {
    await getQiniuToken({}).then(res => {
      if (res.data.uptoken) {
        const token = {
          token: res.data.uptoken
        }
        commit(RECORD_QINIUTOKEN, token)
      }
    })
  },
  getUserMemberId ({
    commit,
    state
  }) {
    // const token = localStorage.getItem('token')

    commit(GET_CURRENTUSER_MEMBERID, '000101')
  }
}
