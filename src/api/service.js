import Util from '@/libs/util'

export const login = data => Util.http.get('/api/login?userName=' + data.userName + '&password=' + data.password, {})

export const kongquehui = data => Util.http.get('/activity/index?status=' + data.status + '&flag=' + data.flag + '&specId=' + data.specId, {})

export const activityDetailApi = data => Util.http.get('/activity/detail?activityId=' + data.activityId + '&memberId=' + data.memberId, {})
