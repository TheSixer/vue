import NewInstance from './newInstance'

const prefixCls = 'ivu-message'
const iconPrefixCls = 'ivu-icon'
const prefixKey = 'ivu_message_key_'

let defaultDuration = 10

function getMessageInstance () {
  messageInstance = messageInstance || NewInstance.newInstance({
    prefixCls: prefixCls,
    styles: {
      top: `${top}px`
    }
  })

  return messageInstance
}


function getMessageInstance () {
  messageInstance = messageInstance || Notification.newInstance({
    prefixCls: prefixCls,
    styles: {
      top: `${top}px`
    }
  })

  return messageInstance
}

function notice (content = '', type, duration = defaultDuration) {

  // if loading
  const loadCls = type === 'loading' ? ' ivu-load-loop' : ''

  let instance = getMessageInstance()

  instance.notice({
    name: `${prefixKey}${name}`,
    duration: duration,
    transitionName: 'move-up',
    content: `
      <div class="${type}">
        <span>${content}</span>
      </div>
    `
  })

  // 用于手动消除
  return (function () {
    let target = name++

    return function () {
      instance.remove(`${prefixKey}${target}`)
    }
  })()
}

let types = {
  loading (options) {
    return notice('Loading...', 'loading', options.duration)
  },
  success (options) {
    return notice('Success!', 'success', options.duration)
  },
  faild (options) {
    return notice('Faild!', 'faild', options.duration)
  }
}

const Toast = {
  install (Vue, config) {
    Vue.prototype.$Toast = types
  }
}
export default Toast
