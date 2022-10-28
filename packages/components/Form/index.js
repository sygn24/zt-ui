import Form from './Form.vue'
import FormItem from './FormItem.vue'

Form.install = function (Vue) {
    Vue.component(Form.name, Form)
}

FormItem.install = function (Vue) {
    Vue.component(FormItem.name, FormItem)
}

export { Form, FormItem }
