// 全局挂载实例
export function globalInstance(Vue, option) {
	const constructor = Vue.extend(option);
	const instance = new constructor();
	instance.$mount(document.createElement("div"));
	document.body.appendChild(instance.$el);
	return instance;
}
