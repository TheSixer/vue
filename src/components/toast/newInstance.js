import Toast from './toast.vue'
import Vue from 'vue'

Toast.newInstance = properties => {
  const _props = properties || {}

  const Instance = new Vue({
    data: _props,
    render (h) {
      return h(Toast, {
        props: _props
      })
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  const toast = Instance.$children[0]

  return {
    notice (noticeProps) {
      toast.add(noticeProps)
    },
    remove (name) {
      toast.close(name)
    },
    component: notification,
    destroy (element) {
      toast.closeAll()
      setTimeout(function () {
        document.body.removeChild(document.getElementsByClassName(element)[0])
      }, 500)
    }
  }
}

export default Toast
