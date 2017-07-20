const home = r => require.ensure([], () => r(require('@/views/home/index')), 'home')
const kongquehui = r => require.ensure([], () => r(require('@/views/kongquehui/index')), 'kongquehui')
const enroll = r => require.ensure([], () => r(require('@/views/kongquehui/enroll/index')), 'enroll')
const activityDetail = r => require.ensure([], () => r(require('@/views/kongquehui/activity-detail/index')), 'activityDetail')
const safeShop = r => require.ensure([], () => r(require('@/views/easyShop/index')), 'easyShop')
const mine = r => require.ensure([], () => r(require('@/views/mine/index')), 'mine')
const commodityDetail = r => require.ensure([], () => r(require('@/views/easyShop/commodity-detail/index')), 'commodityDetail')
const balancerecord = r => require.ensure([], () => r(require('@/views/mine/balancerecord/balancerecord')), 'balancerecord')
const choosebank = r => require.ensure([], () => r(require('@/views/mine/choosebank/choosebank')), 'choosebank')
const withdraw = r => require.ensure([], () => r(require('@/views/mine/withdraw/withdraw')), 'withdraw')
const addbankcard = r => require.ensure([], () => r(require('@/views/mine/addbankcard/addbankcard')), 'addbankcard')
const mybankcard = r => require.ensure([], () => r(require('@/views/mine/mybankcard/mybankcard')), 'mybankcard')
const changepassword = r => require.ensure([], () => r(require('@/views/mine/changepassword/changepassword')), 'changepassword')
const orderdetails = r => require.ensure([], () => r(require('@/views/mine/orderdetails/orderdetails')), 'orderdetails')
const userrelations = r => require.ensure([], () => r(require('@/views/mine/userrelations/userrelations')), 'userrelations')
const collection = r => require.ensure([], () => r(require('@/views/mine/collection/collection')), 'collection')
export default [{
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
  path: '/mine',
  meta: {
    title: 'mine'
  },
  component: mine
}, {
  path: '/activity-detail/:id',
  meta: {
    title: 'activityDetail'
  },
  component: activityDetail
}, {
  path: '/enroll/:id',
  meta: {
    title: 'enroll'
  },
  component: enroll
}, {
  path: '/commodity-detail/:id',
  meta: {
    title: 'commodityDetail'
  },
  component: commodityDetail
}, {
  path: '/balancerecord',
  meta: {
    title: 'balancerecord'
  },
  component: balancerecord
}, {
  path: '/choosebank',
  meta: {
    title: 'choosebank'
  },
  component: choosebank
}, {
  path: '/withdraw',
  meta: {
    title: 'withdraw'
  },
  component: withdraw
}, {
  path: '/addbankcard',
  meta: {
    title: 'addbankcard'
  },
  component: addbankcard
}, {
  path: '/mybankcard',
  meta: {
    title: 'mybankcard'
  },
  component: mybankcard
}, {
  path: '/changepassword',
  meta: {
    title: 'changepassword'
  },
  component: changepassword
}, {
  path: '/orderdetails',
  meta: {
    title: 'orderdetails'
  },
  component: orderdetails
}, {
  path: '/userrelations',
  meta: {
    title: 'userrelations'
  },
  component: userrelations
}, {
  path: '/collection',
  meta: {
    title: 'collection'
  },
  component: collection
}]
