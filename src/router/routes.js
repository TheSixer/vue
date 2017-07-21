
const home = r => require.ensure([], () => r(require('@/views/home/index')), 'home')

const kongquehui = r => require.ensure([], () => r(require('@/views/kongquehui/index')), 'kongquehui')
const enroll = r => require.ensure([], () => r(require('@/views/kongquehui/enroll/index')), 'enroll')
const activityDetail = r => require.ensure([], () => r(require('@/views/kongquehui/activity-detail/index')), 'activityDetail')
const joinDetail = r => require.ensure([], () => r(require('@/views/kongquehui/join-detail/index')), 'joinDetail')
const voteGift = r => require.ensure([], () => r(require('@/views/kongquehui/vote/voteGift')), 'voteGift')
const voteGiftBag = r => require.ensure([], () => r(require('@/views/kongquehui/vote/voteGiftBag')), 'voteGiftBag')
const rank = r => require.ensure([], () => r(require('@/views/kongquehui/rank/index')), 'rank')
const confirmOrder = r => require.ensure([], () => r(require('@/views/kongquehui/confirm-order/index')), 'confirmOrder')
const personal = r => require.ensure([], () => r(require('@/views/kongquehui/personal/index')), 'personal')
const supporter = r => require.ensure([], () => r(require('@/views/kongquehui/supporter/index')), 'supporter')

const mine = r => require.ensure([], () => r(require('@/views/mine/index')), 'mine')
const myInfo = r => require.ensure([], () => r(require('@/views/mine/myInfo/index')), 'myInfo')
const balanceRecord = r => require.ensure([], () => r(require('@/views/mine/balanceRecord/index')), 'balanceRecord')
const integralRecord = r => require.ensure([], () => r(require('@/views/mine/integralRecord/index')), 'integralRecord')
const follow = r => require.ensure([], () => r(require('@/views/mine/follow/index')), 'follow')
const collection = r => require.ensure([], () => r(require('@/views/mine/collection/index')), 'collection')
const myActivity = r => require.ensure([], () => r(require('@/views/mine/myActivity/index')), 'myActivity')
const myBankCard = r => require.ensure([], () => r(require('@/views/mine/myBankCard/index')), 'myBankCard')
const withdraw = r => require.ensure([], () => r(require('@/views/mine/withdraw/index')), 'withdraw')
const recharge = r => require.ensure([], () => r(require('@/views/mine/recharge/index')), 'recharge')
const addBankCard = r => require.ensure([], () => r(require('@/views/mine/myBankCard/addBankCard/index')), 'addBankCard')
const changePassword = r => require.ensure([], () => r(require('@/views/mine/changePassword/index')), 'changePassword')

const safeShop = r => require.ensure([], () => r(require('@/views/easyShop/index')), 'easyShop')
const commodityDetail = r => require.ensure([], () => r(require('@/views/easyShop/commodity-detail/index')), 'commodityDetail')
const payanother = r => require.ensure([], () => r(require('@/views/mine/payanother/payanother')), 'payanother')
const servicestore = r => require.ensure([], () => r(require('@/views/mine/servicestore/servicestore')), 'servicestore')
const payment = r => require.ensure([], () => r(require('@/views/mine/payment/payment')), 'payment')

export default [{
  path: '',
  meta: {
    title: 'Home'
  },
  component: home
}, {
  path: '/kongquehui',
  meta: {
    title: '孔雀会'
  },
  component: kongquehui
}, {
  path: '/safeshop',
  meta: {
    title: '安全购'
  },
  component: safeShop
}, {
  path: '/activity-detail/:id',
  meta: {
    title: '活动详情'
  },
  component: activityDetail
}, {
  path: '/join-detail/:id',
  meta: {
    title: '参与活动'
  },
  component: joinDetail
}, {
  path: '/confirm-order',
  meta: {
    title: '确认订单'
  },
  component: confirmOrder
}, {
  path: '/vote-gift',
  meta: {
    title: '赠送礼物'
  },
  component: voteGift
}, {
  path: '/vote-giftBag',
  meta: {
    title: '赠送礼包'
  },
  component: voteGiftBag
}, {
  path: '/personal/:actId/:id',
  meta: {
    title: '个人主页'
  },
  component: personal
}, {
  path: '/supporter/:id/:userId',
  meta: {
    title: '支持者'
  },
  component: supporter
}, {
  path: '/enroll/:id',
  meta: {
    title: '参与活动'
  },
  component: enroll
}, {
  path: '/rank',
  meta: {
    title: '日榜/月榜'
  },
  component: rank
}, {
  path: '/mine',
  meta: {
    title: 'mine'
  },
  component: mine
}, {
  path: '/mine/myinfo',
  meta: {
    title: '我的信息'
  },
  component: myInfo
}, {
  path: '/mine/balance-record',
  meta: {
    title: '余额纪录'
  },
  component: balanceRecord
}, {
  path: '/mine/integral-record',
  meta: {
    title: '美分纪录'
  },
  component: integralRecord
}, {
  path: '/mine/follow',
  meta: {
    title: '我的关注'
  },
  component: follow
}, {
  path: '/mine/recharge',
  meta: {
    title: '充值'
  },
  component: recharge
}, {
  path: '/mine/withdraw',
  meta: {
    title: '提现'
  },
  component: withdraw
}, {
  path: '/mine/collection',
  meta: {
    title: '我的收藏'
  },
  component: collection
}, {
  path: '/mine/activity',
  meta: {
    title: '我的活动'
  },
  component: myActivity
}, {
  path: '/mine/my-bank-card',
  meta: {
    title: '我的银行卡'
  },
  component: myBankCard
}, {
  path: '/mine/my-bank-card/add-bank-card',
  meta: {
    title: '添加银行卡'
  },
  component: addBankCard
}, {
  path: '/mine/change-password',
  meta: {
    title: '修改密码'
  },
  component: changePassword
}, {
  path: '/commodity-detail/:id',
  meta: {
    title: 'commodityDetail'
  },
  component: commodityDetail
}, {
  path: '/payanother',
  meta: {
    title: 'payanother'
  },
  component: payanother
}, {
  path: '/servicestore',
  meta: {
    title: 'servicestore'
  },
  component: servicestore
}, {
  path: '/payment',
  meta: {
    title: 'payment'
  },
  component: payment
}]
