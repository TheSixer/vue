import { getQiniuToken } from '@/api/service'
import { RECORD_QINIUTOKEN } from '@/store/mutation-types'

export default {
  async recordQiniuToken ({
    commit,
    state
  }) {
    await getQiniuToken({

    }).then(res => {
      if (res.data.uptoken) {
        const token = {
          token: res.data.uptoken
        }
        commit(RECORD_QINIUTOKEN, token)
      }
    })
  }
}
