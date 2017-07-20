import Notification from './notification'
import Vue from 'vue'

let isAutoClose = true
let defaultDuration = 5
let showCountDownBar = false

function notice (content = '', duration = defaultDuration, type, autoClose = isAutoClose, countdownBar = showCountDownBar) {
  const _props = {
    content,
    duration,
    type,
    autoClose,
    countdownBar
  }

  const Instance = new Vue({
    data: _props,
    render (h) {
      return h(Notification, {
        props: _props
      })
    }
  })
  console.log(Instance)
  const component = Instance.$mount()
  document.body.appendChild(component.$el)
}

const methods = {
  success (options) {
    const type = typeof options
    if (type === 'string') {
      options = {
        content: options
      }
    }
    return notice(options.content, options.duration, 'success', options.autoClose, options.countdownBar)
  },
  error (options) {
    const type = typeof options
    if (type === 'string') {
      options = {
        content: options
      }
    }
    return notice(options.content, options.duration, 'error', options.autoClose, options.countdownBar)
  },
  info (options) {
    const type = typeof options
    if (type === 'string') {
      options = {
        content: options
      }
    }
    return notice(options.content, options.duration, 'info', options.autoClose, options.countdownBar)
  },
  warning (options) {
    const type = typeof options
    if (type === 'string') {
      options = {
        content: options
      }
    }
    return notice(options.content, options.duration, 'warning', options.autoClose, options.countdownBar)
  },
  flexible (options) {
    const type = typeof options
    if (type === 'string') {
      options = {
        content: options
      }
    }
    return notice(options.content, options.duration, 'flexible', options.autoClose, options.countdownBar)
  }
}

export default {
  install (Vue) {
    Vue.prototype.$Aleter = methods
  }
}
