import App from '@/App'

const home = r => require.ensure([], () => r(require('@/views/home/index')), 'home')
const kongquehui = r => require.ensure([], () => r(require('@/views/kongquehui/index')), 'kongquehui')
const activityDetail = r => require.ensure([], () => r(require('@/views/kongquehui/activity-detail/index')), 'activityDetail')
const safeShop = r => require.ensure([], () => r(require('@/views/easyShop/index')), 'easyShop')
const mine = r => require.ensure([], () => r(require('@/views/mine/index')), 'mine')
const commodityDetail = r => require.ensure([], () => r(require('@/views/easyShop/commodity-detail/index')), 'commodityDetail')

export default [{
  path: '',
  meta: {
    title: 'Index'
  },
  component: App,
  children: [{
    path: '',
    component: home
  }, {
    path: '/kongquehui',
    component: kongquehui
  }, {
    path: '/safeshop',
    component: safeShop
  }, {
    path: '/mine',
    component: mine
  }, {
    path: '/activity-detail/:id',
    component: activityDetail
  }, {
    path: '/commodity-detail/:id',
    component: commodityDetail
  }]
}]
