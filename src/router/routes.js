import App from '@/App'

const home = r => require.ensure([], () => r(require('@/views/home/index')), 'home')
const kongquehui = r => require.ensure([], () => r(require('@/views/kongquehui/index')), 'kongquehui')
const activityDetail = r => require.ensure([], () => r(require('@/views/kongquehui/activity-detail/index')), 'activityDetail')
const mine = r => require.ensure([], () => r(require('@/views/mine/index')), 'mine')
const test = r => require.ensure([], () => r(require('@/views/kongquehui/test/index')), 'test')

export default [{
  path: '/',
  meta: {
    title: 'Index'
  },
  component: App,
  children: [{
    path: '',
    component: home
  }, {
    path: 'kongquehui',
    component: kongquehui
  }, {
    path: 'mine',
    component: mine
  }, {
    path: 'activity-detail',
    component: activityDetail
  }, {
    path: 'test',
    meta: {
      title: 'Test'
    },
    component: test
  }]
}]
