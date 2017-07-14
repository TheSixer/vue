import {login} from '@/api/service'
import {SETUSER} from '@/store/mutation-types'

export default {
  state: {
    currentUser: {
      getUserName () {
        return localStorage.getItem('currentUser')
      },
      getUserToken () {
        return localStorage.getItem('token')
      }
    }
  },
  mutations: {
    [SETUSER] (state, {currentUser, token}) {
      // 在这里把用户名和token保存起来
      localStorage.setItem('currentUser', currentUser)
      localStorage.setItem('token', token)
    },
    logout: function (state) {
      this.$Tips.info('log out success!')
      localStorage.removeItem('currentUser')
      localStorage.removeItem('token')
    }
  },
  actions: {
    userLogin (context, {userName, password}) {
      login({userName: userName, password: password})
        .then((res) => {
          if (res !== null && res.body !== undefined && 'access-token' in res.body) {
            var token = res.body['access-token']
            if (token !== '') {
              // 后端API验证通过
              // 调用上面mutations里定义的方法
              context.commit('setUser', {'currentUser': userName, 'token': token})
            }
          } else {
            alert('用户名密码错误')
          }
        }, (res) => {
          alert('请求失败进入这里')
        })
    },
    logout (context) {
      context.commit('logout')
    }
  }
}
