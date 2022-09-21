import Vue from 'vue';
import Loading from './Loading.vue';

let instance

const loadingDirective = (Vue) => {
  Vue.directive('loading', {
    update (el, binding) {
      // 获取绑定的值
      const value = binding.value
      let options = {}
      // 判断参数类型，将参数都转换为对象，方便后续统一处理
      if (typeof value === 'boolean') {
        options.loading = value
      } else {
        options = value || {}
      }
      const { loading } = options
      loading ? createLoading(el, options) : remove(el?.LoadingInstance?.$el)
    },
    unbind (el, binding) {
      const { loading } = binding.value || {}
      // 如果还在展示加载特效，则关闭
      loading && remove(el?.LoadingInstance?.$el)
    }
  })
}

const createLoading = (target, options) => {
  // 判断当前的Vue实例是否运行在服务器上,判断是否已经开启加载特效
  if (Vue.prototype.$isServer || target?.LoadingInstance) return
  const parentNode = target || document.body

  // 判断是否存在定位，没有则添加定位
  const position = getComputedStyle(parentNode).position
  if (!position || position == 'static') parentNode.style.position = 'relative'

  // 设置默认背景色和文字为空
  if (!options.bgColor) options.bgColor = 'hsla(0,0%,100%,.9)'
  if (!options.text) options.text = ''
  // 创建loading实例
  const loadingConstructor = Vue.extend(Loading)
  instance = new loadingConstructor({
    el: document.createElement('div'),
    propsData: options,
  })
  // 显示加载
  instance.show = true
  //loading实例是一个Vue组件对象，真正的DOM放在实例的$el属性上
  parentNode.appendChild(instance.$el)
  parentNode.LoadingInstance = instance
}

const remove = (target) => {
  if (!target) return
  instance.show = false
  target.parentNode.LoadingInstance = null

}

export default loadingDirective