import Vue from 'vue';
import Loading from './Loading.vue';

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
      loading ? createLoading(el, options) : removeLoading(el?.LoadingInstance?.$el)
    },
    unbind (el, binding) {
      const { loading } = binding.value || {}
      // 如果还在展示加载特效，则关闭
      loading && removeLoading(el?.LoadingInstance?.$el)
    }
  })
}

const createLoading = (target, options) => {
  // 判断当前的Vue实例是否运行在服务器上，判断是否已经开启加载特效
  if (Vue.prototype.$isServer || target?.LoadingInstance) return
  const parentNode = target || document.body

  // 判断是否存在定位，没有则添加定位
  const position = getComputedStyle(parentNode).position
  if (!position || position == 'static') parentNode.style.position = 'relative'
  
  // 创建loading实例
  const loadingConstructor = Vue.extend(Loading)
  const instance = new loadingConstructor({
    el: document.createElement('div'),
    propsData: options,
  })

  //显示加载，将实例添加到DOM树，并将实例引用存储在父节点上以便后续移除
  instance.show = true
  parentNode.appendChild(instance.$el)
  parentNode.LoadingInstance = instance
}

const removeLoading = (target) => {
  if (!target) return
  target.parentNode.LoadingInstance.show = false
  target.parentNode.LoadingInstance = null
}

export default loadingDirective