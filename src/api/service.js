import Util from '@/libs/util'
//  登录
export const login = data => Util.http.get('/api/login?userName=' + data.userName + '&password=' + data.password, {})
//  孔雀会主页
export const kongquehui = data => Util.http.get('/activity/index?status=' + data.status + '&flag=' + data.flag + '&specId=' + data.specId, {})
//  获取七牛存储Token
export const getQiniuToken = data => Util.http.get('/qiniu/getToken', {})
//  获取活动详情
export const activityDetailApi = data => Util.http.get('/activity/detail?activityId=' + data.activityId + '&memberId=' + data.memberId, {})
//  参与活动
export const joinActivity = data => Util.http.post('/activity_member', data, {})
//  参与详情
export const joinDetail = data => Util.http.get('/activity_member/detail?activityId=' + data.activityId + '&memberId=' + data.memberId, {})
//  获取免费票、礼物、礼包
export const getMyPoll = data => Util.http.get('/activity_member/poll?memberId=' + data.memberId, {})
//  投免费票
export const voteGratis = data => Util.http.post('/poll/voteGratis', data, {})
//  确认订单-赠礼物
export const voteGift = data => Util.http.get('/poll/voteGift?giftId=' + data.giftId, {})
//  赠礼支付页面-
export const payGift = data => Util.http.get('/poll/gift_pay?giftId=' + data.giftId + '&memberId=' + data.memberId, {})
//  礼物-余额支付-
export const payOfAccount = data => Util.http.post('/poll/gift_pay_account', data, {})
//  确认订单-赠送礼包
export const voteGiftBag = data => Util.http.get('/poll/voteGiftBag?giftBagId=' + data.giftBagId, {})
//  礼包-余额支付-
export const payGiftBagOfAccount = data => Util.http.get('/poll/giftBag_pay_account', {})
//  榜单
export const getRank = data => Util.http.get('/activity/other_index', {})
//  注册
export const register = data => Util.http.post('/member/register', data, {})
//  设置支付密码
export const setPaymentPwd = data => Util.http.post('/member/pay_pwd', data, {})
//  获取用户信息
export const getUserInfo = data => Util.http.get('/member/detail?memberId=' + data.memberId, {})
//  我的银行卡
export const getBankCards = data => Util.http.get('/member_bank/list?memberId=' + data.memberId, {})
//  用户-添加银行卡
export const addBankCard = data => Util.http.post('/member_bank/add', data, {})
//  用户-删除银行卡
export const deleteBankCard = data => Util.http.delete('/member_bank/delete?bankId=' + data.bankId, {})
//  用户-余额记录
export const getAccountRecord = data => Util.http.get('/member/balanceRecord?memberId=' + data.memberId, {})
//  用户-积分记录
export const getIntegralRecord = data => Util.http.get('/member/integralRecord?memberId=' + data.memberId, {})
//  用户-提现页面
export const withdraw = data => Util.http.get('/member/withdraw?memberId=' + data.memberId, {})
//  用户-申请提现
export const withdrawApply = data => Util.http.post('/member/withdraw_apply', data, {})
//  我的关注
export const myAttention = data => Util.http.get('/member_attention/list/' + data.memberId, {})
//  添加关注
export const addAttention = data => Util.http.post('/member_attention/add', data, {})
//  取消关注
export const cancleAttention = data => Util.http.delete('/member_attention/cancal', data, {})
//  我的收藏
export const myCollect = data => Util.http.get('/member_collect/list/' + data.memberId, {})
//  添加收藏
export const addCollect = data => Util.http.post('/member_collect/add', data, {})
//  取消收藏
export const cancleCollect = data => Util.http.delete('/member_collect/cancal', data, {})
//  我的活动
export const getMyActivity = data => Util.http.get('/activity_member/my?memberId' + data.memberId, {})
//  谁为我投票
export const getMyFans = data => Util.http.get('/poll/my?memberId=' + data.memberId, {})
//  用户关系
export const getUserRelate = data => Util.http.get('', {})
//  门店信息
export const getStoreInfo = data => Util.http.get('/store/list', {})
//  个人主页
export const getPersonalInfo = data => Util.http.get('/activity/page?memberId=' + data.memberId + '&otherMemberId=' + data.otherMemberId + '&activityId=' + data.activityId, {})
//  个人主页详情
export const getUserInfoDetail = data => Util.http.get('/activity/page_detail?memberId=' + data.memberId + '&activityId=' + data.activityId, {})
