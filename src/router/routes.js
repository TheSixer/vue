const home = r => require.ensure([], () => r(require('@/views/home/index')), 'home')
const kongquehui = r => require.ensure([], () => r(require('@/views/kongquehui/index')), 'kongquehui')
const enroll = r => require.ensure([], () => r(require('@/views/kongquehui/enroll/index')), 'enroll')
const activityDetail = r => require.ensure([], () => r(require('@/views/kongquehui/activity-detail/index')), 'activityDetail')
const safeShop = r => require.ensure([], () => r(require('@/views/easyShop/index')), 'easyShop')
const mine = r => require.ensure([], () => r(require('@/views/mine/index')), 'mine')
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
}]
