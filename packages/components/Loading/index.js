import Loading from './Loading.vue'
import Vue from 'vue'
let instance
const loading = (options) => {
  if (typeof options === 'string') {
    options = {
      text: options
    }
  }
  // 使用基础 Vue 构造器，创建一个子类
  const constructor = Vue.extend(Loading)
  instance = new constructor({
    el: document.createElement('div'),
    propsData: options
  })
  //将实例挂载到body下
  document.body.appendChild(instance.$el)
}
loading.start = (options) => {
  loading(options)
  instance.show = true 
}

// 添加关闭方法
loading.close = () => {
  if (instance.show) {
    instance.show = false
  }
}

export default loading