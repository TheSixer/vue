import LoadingComponent from './Loading.vue'

const Loading = {
  install (Vue) {
    const Instance = Vue.extend(LoadingComponent)

    const tpl = new Instance().$mount().$el
    document.body.appendChild(tpl)
  }
}
export default Loading
