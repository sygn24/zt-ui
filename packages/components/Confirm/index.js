import Confirm from './Confirm.vue'
import Vue from 'vue'

let instance
const confirm = (options) => {
  if (typeof options === 'string') {
    options = {
      content: options,
    }
  }
  // 使用基础 Vue 构造器，创建一个子类
  const constructor = Vue.extend(Confirm)
  instance = new constructor({
    el: document.createElement('div'),
    data: options
  })
  // 显示对话框
  instance.visable = true
  //将实例挂载到body下
  document.body.appendChild(instance.$el)
}
// 添加移除方法，异步关闭时调用
confirm.remove = () => {
  if (instance.visable) {
    instance.remove()
  }
}
// 挂载不同的提示类型
['success', 'error', 'info', 'warning'].forEach(type => {
  confirm[type] = options => {
    if (typeof options === 'string') {
      options = {
        content: options
      }
    }
    return confirm({ type, ...options })
  }
})

export default confirm