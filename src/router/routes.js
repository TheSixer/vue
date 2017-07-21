
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
const withdraw = r => require.ensure([], () => r(require('@/views/mine/withdraw/index')), 'withdraw')
const follow = r => require.ensure([], () => r(require('@/views/mine/follow/index')), 'follow')
const myBankCard = r => require.ensure([], () => r(require('@/views/mine/myBankCard/index')), 'myBankCard')
const addBankCard = r => require.ensure([], () => r(require('@/views/mine/myBankCard/addBankCard/index')), 'addBankCard')
const changePassword = r => require.ensure([], () => r(require('@/views/mine/changePassword/index')), 'changePassword')

const safeShop = r => require.ensure([], () => r(require('@/views/easyShop/index')), 'easyShop')
const commodityDetail = r => require.ensure([], () => r(require('@/views/easyShop/commodity-detail/index')), 'commodityDetail')

export default [ {
  path: '',
  meta: {
    title: 'Home'
  },
  component: home
}, {
  path: '/kongquehui',
  meta: {
    title: 'kongquehui'
  },
  component: kongquehui
}, {
  path: '/safeshop',
  meta: {
    title: 'safeShop'
  },
  component: safeShop
}, {
  path: '/activity-detail/:id',
  meta: {
    title: 'activityDetail'
  },
  component: activityDetail
}, {
  path: '/join-detail/:id',
  meta: {
    title: 'join-detail'
  },
  component: joinDetail
}, {
  path: '/confirm-order',
  meta: {
    title: 'confirm-order'
  },
  component: confirmOrder
}, {
  path: '/vote-gift',
  meta: {
    title: 'vote-gift'
  },
  component: voteGift
}, {
  path: '/vote-giftBag',
  meta: {
    title: 'vote-giftBag'
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
    title: 'enroll'
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
    title: 'myinfo'
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
    title: 'follow'
  },
  component: follow
}, {
  path: '/mine/withdraw',
  meta: {
    title: '提现'
  },
  component: withdraw
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
}]
