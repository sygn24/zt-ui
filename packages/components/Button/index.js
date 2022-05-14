// 导入组件，组件必须声明 name
import ZtButton from "./ZtButton.vue";

// 为组件提供 install 安装方法，供按需引入
ZtButton.install = function (Vue) {
	Vue.component(ZtButton.name, ZtButton);
};

// 导出组件
export default ZtButton;
