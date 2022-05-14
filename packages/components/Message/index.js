import ZtMessage from "./ZtMessage.vue";
import Vue from "vue";

let instanceArr = [];
let num = 0;

function creatMsg(options) {
	if (typeof options === "string") {
		options = {
			msg: options,
		};
	}
	// 使用基础 Vue 构造器，创建一个子类
	const constructor = Vue.extend(ZtMessage);
	const instance = new constructor({
		el: document.createElement("div"),
		propsData: options, //创建实例时传递props
	});
	//获取新创建的实例的初始top值
	let newMsgTop = instance.top;
	// 遍历Msg实例数组，计算新创建的实例的对应top值，用于将新实例放到旧的实例后面
	instanceArr.forEach(item => {
		newMsgTop += item.$el.offsetHeight + 15;
	});
	instance.top = newMsgTop;
	// 给实例添加一个id属性，供后面删除时查找
	instance.msgId = ++num + "msg";
	// 给实例添加关闭方法，当关闭的时候从instanceArr数组中删除当前实例
	instance.onClose = () => {
		closeMsg(instance.msgId);
	};
	// 将新创建的实例存到实例数组中
	instanceArr.push(instance);
	// 显示msg弹框
	instance.show = true;
	document.body.appendChild(instance.$el);
	// return instance;
}

// 根据msgId从instanceArr实例数组中删除Msg实例
function closeMsg(msgId) {
	let removeIndex;
	let removeOffsetHeight;
	instanceArr.forEach((item, i) => {
		if (item.msgId === msgId) {
			removeIndex = i;
			removeOffsetHeight = item.$el.offsetHeight;
		}
	});
	//删除Msg实例
	instanceArr.splice(removeIndex, 1);
	// 将删除的实例之后的Msg实例的位置向上移动
	instanceArr.forEach((item, i) => {
		if (i >= removeIndex) {
			item.top = item.top - 15 - removeOffsetHeight;
		}
	});
}
// 挂载不同类型的提示
["success", "error", "info", "warning"].forEach(type => {
	creatMsg[type] = options => {
		if (typeof options === "string") {
			options = {
				msg: options,
			};
		}
		return creatMsg({ type, ...options });
	};
});

export default creatMsg;
